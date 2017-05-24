import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import buffer from 'gulp-buffer';
import uglify from 'gulp-uglify';
import tap from 'gulp-tap';
import browserify from 'browserify';
import babel from 'babelify';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import del from 'del';

let paths = {
  images: './source/img/**/*',
  sass: './source/sass/**/*.scss',
  babel: './source/js/**/*.js',
  html: './source/pages/**/*'
};

gulp.task('clean', () => {
  return del(['build']);
});

gulp.task('copy_html', () => {
  return gulp.src([paths.html]).pipe(gulp.dest('./build/'));
});

gulp.task('babel', () => {
  return gulp.src(paths.babel, { read: false })
    .pipe(tap((file) => {
      file.contents = browserify(file.path, {
        debug: true
      }).transform(babel, {
        presets: [ 'es2015' ]
      }).bundle();
    }))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('sass', () => {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('images', ['clean'], () => {
  return gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('./build/img'));
});

gulp.task('sass:watch', () => {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('babel:watch', () => {
  gulp.watch(paths.babel, ['babel']);
});

gulp.task('images:watch', () => {
  gulp.watch(paths.images, ['images']);
});

gulp.task('watch', () => {
  gulp.watch(paths.babel, ['build']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.images, ['images']);
});

gulp.task('dirty_build', ['copy_html', 'babel', 'sass', 'images']);

gulp.task('default', ['clean', 'copy_html', 'babel', 'sass', 'images']);