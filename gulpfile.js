const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const del = require("del");
const sourcemaps = require("gulp-sourcemaps");

/**
 * Removes the `dist` directory.
 */
function clean() {
    return del("./dist/");
}

/**
 * Copies static assets (html, js, css, images) from the ./virginia.clubrunning.org/ directory
 * directly into ./dist/
 */
function copyStatic() {
    return gulp.src(["./virginia.clubrunning.org/**/*",
        "./virginia.clubrunning.org/**/.*"]) // copy hidden files (e.g. .htaccess)
        .pipe(gulp.dest("./dist/"));
}

/**
 * Builds SCSS files in ./src/styles and copies compiled CSS into ./dist/static/styles
 */
function buildStyles() {
    return gulp.src("./src/styles/*.scss") // look for .scss files under ./src/styles
        .pipe(sourcemaps.init()) // enable sourcemaps for developer quality of life
        .pipe(sass().on("error", sass.logError)) // compile them to css, logging any errors
        .pipe(sourcemaps.write()) // write sourcemaps out
        .pipe(gulp.dest("./dist/static/styles/")); // copy to build directory
}

/**
 * Watches for changes and automatically rebuilds.
 */
function watch() {
    gulp.watch("./virginia.clubrunning.org/**/*", copyStatic);
    gulp.watch("./src/styles/*", buildStyles);
};

/**
 * `build` task. Clears the build directory and rebuilds the website.
 */
exports.build = gulp.series(clean, gulp.parallel(copyStatic, buildStyles));

/**
 * `watch` task. Builds the website and starts watching for changes.
 */
exports.watch = gulp.series(exports.build, watch);

exports.default = exports.build; // default to building website