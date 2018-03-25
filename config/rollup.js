var pkg = require('../package.json');

// 兼容 event.js 和 @yanhaijing/event.js 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * event.js ${version} (https://github.com/yanhaijing/event.js)
 * API https://github.com/yanhaijing/event.js/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/event.js/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
