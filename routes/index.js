(function(){
  "use strict";

  var Routes = {
    MobileRegister: require("./MobileRegister.js")
  };

  // route, function, schemas, conf, methods
  // auth options: 0: anything, 1: loggedIn
  var routeList = [
    ["/m/register",      Routes.MobileRegister,    1, 0, ["post"]]
  ];

  module.exports = routeList;
}());