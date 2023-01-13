"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const getRestaurantsResolver_1 = require("./getRestaurantsResolver");
exports.resolvers = {
    Query: {
        restaurants: getRestaurantsResolver_1.getRestaurantsResolver,
    },
};
