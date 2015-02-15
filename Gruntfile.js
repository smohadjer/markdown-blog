module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: ['./dist', './include'],

		//convert markdown files to html files
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

		//concat all html files into one html file
		concat: {
			dist: {
				src: './include/*.html',
				dest: './temp/posts.html'
			},
		},

		includes: {
			files: {
				src: ['*.html'], // Source files
				dest: 'dist/', // Destination directory
				flatten: true,
				cwd: '.',
				options: {
					flatten: true,
					debug: true,
					includePath: 'temp',
					banner: '<!-- Site built using grunt includes! -->\n'
				}
			}
		}
	});

	grunt.registerTask('build', [
		'clean',
		'markdown:all',
		'concat',
		'includes'
	]);
};
