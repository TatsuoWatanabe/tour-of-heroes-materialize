/**
 * Add barrels and stuff
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    defaultJSExtensions: true,
    packages: {
        "materialize-css": {
            "main": "dist/js/materialize"
        }
    },
    map: {
        "materialize-css": "node-modules/materialize-css",
        "angular2-materialize": "node_modules/angular2-materialize/dist/index.js"
    }
  });
})(this);
