'use strict';

/**
 * session configs
 */

exports.__esModule = true;
exports.default = {
  name: 'thinkjs',
  type: 'file',
  secret: '2HE7IT5#',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.RUNTIME_PATH + '/session'
    }
  }
};
//# sourceMappingURL=session.js.map