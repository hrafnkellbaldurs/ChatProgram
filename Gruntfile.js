module.exports = function ( grunt ) {
 grunt.loadNpmTasks('grunt-contrib-jshint');
 var taskConfig = {
 	pkg: grunt.file.readJSON('package.json'),
   jshint: {
     src: ['src/js/*.js', '!js/app.js', '!js/socket.io.min.js', '!js/socket-factory.js'],
     gruntfile: ['Gruntfile.js'],
     options: {
     	reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
     }
     	//build: ['Gruntfile.js', 'src/**/*.js']
   },

   uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/minified.min.js': ['src/js/*.js']
        }
      }
    }

 };
 grunt.initConfig(taskConfig);

 grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
};