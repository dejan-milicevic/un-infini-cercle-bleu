module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        
        uglify: {
            my_target: {
                files: {
                    '_/js/script.js': ['_/components/js/*.js']
                } //files
            } //my_target
        }, //uglify
      
        less: {
          dev: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            }, //options
            files: {
              '_/css/style.css': '_/components/less/*.less' // destination file and source file
            } //files
          } //dev
        }, //less
        
        watch: {
            options: { livereload: true },
            scripts: { 
                files: ['_/components/js/*.js'],
                tasks: ['uglify']
            }, //scripts
            styles: {
                files: ['_/components/less/*.less'],
                tasks: ['less']
            }, //styles
            html: {
                files: ['*.html']
            } //php
        } //watch
        
    }); //initConfig
    
    grunt.registerTask('default', ['less', 'watch']); //executes watch command by default
    
} //exports