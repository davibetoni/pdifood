"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRestaurantByIdService = void 0;
const graphql_1 = require("graphql");
const restaurant_1 = require("../../entities/restaurant");
async function GetRestaurantByIdService(id) {
    try {
        const restaurant = await restaurant_1.Restaurant.findByPk(id);
        return [restaurant];
    }
    catch (error) {
        throw new graphql_1.GraphQLError(error);
    }
}
exports.GetRestaurantByIdService = GetRestaurantByIdService;
