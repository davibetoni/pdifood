"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRestaurantsService = void 0;
const restaurant_1 = require("../../entities/restaurant");
async function GetRestaurantsService() {
    return await restaurant_1.Restaurant.findAll();
}
exports.GetRestaurantsService = GetRestaurantsService;
