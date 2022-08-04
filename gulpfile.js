const { src, dest, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const concatCss = require('gulp-concat-css')
const minifyCss = require('gulp-minify-css')
const webpack = require('webpack-stream')
// const sourcemaps = require('gulp-sourcemaps')

const paths = {
    css: ['app/**/*.scss'],
    html: ['app/**/*.html'],
    js: ['app/**/*.js'],
    jsEntry: ['app/js/entry.js'],
    jsStarfield: ['app/js/starfield.js'],
    test: ['test/testRoutes.js'],
}

function css() {
    return src(paths.css, {sourcemaps: true})
        .pipe(sass())
        .pipe(dest('app/css/'))
        .pipe(concatCss('style.min.css'))
        .pipe(minifyCss())
        .pipe(dest('build/'), {sourcemaps: true})
}

function html() {
    return src(paths.html)
        .pipe(dest('build/'))
}

function js() {
    src(paths.jsStarfield).pipe(dest('build/'))

    return src(paths.jsEntry)
        .pipe(webpack({output: {filename: 'bundle.js'}}))
        .pipe(dest('build/'))
        
}

exports.default = parallel(css, html, js);