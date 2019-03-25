
//任务

/*
 	task（） 任务
 	参数一：任务名称
 	参数二：数组，依赖任务(优先级更高)
 	参数三：任务回调函数
 */

var gulp = require('gulp');//初始化 像原生js里面的new过程
//布置任务：直接写gulp不写任务名称，默认执行default
//var runSequence = require('run-sequence');



//执行多任务；
gulp.task('default',['es6','copyhtml','sass','copycss','cssmin','jsmin','imgmin','imgmin2','concat'],function() {
	console.log('默认的任务');
});


//gulp.task('default', function() {
//  runSequence(
//      ['copyhtml','copycss','sass','cssmin','imgmin','copyjs','imgmin2','concat','es6']);
//});

//gulp.task('say',['sing'],function() {
//	console.log('say任务执行');
//});
//
//gulp.task('sing','',function() {
//	console.log('sing任务执行');
//});

/*
 	src（）源文件路径
 	dest（）目标文件路径
 	pipe()管道方法
*/

//布置任务：把src下面的index.html 复制到dist目录

gulp.task('copyhtml',function() {
	return gulp.src('src/index.html').pipe(gulp.dest('dist'));
});
//布置任务：把src下面的js目录下所有的js文件 复制到dist的js目录

gulp.task('copyjs',function() {
	return gulp.src('src/js/*.js').pipe(gulp.dest('dist/js'));
});
//布置任务：把src下面的css目录下所有的文件 复制到dist的css目录

gulp.task('copycss',function() {
	return gulp.src('src/css/*').pipe(gulp.dest('dist/css'));
});
gulp.task('copycss2',function() {
	return gulp.src('src/css/**').pipe(gulp.dest('dist/css'));
});

/*
 	watch() 监听
 	参数一：监听的文件路径
 	参数二：监听的任务名称，数组
*/

//gulp.task('watchhtml',function() {
//	return gulp.watch('src/index.html',['copyhtml']);
//});


//实用的任务

//1.编译sass ：考拉
var sass = require('gulp-sass');
gulp.task('sass',function() {
	return gulp.src('src/sass/*')
				.pipe(sass())
				.pipe(gulp.dest('dist/css'));
});

//2.压缩css文件
var cssmin = require('gulp-cssmin');
gulp.task('cssmin',function() {
	return gulp.src('src/css/*')
				.pipe(cssmin())
				.pipe(gulp.dest('dist/css'));
});




//4.重命名 gulp-rename  压缩并重命名   min

var rename = require('gulp-rename');
//gulp.task('rename',function() {
//	return gulp.src('src/js/*')
//				.pipe(rename('*.min.js'))
//				.pipe(gulp.dest('dist/js'));
//});	


//5.压缩图片

var imgmin = require('gulp-imagemin');

gulp.task('imgmin',function() {
	return gulp.src('src/img/*')
				.pipe(imgmin())
				.pipe(gulp.dest('dist/img'));
});
var imgmin2 = require('gulp-imagemin');

gulp.task('imgmin2',function() {
	return gulp.src('src/goodimg/*')
				.pipe(imgmin())
				.pipe(gulp.dest('dist/goodimg'));
});

//6.合并文件 合并压缩
//引入模块
var concat = require('gulp-concat');

gulp.task('concat',function() {
	return gulp.src(['src/css/*','src/css/*'])
				.pipe(concat('all.css')).
				pipe(cssmin())
				.pipe(gulp.dest('dist/css'));
});


//7.ES6-ES5才能压缩, 箭头函数，let const

let babel = require('gulp-babel');

//顺序执行

//es6转es5
gulp.task('es6',function(){
	gulp.src('src/js/*')
	.pipe(rename({suffix: '.min'}))
	.pipe(babel({
		'presets':['es2015']
	}))
	.pipe(js())
	.pipe(gulp.dest('dist/js'));
	
});

//3.压缩js文件:先把ES6转成ES3再压缩
var js = require('gulp-uglify');
gulp.task('jsmin',function() {
	return gulp.src('dist/es5/*.js')
				.pipe(js())
				.pipe(gulp.dest('dist/js'));
});