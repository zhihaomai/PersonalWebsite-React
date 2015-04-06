var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var concat = require('gulp-concat');
var del = require('del');
var to5ify = require("6to5ify");
var sass = require('gulp-sass');
var fs = require('fs');
var webserver = require('gulp-webserver');

var BUILD_PATH = 'build/';
var ERROR_HTML_PATH = 'build/build_error.html';
var ERROR_HTML_TEMPLATE_PATH = 'static/build_error_template.html';

var errorHandler = function(error) {
  console.log('Build error - still watching for changes...');
  console.log(error.toString());

  var errorHtml = fs.readFileSync(ERROR_HTML_TEMPLATE_PATH, {
    encoding: 'UTF8',
  });

  errorHtml = errorHtml.replace(
    '{%= error %}',
    error.toString().replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;')
  );

  fs.writeFileSync(
    ERROR_HTML_PATH,
    errorHtml
  );
};

gulp.task('build', ['build:js', 'build:css', 'build:static']);

gulp.task('build:js', function() {
  if (fs.existsSync(ERROR_HTML_PATH)) {
    fs.unlinkSync(ERROR_HTML_PATH);
  }
  var b = browserify();
  b.transform(reactify);
  b.transform(to5ify);
  b.add('./src/script.js');
  var stream = source('src/script.js');
  b.bundle()
    .on('error', function(error) {
      errorHandler(error);
      stream.end();
    })
    .pipe(stream)
    .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('build:css', function() {
  if (fs.existsSync(ERROR_HTML_PATH)) {
    fs.unlinkSync(ERROR_HTML_PATH);
  }
  return gulp.src('./src/css/**/*.scss')
    .pipe(sass())
    .on('error', function(error) {
      errorHandler(error);
      this.emit('end');
    })
    .pipe(concat('css/style.css'))
    .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('build:static', function() {
  return gulp.src('static/**')
    .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['build:js', 'build:css']);
  gulp.watch('static/**/*', ['build:static']);
});

gulp.task('webserver', function() {
  gulp.src(BUILD_PATH)
    .pipe(webserver({
      livereload: true,
      middleware: function(req, res, next) {
        if (fs.existsSync(ERROR_HTML_PATH)) {
          res.write(fs.readFileSync(ERROR_HTML_PATH, {
            encoding: 'UTF8',
          }));
          res.end();
        } else {
          next();
        }
      },
    }));
});

gulp.task('clean', function() {
  del(['build/']);
});

gulp.task('default', ['watch', 'build', 'webserver']);
