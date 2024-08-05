import { jsx, jsxs } from 'react/jsx-runtime';
import moment from 'moment';

var Badge = "cc8b27153a8724c5.svg";

var Thumbnail = "d19000a9fd7c9aeb.png";

function Button(_a) {
  var children = _a.children;
  console.log(Badge);
  console.log(Thumbnail);
  return jsx("button", {
    children: children
  });
}

function Typography(_a) {
  var children = _a.children;
  return jsx("span", {
    children: children
  });
}

function getEnv() {
  return process.env.NODE_ENV || "development";
}

moment.locale("ko");
function Viewer() {
  return jsxs("div", {
    children: ["Current Time: ", moment.now(), "Environment: ", getEnv(), jsx(Button, {
      children: "Button"
    }), jsx(Typography, {
      children: "Typography"
    })]
  });
}

export { Viewer };
//# sourceMappingURL=Viewer.mjs.map
