'use strict';
import keyMirror from 'react/lib/keyMirror';
import debug from 'constants/DebugConstants';
debug('Loading %s...', 'TodoConstants');

export default keyMirror({
    ADD_TODO: null,
    TOGGLE_ARCHIVE: null,
    TOGGLE_ALL: null,
    UPDATE_TEXT: null,
    REMOVE_TODO: null,
    REMOVE_ALL: null,
    REMOVE_ARCHIVED: null
});
