'use strict';
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');
const concatCss = require('gulp-concat-css');
const minifyCss = require('gulp-clean-css');
const webpack = require('gulp-webpack');
const webpackS = require('webpack-stream');

var files = ['gulpfile.js', 'server.js', __dirname + '/lib/**/*.js', __dirname + '/test/**/*.js',
            __dirname + '/models/**/*.js', __dirname + '/routes/**/*.js',  __dirname + '/test/e2e/*.js'];
var client = [__dirname + '/app/js/*.js', __dirname + '/app/css/*.css', __dirname + '/app/index.html'];
var temp = [__dirname + '/test/*_spec.js',  __dirname + '/app/js/index.js', __dirname + '/app/index.html'];
const sources = {
  html: __dirname + '/app/index.html',
  js: __dirname + '/app/js/index.js',
  test: __dirname + '/test/*_spec.js',
  views: __dirname + '/views/*.html',
  css: __dirname + '/app/css/*.css'
};
//Run mocha for tests
gulp.task('mocha', function() {
  return gulp.src(__dirname +'/test/rest_test.js', {read: false})
             .pipe(mocha( {reporter: 'nyan'}));
});

//Run eslint linter tool
gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(eslint({//Commented out the .eslintrc file and added option to lint task
      'rules': {
        'no-console': 0,
        'indent': [
          2,
          2
        ],
        'quotes': [
          2,
          'single'
        ],
        'linebreak-style': [
          2,
          'unix'
        ],
        'semi': [
          2,
          'always'
        ]
      },
      'env': {
        'es6': true,
        'node': true,
        'browser': true
      },
      'globals': {
        'describe': false,
        'it': false,
        'beforeEach': false,
        'afterEach': false,
        'before': false,
        'after': false
      },
      'ecmaFeatures': {
        'modules': true,
        'experimentalObjectRestSpread': true
      },
      'extends': 'eslint:recommended'
    }))
    .pipe(eslint.format());
});

gulp.task('build:html', function() {
  gulp.src('app/index.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('build:css', function() {
  gulp.src('app/css/*.css')
  .pipe(gulp.dest('build/css/'));
});

gulp.task('build:views', function() {
  gulp.src('app/views/**')
  .pipe(gulp.dest('build/views/'));
});

gulp.task('bundle:test', () => {
  return gulp.src(sources.test)
    .pipe(webpackS({output: {filename: 'test_bundle.js'}}))
    .pipe(gulp.dest('./test'));
});

gulp.task('css', function() {
  return gulp.src(sources.css)
  .pipe(concatCss('styles.min.css'))
  .pipe(minifyCss({compatibility: 'ie8'}))
  .pipe(gulp.dest('./build/css'));
});

gulp.task('webpack', function() {
  return gulp.src(__dirname + '/app/js/index.js')
    .pipe(webpack( require('./webpack.config.js')))
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('watch', function() {
  gulp.watch(temp, files, ['webpack', 'build:html', 'build:css', 'bundle:test', 'build:views']);
});
gulp.task('build',['build:html', 'build:css', 'webpack']);
//Run tasks on changes to files
gulp.task('default', ['webpack', 'build:html', 'css', 'bundle:test', 'build:views']);
