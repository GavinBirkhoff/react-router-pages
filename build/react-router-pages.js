(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Routers = void 0;

    var React = require("react");

    var react_router_dom_1 = require("react-router-dom");

    var react_loadable_1 = require("react-loadable");

    function Routers(Routes) {
      return React.createElement(react_router_dom_1.BrowserRouter, null, React.createElement(react_router_dom_1.Switch, null, Routes.forEach(function (child) {
        if (typeof child.component === "string") {
          return react_loadable_1.default({
            loader: function () {
              return Promise.resolve().then(function () {
                return require(child.component);
              });
            },
            loading: function () {
              return null;
            }
          });
        } else {
          return React.createElement(react_router_dom_1.Route, {
            path: child.path,
            component: child.component
          });
        }
      })));
    }

    exports.Routers = Routers;

})));
