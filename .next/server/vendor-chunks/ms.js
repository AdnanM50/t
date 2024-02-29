"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ms";
exports.ids = ["vendor-chunks/ms"];
exports.modules = {

/***/ "(ssr)/./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/***/ ((module) => {

eval("/**\n * Helpers.\n */ \nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar y = d * 365.25;\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @param {String|Number} val\n * @param {Object} [options]\n * @throws {Error} throw an error if val is not a non-empty string or a number\n * @return {String|Number}\n * @api public\n */ module.exports = function(val, options) {\n    options = options || {};\n    var type = typeof val;\n    if (type === \"string\" && val.length > 0) {\n        return parse(val);\n    } else if (type === \"number\" && isNaN(val) === false) {\n        return options.long ? fmtLong(val) : fmtShort(val);\n    }\n    throw new Error(\"val is not a non-empty string or a valid number. val=\" + JSON.stringify(val));\n};\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @param {String} str\n * @return {Number}\n * @api private\n */ function parse(str) {\n    str = String(str);\n    if (str.length > 100) {\n        return;\n    }\n    var match = /^((?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);\n    if (!match) {\n        return;\n    }\n    var n = parseFloat(match[1]);\n    var type = (match[2] || \"ms\").toLowerCase();\n    switch(type){\n        case \"years\":\n        case \"year\":\n        case \"yrs\":\n        case \"yr\":\n        case \"y\":\n            return n * y;\n        case \"days\":\n        case \"day\":\n        case \"d\":\n            return n * d;\n        case \"hours\":\n        case \"hour\":\n        case \"hrs\":\n        case \"hr\":\n        case \"h\":\n            return n * h;\n        case \"minutes\":\n        case \"minute\":\n        case \"mins\":\n        case \"min\":\n        case \"m\":\n            return n * m;\n        case \"seconds\":\n        case \"second\":\n        case \"secs\":\n        case \"sec\":\n        case \"s\":\n            return n * s;\n        case \"milliseconds\":\n        case \"millisecond\":\n        case \"msecs\":\n        case \"msec\":\n        case \"ms\":\n            return n;\n        default:\n            return undefined;\n    }\n}\n/**\n * Short format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */ function fmtShort(ms) {\n    if (ms >= d) {\n        return Math.round(ms / d) + \"d\";\n    }\n    if (ms >= h) {\n        return Math.round(ms / h) + \"h\";\n    }\n    if (ms >= m) {\n        return Math.round(ms / m) + \"m\";\n    }\n    if (ms >= s) {\n        return Math.round(ms / s) + \"s\";\n    }\n    return ms + \"ms\";\n}\n/**\n * Long format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */ function fmtLong(ms) {\n    return plural(ms, d, \"day\") || plural(ms, h, \"hour\") || plural(ms, m, \"minute\") || plural(ms, s, \"second\") || ms + \" ms\";\n}\n/**\n * Pluralization helper.\n */ function plural(ms, n, name) {\n    if (ms < n) {\n        return;\n    }\n    if (ms < n * 1.5) {\n        return Math.floor(ms / n) + \" \" + name;\n    }\n    return Math.ceil(ms / n) + \" \" + name + \"s\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksS0FBSztRQUNoQixPQUFPSyxLQUFLSSxLQUFLLENBQUNMLEtBQUtKLEtBQUssTUFBTVE7SUFDcEM7SUFDQSxPQUFPSCxLQUFLSyxJQUFJLENBQUNOLEtBQUtKLEtBQUssTUFBTVEsT0FBTztBQUMxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWwtc3RhdGUtbmV4dGpzLy4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzPzNhNzkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgaWYgKG1zID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtcyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHJldHVybiBwbHVyYWwobXMsIGQsICdkYXknKSB8fFxuICAgIHBsdXJhbChtcywgaCwgJ2hvdXInKSB8fFxuICAgIHBsdXJhbChtcywgbSwgJ21pbnV0ZScpIHx8XG4gICAgcGx1cmFsKG1zLCBzLCAnc2Vjb25kJykgfHxcbiAgICBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbiwgbmFtZSkge1xuICBpZiAobXMgPCBuKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtcyA8IG4gKiAxLjUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtcyAvIG4pICsgJyAnICsgbmFtZTtcbiAgfVxuICByZXR1cm4gTWF0aC5jZWlsKG1zIC8gbikgKyAnICcgKyBuYW1lICsgJ3MnO1xufVxuIl0sIm5hbWVzIjpbInMiLCJtIiwiaCIsImQiLCJ5IiwibW9kdWxlIiwiZXhwb3J0cyIsInZhbCIsIm9wdGlvbnMiLCJ0eXBlIiwibGVuZ3RoIiwicGFyc2UiLCJpc05hTiIsImxvbmciLCJmbXRMb25nIiwiZm10U2hvcnQiLCJFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdHIiLCJTdHJpbmciLCJtYXRjaCIsImV4ZWMiLCJuIiwicGFyc2VGbG9hdCIsInRvTG93ZXJDYXNlIiwidW5kZWZpbmVkIiwibXMiLCJNYXRoIiwicm91bmQiLCJwbHVyYWwiLCJuYW1lIiwiZmxvb3IiLCJjZWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ms/index.js\n");

/***/ })

};
;