"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/*
 *  'of' allows you to deliver values in a sequence
 *  In this case, it will emit 1,2,3,4,5 in order.
 */
var dataSource = rxjs_1.of(1, 2, 3, 4, 5);
var subscription = dataSource
    .pipe(operators_1.map(function (value) { return value + 1; })).pipe(operators_1.map(function (value) { return value / 2; }))
    .subscribe(function (value) { return console.log(value); });
