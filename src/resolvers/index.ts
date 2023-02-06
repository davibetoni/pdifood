import { createCouponResolver, getCouponsResolver } from "./coupons";
import { createOrderProductResolver } from "./order_products";
import {
  createOrderResolver,
  finishOrderResolver,
  getOrdersResolver,
  priceOrderResolver,
  quantityOrderResolver,
} from "./orders";
import { createProductResolver, getProductResolver } from "./products";
import {
  createRestaurantResolver,
  getRestaurantsResolver,
} from "./restaurants";
import { createOrderCouponResolver } from "./order_coupons";
import createUserRestaurantResolver from "./user_restaurants";

export const resolvers = {
  Query: {
    restaurants: getRestaurantsResolver,
    products: getProductResolver,
    orders: getOrdersResolver,
    coupons: getCouponsResolver,
  },
  Mutation: {
    createRestaurant: createRestaurantResolver,
    createProduct: createProductResolver,
    createOrder: createOrderResolver,
    finishOrder: finishOrderResolver,
    createOrderProduct: createOrderProductResolver,
    createCoupon: createCouponResolver,
    createOrderCoupon: createOrderCouponResolver,
    createUserRestaurant: createUserRestaurantResolver,
  },
  Order: {
    totalQuantity: quantityOrderResolver,
    totalPrice: priceOrderResolver,
  },
};
