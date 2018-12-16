!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);
/**
 * UUID
 * @author Dominik Geng
 * @copyright 2018 Dominik Geng
 * @license Apache-2.0
 */
var n=function(){function t(t){this.value="","string"==typeof t?this.fromString(t):Array.isArray(t)?this.fromBytes(t):this.generate()}return t.prototype.generate=function(){var t=new Array(16).fill(0).map(function(){return 255*Math.random()&255});return t[6]=79&(64|t[6]),this.fromBytes(t),this},t.prototype.fromBytes=function(t){return this.value=t.map(function(t){return("00"+t.toString(16)).slice(-2)}).join("").replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/,"$1-$2-$3-$4-$5").toUpperCase(),this},t.prototype.toBytes=function(){return(this.value.replace(/-/g,"").match(/.{2}/g)||[]).map(function(t){return parseInt(t,16)})},t.prototype.fromString=function(t){return this.value=t.trim(),this},t.prototype.toString=function(){switch(t.stringExportFormat){default:case"uppercase":return this.value.toUpperCase();case"lowercase":return this.value.toLowerCase()}},t.prototype.isValid=function(){return"string"==typeof this.value&&36===this.value.length&&t.REGEX.UUID.test(this.value)},t.prototype.equals=function(t){return this.toString()===t.toString()},t.stringExportFormat="uppercase",t.REGEX={UUID:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i},t}(),o=function(){function t(){}return t.toBytes=function(t){return(new n).fromString(t).toBytes()},t.toString=function(t){return(new n).fromBytes(t).toString()},t.newUUID=function(){return(new n).toString()},t.isUUID=function(t){return(new n).fromString(t).isValid()},t.compare=function(t,e){return new n(t).equals(new n(e))},t}();
/**
 * UUID Tool
 * @author Dominik Geng
 * @copyright 2018 Dominik Geng
 * @license Apache-2.0
 */r.d(e,"UUIDTool",function(){return o}),r.d(e,"UUID",function(){return n})}])});