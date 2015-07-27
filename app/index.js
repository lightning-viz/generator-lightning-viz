'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');
var updateNotifier = require('update-notifier');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    updateNotifier({pkg: this.pkg}).notify();
  },

  prompting: {

    name: function () {
      var done = this.async();

      // Have Yeoman greet the user.
      this.log(yosay(
        'Let\'s make a visualization!'
      ));

      var prompts = [{
        name: 'name',
        message: 'Module Name',
        default: path.basename(process.cwd())
      }];

      this.prompt(prompts, function (props) {
        this.slugname = _.kebabCase(props.name);
        this.props = props;
        done();
      }.bind(this));
    }
  },


  configuring: function() {

    this.template('_package.json',  './package.json');
    this.template('index.js',  './index.js');
    this.template('README.md',  './README.md');
    this.copy('gitignore', './.gitignore');

  },

  writing: function() {
    this.directory('src', './src');
    this.directory('data', './data');
  },

  install: function () {
    var elementDir = process.cwd();
    process.chdir(elementDir);
    this.npmInstall();
  }
});
