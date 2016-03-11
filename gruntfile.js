module.exports = function(grunt) {
  // Plugin Configuration goes here
  grunt.initConfig({
    sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
          },
          files: {                         // Dictionary of files
            'dist/styles/main.css': 'sources/styles/main.scss', // 'destination': 'source'
          }
        }
      },
   watch: {
       css: {
         files: 'sources/styles/main.scss',
         tasks: ['sass'],
         options: {
         livereload: true,
         },
       },
    },

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Define your defualt tasks
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('default', ['watch']);

};
