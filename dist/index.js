'use strict';

var jsxRuntime = require('react/jsx-runtime');
var moment = require('moment');

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

function Typography(_a) {
  var children = _a.children;
  return jsxRuntime.jsx("span", {
    children: children
  });
}

function getEnv() {
  return process.env.NODE_ENV || "development";
}

moment.locale("ko");
function Viewer() {
  return jsxRuntime.jsxs("div", {
    children: ["Current Time: ", moment.now(), "Environment: ", getEnv(), jsxRuntime.jsx(Button, {
      children: "Button"
    }), jsxRuntime.jsx(Typography, {
      children: "Typography"
    })]
  });
}

exports.Button = Button;
exports.Typography = Typography;
exports.Viewer = Viewer;
//# sourceMappingURL=index.js.map
