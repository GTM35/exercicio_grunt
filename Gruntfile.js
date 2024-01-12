module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      production: {
        options: {
          compress: true,
        },
        files: {
          "build/styles/main.min.css": "./source/styles/main.less",
        },
      },

      files: {
        "./build/styles/main.css": "./source/styles/main.less",
      },
    },

    uglify: {
      target: {
        files: {
          "build/js/main.min.js": "./source/js/main.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["less:production", "uglify"]);
};
