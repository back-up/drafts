parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({1:[function(require,module,exports) {
var n=this;function e(n){return function(){var e=n.apply(this,arguments);return new Promise(function(n,r){return function t(o,u){try{var c=e[o](u),i=c.value}catch(n){return void r(n)}if(!c.done)return Promise.resolve(i).then(function(n){t("next",n)},function(n){t("throw",n)});n(i)}("next")})}}var r="wrold";console.log("hello "+r);var t=function(n){return new Promise(function(e){setTimeout(function(){e()},n)})};e(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(3e3);case 2:return console.log("1000"),n.next=5,t(3e3);case 5:console.log("1000");case 6:case"end":return n.stop()}},e,n)}));
},{}]},{},[1], null)
//# sourceMappingURL=/index.map