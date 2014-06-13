module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			myFiles: ['redirectToUpToDateDocumentation.user.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint']);
};
