module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			dist: {
				src: 'dist/'
			}
		},

		markdown: {
		  all: {
			files: [{
			  expand: true,
			  src: './*.md',
			  dest: 'include/',
			  ext: '.html'
			}],
			options: {
				template: 'template.jst'
			}
		  }
		},

		includes: {
		  files: {
			src: ['*.html'], // Source files
			dest: 'dist/', // Destination directory
			flatten: true,
			cwd: 'site',
			options: {
				flatten: true,
				includePath: 'include',
				banner: '<!-- Site built using grunt includes! -->\n'

			}
		  }
		},
	});

	grunt.registerTask('build', [
		'clean',
		'markdown:all',
		'includes'
	]);
};
