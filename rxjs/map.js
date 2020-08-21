"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/*
 *  'of' allows you to deliver values in a sequence
 *  In this case, it will emit 1,2,3,4,5 in order.
 */
var dataSource = rxjs_1.of(1, 2, 3, 4, 5);
// subscribe to our source observable
var subscription = dataSource
    .pipe(
// add 1 to each emitted value
operators_1.map(function (value) { return value + 1; }))
    // log: 2, 3, 4, 5, 6
    .subscribe(function (value) { return console.log(value); });
