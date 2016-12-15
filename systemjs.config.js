
(function(global) {
  SystemJS.config({
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      'app': 'app',
      'rxjs': 'npm:rxjs'
    },
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  })
})(this);