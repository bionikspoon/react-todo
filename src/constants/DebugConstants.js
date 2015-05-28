const debug = require('debug')('TodoApp');

if (window.debug !== debug) {
    window.debug = debug;
}

export default debug;
