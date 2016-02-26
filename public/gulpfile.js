
var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var browserSync = require( 'browser-sync' );
var sourcemaps = require( 'gulp-sourcemaps' );
var pleeease = require( 'gulp-pleeease' );
var postcss = require( 'gulp-postcss' );
var syntax = require( 'postcss-scss' );
var autoprefixer = require( 'autoprefixer' );


postcss( plugins )
  .process( scss, {
    parser: syntax
  } )
  .then( function ( result ) {
    result.css // CSS with normal comments
  } );


gulp.task( 'css', function () {
  gulp.src( './css/*.css' )
    .pipe( sourcemaps.init() )
    .pipe( pleeease( {
      paths: [ 'scss/core.scss' ]
      sass: true,
      out: 'out.min.css'
    } ) )
    .pipe( rename( {
      // suffix: '.min',
      extname: '.css'
    } ) )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( './dest' ) );
} );


gulp.task( 'autoprefixer', function () {
  return gulp.src( './css/*.css' )
    .pipe( sourcemaps.init() )
    .pipe( postcss( [ autoprefixer( {
      browsers: [ 'last 2 versions' ]
    } ) ] ) )
    .pipe( sourcemaps.write( '.' ) )
    .pipe( gulp.dest( './dest' ) );
} );

gulp.task( 'sass', function () {
  gulp.src( 'scss/core.scss' )
    .pipe( sass( {
      includePaths: [ 'public/scss' ]
    } ) )
    .pipe( gulp.dest( 'css' ) );
} );

gulp.task( 'browser-sync', function () {
  browserSync.init( [ "css/*.css", "js/*.js" ], {
    server: {
      baseDir: "./"
    }
  } );
} );

gulp.task( 'default', [ 'sass', 'browser-sync' ], function () {
  gulp.watch( "public/scss/*.scss", [ 'sass' ] );
} );


// gulp.task('javascript', function() {
//   gulp.src('src/**/*.js')
//     .pipe(sourcemaps.init({loadMaps: true}))
//       .pipe(plugin1())
//       .pipe(plugin2())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('dist'));
// });
