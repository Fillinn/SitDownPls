const { src, dest, series, watch } = require('gulp');

const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const Autoprefixer = require('gulp-autoprefixer')
const CleanCSS = require('gulp-clean-css')
const BrowserSync = require('browser-sync').create()
const SvgSprite = require('gulp-svg-sprite')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify-es').default
const Image = require('gulp-image')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
// concat
const styles = () => {
    return src('src/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(Autoprefixer({
        cascade: false
    }))
    .pipe(CleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('app'))
    .pipe(BrowserSync.stream())
}

// BrowserSync
const WatchFile = () => {
    BrowserSync.init({
        server: {
            baseDir: 'app'
        }
    })
}

// htmlMin
const html = () => {
    return src('src/**/*.html')
    .pipe(dest('app'))
    .pipe(BrowserSync.stream())
}

// htmlMin
const htmlMinifyBuild = () => {
    return src('src/**/*.html')
    .pipe(htmlMin({
        collapseWhitespace: true,
    }))
    .pipe(dest('app'))
}

// Svg-Sprite
const SvgSpriteFile = () => {
    return src('src/images/svg/**/*.svg')
    .pipe(SvgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg' 
            }
        },
    }
    ))
    .pipe(dest('app/images'))  
}

// Script 
const ScriptFile = () => {
    return src([
        'src/js/components/**/*js',
        'src/js/main.js',
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify({
        toplevel: true,
    }).on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('app/js'))
    .pipe(BrowserSync.stream())
}

// Resources
const resource = () => {
    return src('src/resource/**',)
    .pipe(dest('app'))
}

// ResourcesJs
const resourceJS = () => {
    return src('src/js/resource/*.js',)
    .pipe(dest('app/js/resource'))
}

// DEL 
const clean = () => {
    return del(['app'])
}

// Image
const ImageFile = () => {
    return src([
        'src/images/**/*.webp',
        'src/images/**/*.jpeg',
        'src/images/**/*.jpg',
        'src/images/**/*.png',
        'src/Images/*.svg',
    ])
    .pipe(Image())
    .pipe(dest('app/images'))
}

// watch
watch('src/**/*.html', html)
watch('src/styles/*.css', styles)
watch('src/images/svg/**/*.svg', SvgSpriteFile)
watch('src/js/**/*js', ScriptFile)

// ------------------------BUILD------------------------

// Script Build
const ScriptBuild = () => {
    return src([
        'src/js/components/**/*js',
        'src/js/main.js',
    ])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify({
        toplevel: true,
    }).on('error', notify.onError()))
    .pipe(dest('app'))
}

// concat build
const stylesBuld = () => {
    return src('src/styles/**/*.css')
    .pipe(concat('main.css'))
    .pipe(Autoprefixer({
        cascade: false
    }))
    .pipe(CleanCSS({
        level: 2
    }))
    .pipe(dest('app'))
}
// ------------------------/BUILD------------------------

exports.resource = resource
exports.clean = clean
exports.styles = styles
exports.stylesBuld = stylesBuld
exports.htmlMinifyBuild = htmlMinifyBuild
exports. html = html
exports.SvgSpriteFile = SvgSpriteFile
exports.ScriptBuild = ScriptBuild
exports.ScriptFile = ScriptFile
exports.default = series(clean, styles, html, resource, resourceJS, ImageFile, ScriptFile, SvgSpriteFile, WatchFile)
exports.build = series(stylesBuld, htmlMinifyBuild, resource, resourceJS, ImageFile, ScriptBuild, SvgSpriteFile)