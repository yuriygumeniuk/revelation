var gulp 		= require('gulp');
var browserSync = require('browser-sync').create();
var sass 		= require('gulp-sass');
var plumber 	= require('gulp-plumber');
var notify 		= require('gulp-notify');
var autoprefixer= require('gulp-autoprefixer');
var watch 		= require('gulp-watch');
var gcmq		= require('gulp-group-css-media-queries');

gulp.task('server', ['styles'], function() {
	
	browserSync.init({
		server: { baseDir: './app/'}
	});

    watch(['./app/**/*.html', './app/**/*.js', './app/img/**/*.*']).on('change', browserSync.reload);

	watch('./app/#source/**/*.scss', function(){
		gulp.start('styles');
	});
});

gulp.task('styles', function() {
	return gulp.src('./app/#source/scss/style.scss')
	.pipe(plumber({
		errorHandler: notify.onError(function(err){
			return {
				title: 'Styles',
				sound: false,
				message: err.message
			}
		})
	}))
	.pipe(sass())
	.pipe(gcmq())
	.pipe(autoprefixer({
		browsers: ['last 6 versions'],
		cascade: true
	}))
	.pipe(gulp.dest('./app/css'))
	.pipe(browserSync.stream());
});

gulp.task('default', ['server']);