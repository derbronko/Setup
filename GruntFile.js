module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        watch: {
            js: {
                files: ["assets/dev/scripts/**.js"],
                tasks: ["clean:scripts", "copy:scripts"]
            },
            styles: {
                files: ["assets/dev/style/**.{scss,sass}"],
                tasks: ["clean:styles", "sass:styles"]
            }
        },
        typings: {
            install: {}
        },
        sass: {
            options: {
                sourceMap: true
            },
            styles: {
                files: [{
                    expand: true,
                    cwd: "assets/dev/style/",
                    src: ["main.scss"],
                    dest: "assets/prod/style/",
                    ext: ".css"
                }]
            }
        },
        copy: {
            scripts: {
                files: [{
                    cwd: "assets/dev/scripts/",
                    expand: true,
                    src: ["**.js"],
                    dest: "assets/prod/scripts/"
                }]
            },
            images: {
                files: [{
                    cwd: "assets/dev/images/",
                    expand: true,
                    src: ["**"],
                    dest: "assets/prod/images/"
                }]
            }
        },
        clean: {
            prod: ["assets/prod/"],
            images: ["assets/prod/images"],
            javascript: ["assets/prod/scripts"],
            styles: ["assets/prod/style/"]
        },
        typescript: {
            dev: {
                src: ['assets/dev/scripts/**/*.ts'],
                dest: 'assets/dev/scripts/',
                options: {
                    module: 'amd',
                    target: 'es5',
                    rootDir: 'assets/dev/scripts',
                    sourceMap: true,
                    declaration: true
                }
            },
            prod: {
                src: ['assets/dev/scripts/**/*.ts'],
                dest: 'assets/prod/scripts/',
                options: {
                    module: 'amd',
                    target: 'es5',
                    rootDir: 'assets/dev/scripts',
                    sourceMap: true,
                    declaration: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-copy");
    //grunt.loadNpmTasks("grunt-contrib-csslint");
    //grunt.loadNpmTasks("grunt-contrib-jshint");
    //grunt.loadNpmTasks("grunt-jslint");
    //grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks('grunt-typings');
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-typescript');


    grunt.registerTask("Build PROD", ["clean:prod", "sass:styles", "typings:install", "typescript:prod", "copy:images"]);
    grunt.registerTask("Watch JS & SCSS", ["watch:styles", "watch:scripts"]);

};