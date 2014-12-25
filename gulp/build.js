'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del', 'run-sequence']
});

gulp.task('jshint', function () {
  return gulp.src('src/{app,components}/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size());
});

var inject = function (jsSrc) {
  return function () {
    return gulp.src('src/*.html')
      .pipe($.inject(gulp.src(jsSrc), {
        read: false,
        starttag: '<!-- inject:js -->',
        relative: true,
      }))
      .pipe($.inject(gulp.src('src/{app,components}/**/*.css'), {
        read: false,
        starttag: '<!-- inject:css -->',
        relative: true,
      }))
      .pipe(gulp.dest('src'))
      .pipe($.size());
  };
};

gulp.task('inject:dev', inject(['src/{app,components}/**/*.js', '!src/{app,components}/**/*.{spec,e2e}.js']));
gulp.task('inject', inject(['src/{app,components}/**/*.js', '!src/{app,components}/**/*.{spec,e2e,dev}.js']));

gulp.task('partials', function () {
  return gulp.src('src/{app,components}/**/*.html')
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: 'ngHtml2js',
    }))
    .pipe(gulp.dest('.tmp/partials'))
    .pipe($.size());
});

gulp.task('html', ['wiredep', 'jshint', 'partials'], function () {
  var htmlFilter = $.filter('*.html');
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');
  var assets;

  return gulp.src('src/*.html')
    .pipe($.inject(gulp.src('.tmp/partials/{app,components}/**/*.js'), {
      read: false,
      starttag: '<!-- inject:partials -->',
      addRootSlash: false,
      addPrefix: '../'
    }))
    .pipe(assets = $.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.replace('debugInfoEnabled(true)', 'debugInfoEnabled(false)'))
    .pipe($.replace('//\'ngHtml2js\'', '\'ngHtml2js\''))
    .pipe($.ngAnnotate())
    .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      conditionals: true
    }))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('images', function () {
  return gulp.src('src/assets/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe($.size());
});

gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size());
});

gulp.task('misc', function () {
  return gulp.src('src/**/*.icoangular')
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('clean', function (done) {
  $.del(['.tmp', 'dist', 'coverage'], done);
});

gulp.task('build', function (done) {
  $.runSequence('clean', ['html', 'images', 'fonts', 'misc'], done);
});

gulp.task('build:production', function (done) {
  $.runSequence('inject', 'build', 'inject:dev', done);
});

gulp.task('build:dev', function (done) {
  $.runSequence('inject:dev', 'build', done);
});

gulp.task('test', function (done) {
  $.runSequence('jshint', 'karma', 'protractor', done);
});

gulp.task('test:dist', function (done) {
  $.runSequence('build:dev', 'karma:dist', 'protractor:dist', done);
});
