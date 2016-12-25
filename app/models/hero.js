"use strict";
var Hero = (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }
    Hero.comeOn = function (params) {
        return new Hero(params.id, params.name);
    };
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map