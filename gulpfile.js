var gulp = require('gulp');

var gulp = require('gulp');
var gutil = require('gulp-util');
var lr = require('tiny-lr');
 
// Include CSS components
var less = require('gulp-less');
var prefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
 
// Include JS components
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
 
// Include utilities
var rename = require("gulp-rename");
var livereload = require('gulp-livereload');
var server = lr();


gulp.task('default', function () { console.log('Hello Gulp!') });