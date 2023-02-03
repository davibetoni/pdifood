import { createCouponResolver, getCouponsResolver } from "./coupons";
import {
  createOrderProductResolver,
  getOrderProductsResolver,
} from "./order_products";
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

export const resolvers = {
  Query: {
    restaurants: getRestaurantsResolver,
    products: getProductResolver,
    orders: getOrdersResolver,
    orderProducts: getOrderProductsResolver,
    coupons: getCouponsResolver,
  },
  Mutation: {
    createRestaurant: createRestaurantResolver,
    createProduct: createProductResolver,
    createOrder: createOrderResolver,
    finishOrder: finishOrderResolver,
    createOrderProduct: createOrderProductResolver,
    createCoupon: createCouponResolver,
  },
  Order: {
    totalQuantity: quantityOrderResolver,
    totalPrice: priceOrderResolver,
  },
};
