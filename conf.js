exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    // capabilities: {
    //   'browserName': 'firefox'
    // }
    multiCapabilities: [{
      'browserName': 'firefox'
    }, {
      'browserName': 'chrome'
    }]
  };