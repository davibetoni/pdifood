"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRestaurantsResolver = void 0;
const getRestaurantByIdService_1 = require("../services/restaurants/getRestaurantByIdService");
const getRestaurantsService_1 = require("../services/restaurants/getRestaurantsService");
async function getRestaurantsResolver(_, args) {
    const { id } = args;
    if (id) {
        return await (0, getRestaurantByIdService_1.GetRestaurantByIdService)(id);
    }
    return await (0, getRestaurantsService_1.GetRestaurantsService)();
}
exports.getRestaurantsResolver = getRestaurantsResolver;
