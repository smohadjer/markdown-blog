module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: ['./dist', './include'],

		markdown: {
		  all: {
			files: [{
			  expand: true,
			  cwd: 'markdown',
			  src: '*.md',
			  dest: './include',
			  ext: '.html'
			}],
			options: {
				template: 'markdown/template.jst'
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
