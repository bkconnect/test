var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'Test-darwin-x64', 'Test.app', 'Contents', 'MacOS', 'Test');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'Test-linux-x64', 'Test');
      default:
        throw 'Unsupported platform';
    }
  }
};
