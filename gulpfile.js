var gulp = require('gulp');
var sass = require('gulp-sass');

var source = {
    style: 'stylesheets/**/*.scss'
}

var dest = {
    style: 'stylesheets/'
}

gulp.task('sass', function() {
 return gulp.src(source.style)
    .pipe(sass())
    .pipe(gulp.dest(dest.style))
});

gulp.task('watch', function() {
    gulp.watch(source.style, ['sass']);
});