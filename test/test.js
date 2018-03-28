var expect = require('expect.js');

var isArray = require('@yanhaijing/is_js').isArray;

var EventEmitter = require('../dist/index.js').EventEmitter;
var eventCenter = require('../dist/index.js').eventCenter;

function noop() {

}

describe('EventEmitter', function() {
    this.timeout(1000);

    describe('addListener', function() {
        it('param & return', function() {
            var ec = new EventEmitter();

            try {
                ec.addListener()
            } catch(e) {
                expect(e.message).to.equal('addListener second param must is function');
            }

            expect(ec.addListener('test', noop)).to.equal(ec);
        });

        it('add', function() {
            var ec = new EventEmitter();
            expect(ec.listeners('test').length).to.equal(0);

            ec.addListener('test', noop);
            expect(ec.listeners('test').length).to.equal(1);

            ec.addListener('test', noop);
            expect(ec.listeners('test').length).to.equal(2);
        });
    });

    describe('on', function() {
        it('param & return', function() {
            var ec = new EventEmitter();

            try {
                ec.on()
            } catch(e) {
                expect(e.message).to.equal('addListener second param must is function');
            }

            expect(ec.on('test', noop)).to.equal(ec);
        });

        it('on', function() {
            var ec = new EventEmitter();
            expect(ec.listeners('test').length).to.equal(0);

            ec.on('test', noop);
            expect(ec.listeners('test').length).to.equal(1);

            ec.on('test', noop);
            expect(ec.listeners('test').length).to.equal(2);
        });
    });

    describe('once', function() {
        it('param & return', function() {
            var ec = new EventEmitter();

            try {
                ec.once()
            } catch(e) {
                expect(e.message).to.equal('once second param must is function');
            }

            expect(ec.once('test', noop)).to.equal(ec);
        });

        it('once', function() {
            var ec = new EventEmitter();

            var aaa = 1;

            ec.once('test', function () {
                aaa += 1;
            });

            expect(aaa).to.equal(1);

            ec.emit('test');
            expect(aaa).to.equal(2);

            ec.emit('test');
            expect(aaa).to.equal(2);
        });
    });

    describe('removeListener', function() {
        it('param & return', function() {
            var ec = new EventEmitter();

            try {
                ec.removeListener()
            } catch(e) {
                expect(e.message).to.equal('removeListener second param must is function');
            }

            expect(ec.removeListener('test', noop)).to.equal(ec);
        });

        it('removeListener', function() {
            var ec = new EventEmitter();

            ec.addListener('test', noop);
            expect(ec.listeners('test').length).to.equal(1);

            ec.addListener('test', noop);
            expect(ec.listeners('test').length).to.equal(2);
            
            ec.removeListener('test', noop);
            expect(ec.listeners('test').length).to.equal(1);

            ec.removeListener('test', noop);
            expect(ec.listeners('test').length).to.equal(0);
        });
    });

    describe('off', function() {
        it('param & return', function() {
            var ec = new EventEmitter();

            try {
                ec.off()
            } catch(e) {
                expect(e.message).to.equal('removeListener second param must is function');
            }

            expect(ec.off('test', noop)).to.equal(ec);
        });

        it('off', function() {
            var ec = new EventEmitter();

            ec.addListener('test', noop);
            expect(ec.listeners('test').length).to.equal(1);

            ec.addListener('test', noop);
            expect(ec.listeners('test').length).to.equal(2);
            
            ec.off('test', noop);
            expect(ec.listeners('test').length).to.equal(1);

            ec.off('test', noop);
            expect(ec.listeners('test').length).to.equal(0);
        });
    });

    describe('removeAllListeners', function() {
        it('param & return', function() {
            var ec = new EventEmitter();

            expect(ec.removeAllListeners()).to.equal(ec);
            expect(ec.removeAllListeners('test')).to.equal(ec);
        });

        it('removeAllListeners', function() {
            var ec = new EventEmitter();

            ec.addListener('test', noop);
            ec.addListener('test', noop);
            expect(ec.listeners('test').length).to.equal(2);

            ec.removeAllListeners('test');
            expect(ec.listeners('test').length).to.equal(0);
        });
    });

    describe('emit', function() {
        it('param & return', function() {
            var ec = new EventEmitter();

            expect(ec.emit()).to.equal(ec);
            expect(ec.emit('test')).to.equal(ec);
        });

        it('emit', function() {
            var ec = new EventEmitter();

            var aaa = 1;

            ec.addListener('test', function () {
                aaa += 1;
            });

            expect(aaa).to.equal(1);

            ec.emit('test');
            expect(aaa).to.equal(2);

            ec.emit('test');
            expect(aaa).to.equal(3);

            ec.addListener('args1', function () {
                expect(arguments.length).to.equal(1);
                expect(arguments[0]).to.equal(1);
            });

            ec.addListener('args2', function () {
                expect(arguments.length).to.equal(2);
            });

            ec.emit('args1', 1);
            ec.emit('args2', 1, 2);
        });
    });

    describe('listeners', function() {
        it('param & return', function() {
            var ec = new EventEmitter();

            expect(isArray(ec.listeners())).to.equal(true);
            expect(isArray(ec.listeners('test'))).to.equal(true);
        });

        it('listeners', function() {
            var ec = new EventEmitter();
            expect(ec.listeners('test').length).to.equal(0);

            ec.addListener('test', function() {});
            expect(ec.listeners('test').length).to.equal(1);

            ec.addListener('test', function() {});
            expect(ec.listeners('test').length).to.equal(2);

            expect(ec.listeners('test2').length).to.equal(0);
        });
    });
});

describe('eventCenter', function() {
    this.timeout(1000);

    it('instanceof', function() {
        expect(eventCenter instanceof EventEmitter).to.equal(true);
    });

    it('method', function() {
        expect(!!eventCenter.addListener).to.equal(true);
        expect(!!eventCenter.on).to.equal(true);
        expect(!!eventCenter.once).to.equal(true);
        expect(!!eventCenter.removeListener).to.equal(true);
        expect(!!eventCenter.off).to.equal(true);
        expect(!!eventCenter.removeAllListeners).to.equal(true);
        expect(!!eventCenter.emit).to.equal(true);
        expect(!!eventCenter.listeners).to.equal(true);
    });
});
