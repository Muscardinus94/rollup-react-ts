'use strict';

var jsxRuntime = require('react/jsx-runtime');

var Badge = "cc8b27153a8724c5.svg";

var Thumbnail = "d19000a9fd7c9aeb.png";

function Button(_a) {
  var children = _a.children;
  console.log(Badge);
  console.log(Thumbnail);
  return jsxRuntime.jsx("button", {
    children: children
  });
}

exports.Button = Button;
//# sourceMappingURL=Button.js.map
