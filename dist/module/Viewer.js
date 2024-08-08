'use strict';

var jsxRuntime = require('react/jsx-runtime');
var moment = require('moment');
var ReactLottie = require('react-lottie');
var react = require('react');
var axios = require('axios');

var Badge = "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewBox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22_%3F%26%23235%3B%26%23141%3B%26%23137%3B%26%23236%3B%26%23148%3B%26%23160%3B%3F%3F1%22%20clip-path%3D%22url%28%23clip0_319_71%29%22%3E%3Cpath%20id%3D%22Vector%22%20d%3D%22M15%208.24854C15%208.73241%2014.1935%209.10875%2014.1129%209.56574C14.0323%2010.0227%2014.5968%2010.6948%2014.4355%2011.1249C14.2473%2011.555%2013.3602%2011.6088%2013.1183%2012.012C12.8495%2012.3883%2013.1452%2013.2485%2012.8226%2013.5711C12.5%2013.8937%2011.6398%2013.6249%2011.2634%2013.8668C10.8871%2014.1356%2010.8333%2015.0227%2010.3763%2015.184C9.94624%2015.3722%209.27419%2014.7808%208.8172%2014.8614C8.36022%2014.9421%207.98387%2015.7485%207.5%2015.7485C7.01613%2015.7485%206.63979%2014.9421%206.1828%2014.8614C5.72581%2014.7808%205.05376%2015.3453%204.62366%2015.184C4.19355%2014.9958%204.13978%2014.1088%203.73656%2013.8668C3.36022%2013.598%202.5%2013.8937%202.17742%2013.5711C1.85484%2013.2485%202.12366%2012.3883%201.88172%2012.012C1.6129%2011.6356%200.725806%2011.5819%200.564516%2011.1249C0.376344%2010.6948%200.967742%2010.0227%200.887097%209.56574C0.806452%209.10875%200%208.73241%200%208.24854C0%207.76466%200.806452%207.38832%200.887097%206.93133C0.967742%206.47434%200.403226%205.8023%200.564516%205.37219C0.752688%204.94208%201.63979%204.88832%201.88172%204.48509C2.15054%204.10875%201.85484%203.24854%202.17742%202.92595C2.5%202.60337%203.36022%202.87219%203.73656%202.63026C4.1129%202.36144%204.16667%201.47434%204.62366%201.31305C5.05376%201.12488%205.72581%201.71628%206.1828%201.63563C6.63979%201.55499%207.01613%200.748535%207.5%200.748535C7.98387%200.748535%208.36022%201.55499%208.8172%201.63563C9.27419%201.71628%209.94624%201.15176%2010.3763%201.31305C10.8065%201.50122%2010.8602%202.38832%2011.2634%202.63026C11.6398%202.89907%2012.5%202.60337%2012.8226%202.92595C13.1452%203.24854%2012.8763%204.10875%2013.1183%204.48509C13.3871%204.86144%2014.2742%204.9152%2014.4355%205.37219C14.6237%205.8023%2014.0323%206.47434%2014.1129%206.93133C14.1935%207.38832%2015%207.76466%2015%208.24854Z%22%20fill%3D%22%236BA8DF%22%2F%3E%3Cpath%20id%3D%22Vector_2%22%20d%3D%22M9.97312%205.5874L6.53226%209.02826L5%207.496L4.05914%208.43686L6.53226%2010.91L10.914%206.52826L9.97312%205.5874Z%22%20fill%3D%22white%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0_319_71%22%3E%3Crect%20width%3D%2215%22%20height%3D%2215%22%20fill%3D%22white%22%20transform%3D%22translate%280%200.748535%29%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var Thumbnail = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH7SURBVHgBxZffUeMwEMa/XeN7PTo4l3AlmAqOdJBUcNH9mbmnG8ETMwwxHRAqCFTAUAHQgekg72AtKwWTOGFiCI74zXhsr2R9K428uyJsgC2GGSE5AyQTuD1rTktsALV18EKM5EqAUpycQ2jKiRT6aebbBVJKRSYMluCn3nYFPLDm+LZt7J22DiRk1UWdqV5M+bLPpE6o6KT5lVPnsNc69rpGezzMeSe5wga4Cj375+QC7xG3xa+CQX193EVHOMipNSOzbOcVg1CvS+GZCA1fty9D+IpINMRt8fc7Op71fOxhvmyj5wb/O/kduo/tcuFQmTou8MyDZBJB2LOvk7ypX+plnyIWIncNcQEdIBKOMG6Ip3iMN3PQixb7zVaBJ4gEQQqvGcRnm40yRCLkAnAI2X7ZIy753IUgLkgHei8RiZCakYaMx9YclQ40QCQ0/x94zSAeLI+IBrt5+J5FuKTqIxLC9KMpDs4RjwyL4o7SXATn2DYi11rf9erXRiXjUyrD3WALaDWjReVovGhbKaMOR79LtX5Dx/w3JytajE9kRVyIxug26k2xkMkWWV86f2APOGjpbNaXzmuX3Z86NvoLdFe3CbeKh3EotaH60AH1baBZycfl8qVdn3X5ev7SPpdquHf0pY830HpWew1b/NOC88Gf3+CTRB2r38sT6AGobOp+3TIAAAAASUVORK5CYII=";

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
  return "HENRY";
}

function Lottie() {
  var _a = react.useState(null),
    lottieSrc = _a[0],
    setLottieSrc = _a[1];
  react.useEffect(function () {
    axios.get("https://static.bunjang.co.kr/cms/1qgkhyFScbKbb89cMtPSreTgROstxvpyL.json").then(function (data) {
      setLottieSrc(data);
    });
  }, []);
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: lottieSrc ? jsxRuntime.jsx(ReactLottie, {
      options: {
        loop: true,
        autoplay: true,
        animationData: lottieSrc,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          hideOnTransparent: true
        }
      }
    }) : null
  });
}

moment.locale("ko");
function Viewer() {
  return jsxRuntime.jsxs("div", {
    children: ["Current Time: ", moment.now(), jsxRuntime.jsx("br", {}), "Environment: ", getEnv(), jsxRuntime.jsx("br", {}), jsxRuntime.jsx(Lottie, {}), jsxRuntime.jsx(Button, {
      children: "Button"
    }), jsxRuntime.jsx(Typography, {
      children: "Typography"
    })]
  });
}

exports.Viewer = Viewer;
//# sourceMappingURL=Viewer.js.map
