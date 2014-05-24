module.exports = function(grunt) {

    grunt.initConfig({
        nodewebkit: {
            options: {
                build_dir: './builds',
                mac: false,
                win: true,
                linux32: false,
                linux64: false
            },
            src: ['./source/**/*']
        },
        watch: {
            scripts: {
                files: './source/**/*',
                tasks: ['nodewebkit'],
                options: {
                    interrupt: true,
                    debounceDelay: 3000,
                }
            },
        },
    })

    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
}
