# [event](https://github.com/jsmini/event)

[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsmini/event/blob/master/LICENSE)
[![CI](https://github.com/jsmini/event/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/jsmini/event/actions/workflows/ci.yml)
[![npm](https://img.shields.io/badge/npm-0.6.3-orange.svg)](https://www.npmjs.com/package/@jsmini/event)
[![NPM downloads](http://img.shields.io/npm/dm/@jsmini/event.svg?style=flat-square)](http://www.npmtrends.com/@jsmini/event)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/jsmini/event.svg)](http://isitmaintained.com/project/jsmini/event 'Percentage of issues still open')

The best event emitter and center, native compatible IE6

[Chinese README](https://github.com/jsmini/event/blob/master/README_CN.md)

## Compatibility

Unit tests guarantee support for the following environments:

- Node 0.12+
- Safari 6+ (Mac)
- iOS 5+ Safari
- Chrome 23+ (Windows, Mac, Android, iOS, Linux, Chrome OS)
- Firefox 4+ (Windows, Mac, Android, Linux)
- Internet Explorer 6+ (Windows, Windows Phone)
- Opera 10+ (Windows, linux, Android)

## Content Overview

```
├── demo - How to Use Demo
├── dist - Compiling Output Code
├── doc - Documents
├── src - Source Code Directory
├── test - Unit Tests
├── CHANGELOG.md - Update Log
└── TODO.md - Future Plans
```

## How to Use

Using npm, download and install the code.

```bash
$ npm install --save @jsmini/event
```

If you are in a node enviroment：

```js
var EventEmitter = require('@jsmini/event').EventEmitter;

var ec = new EventEmitter();
```

If you are in a webpack or similar environment：

```js
import { EventEmitter } from '@jsmini/event';

var ec = new EventEmitter();
```

If you are in a requirejs environment:

```js
requirejs(
  ['node_modules/@jsmini/event/dist/index.aio.js'],
  function (jsmini_event) {
    var EventEmitter = jsmini_event.EventEmitter;

    var ec = new EventEmitter();
  },
);
```

If you are in a browser environment:

```html
<script src="node_modules/@jsmini/event/dist/index.aio.js"></script>

<script>
  var EventEmitter = jsmini_event.EventEmitter;

  var ec = new EventEmitter();
</script>
```

##

[API](https://github.com/jsmini/event/blob/master/doc/api.md)

## Contribution Guide

For first time contributors, you need to install the dependencies first.

```bash
$ npm install
```

To build the project:

```bash
$ npm run build
```

To run unit tests:

```bash
$ npm test
```

- Note: The browser environment needs to be tested manually under `test/browser`

Modify the version number in package.json, modify the version number in README.md, modify the CHANGELOG.md, and then release the new version.

```bash
$ npm run release
```

Publish the new version to NPM

```bash
$ npm publish --access=public
```

You may need to modify the following files in your project：

- The messages in README.md
- The messages in package.json
- The messages in config/rollup.js
- The repository name in test/browser/index.html

## Update Log

[CHANGELOG.md](https://github.com/jsmini/event/blob/master/CHANGELOG.md)

## Future Plans

[TODO.md](https://github.com/jsmini/event/blob/master/TODO.md)

## Current Users
