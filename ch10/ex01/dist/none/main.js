/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = [
    /* 0 */
    /***/ (__unused_webpack_module, exports) => {
      const sum = (x, y) => x + y;
      const square = (x) => x * x;

      exports.mean = (data) => data.reduce(sum) / data.length;
      exports.stddev = function (d) {
        let m = exports.mean(d);
        return Math.sqrt(
          d
            .map((x) => x - m)
            .map(square)
            .reduce(sum) /
            (d.length - 1),
        );
      };

      /***/
    },
    /******/
  ];
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__[0](0, __webpack_exports__);
  /******/
  /******/
})();
