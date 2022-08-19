const {src, dest, watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();

const htmlmin = require("gulp-htmlmin");

const worker = () =>{
    return src("./app/**/*.{html,css,png,jpeg}")
            .pipe(htmlmin(
                {collapseWhitespace: true}
            ))
            .pipe(dest("./dest"))
            .pipe(browserSync.stream())
}

const watcher = () =>{
    watch("./app/**/*.{html,css,png,jpeg}", worker)
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: "./dest" 
        }
    })
}

exports.default = series(
    worker,
    parallel(watcher, server)
)