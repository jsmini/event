var pkg = require('../package.json');

// 兼容 event.js 和 @jsmini/event 
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * event ${version} (https://github.com/jsmini/event)
 * API https://github.com/jsmini/event/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/event/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
