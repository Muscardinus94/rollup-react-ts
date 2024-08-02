'use strict';

var React = require('react');

function Button(_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement("button", null, children);
}

function Typography(_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement("span", null, children);
}

function getEnv() {
  return process.env.NODE_ENV || "development";
}

function Viewer() {
  return /*#__PURE__*/React.createElement("div", null, "Environment: ", getEnv(), /*#__PURE__*/React.createElement(Button, null, "Button"), /*#__PURE__*/React.createElement(Typography, null, "Typography"));
}

exports.Button = Button;
exports.Typography = Typography;
exports.Viewer = Viewer;
//# sourceMappingURL=index.js.map
