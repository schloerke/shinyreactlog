
// make sure packages like lodash are not being double stored
var DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
// visualize the bundle size
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(grunt) {

  var rootDir = __dirname;

  var instdir = rootDir + '/inst/www/';
  var jsSrcdir = rootDir + '/src/';

  gruntConfig = {

    webpack: {
      options: {
        mode: "development", // do not take time to shrink files;
        devtool: "source-map", // produce a sibling source map file
        stats: {
          colors: true,
          modules: true,
          reasons: true
        },
        progress: true,
        failOnError: true,
        // optimization: {
        //   minimize: false // uglify the code
        // },
      },
      reactLog: {
        entry: jsSrcdir + "index.js",
        output: {
          path: instdir + "reactLog",
          filename: 'reactLog.js'
        },
        plugins: [
          // new BundleAnalyzerPlugin({
          //   analyzerMode: 'static'
          // }),
          // new DuplicatePackageCheckerPlugin()
        ],
        watch: false,
        module: {
          rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
              loader: "babel-loader"
            }]
          }]
        }
      }
    }

  };

  grunt.loadNpmTasks('grunt-webpack');


  grunt.task.registerTask("webpackSetWatch", "sets 'watch' to true for reactLog webpack task", function() {
    gruntConfig.webpack.reactLog.watch = true
  });


  grunt.initConfig(gruntConfig);

  grunt.registerTask("default", "webpack:reactLog")

};
