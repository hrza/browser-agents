var Browsers = require('./browsers.json');

var pickOne = function (obj) {

    var list = Array.isArray(obj) ? obj : Object.keys(obj);
    var item = 'random';
    while (item === 'random') {
        item = list[Math.floor(Math.random() * list.length)];
    }

    if (typeof obj[item] === 'function') {
        return pickOne(list);
    }

    return item;
};

Object.keys(Browsers).forEach(function (browser) {

    Browsers[browser].random = function () {

        return Browsers[browser][pickOne(Browsers[browser])];
    };
});

Browsers.random = function () {

    return Browsers[pickOne(Browsers)].random();
};

module.exports = Browsers;
