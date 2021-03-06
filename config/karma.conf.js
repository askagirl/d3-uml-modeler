module.exports = function(config){
    config.set({
    basePath : '../',

    files : [

      'app/lib/firebase/firebase.js',
      'app/lib/firebase-simple-login/firebase-simple-login.js',

      'app/lib/lodash/dist/lodash.underscore.min.js',
      'app/lib/class.js',
      'app/lib/util.js',

      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',

      'app/lib/angularfire/angularfire.js',

      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [
      'app/lib/angular/angular-loader.js',
      'app/lib/angular/*.min.js',
      'app/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
