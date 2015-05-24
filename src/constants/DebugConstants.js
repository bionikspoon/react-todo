const debug = require('debug')('WineStoreApp');

if (window.debug !== debug) {
    window.debug = debug;
}

export default debug;
