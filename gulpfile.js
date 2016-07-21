'use strict';

var gulp = require('gulp'),
	 inject = require('gulp-inject'),
	 sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./stylesheet'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('index', function() {
 gulp.src('index.html')
  .pipe(inject(gulp.src(['./stylesheet/*.css',
   './node_modules/jquery/dist/*.min.js',
    './node_modules/bootstrap/dist/css/*.min.css',
    './node_modules/bootstrap/dist/js/*bootstrap.min.js'], {read: false}), {relative: true}))
  .pipe(gulp.dest(''));
});

gulp.task('admin', function() {
 gulp.src('./views/admin/admin.html')
  .pipe(inject(gulp.src([
  	'./node_modules/jquery/dist/*.min.js',
  	'./app/*js',
  	'./app/*min.js',
    './node_modules/bootstrap/dist/css/*.min.css',
    './node_modules/bootstrap/dist/js/*bootstrap.min.js',
    './bower_components/angular/*.min.js',
    './bower_components/angular-route/*.min.js',
    './bower_components/angular-ui-router/release/*.min.js',
    'app.module.js',
    'app.config.js',
    './admin.scss/*.css'], {read: false}), {relative: false}))
  .pipe(gulp.dest('./views/admin'));
});

