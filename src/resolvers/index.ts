import { createProductResolver } from "./products/createProductResolver";
import { createRestaurantResolver } from "./restaurants/createRestaurantResolver";
import { getProductResolver } from "./products/getProductsResolver";
import { getRestaurantsResolver } from "./restaurants/getRestaurantsResolver";
import { createOrderResolver } from "./orders/createOrderResolver";
import { getOrdersResolver } from "./orders/getOrdersResolver";
import { finishOrderResolver } from "./orders/finishOrderResolver";
import { getOrderProductsResolver } from "./order_products/getOrderProductsResolver";
import { createOrderProductResolver } from "./order_products/createOrderProductResolver";
import { quantityOrderResolver } from "./orders/quantityOrderResolver";
import { priceOrderResolver } from "./orders/priceOrderResolver";
import { createCouponResolver, getCouponsResolver } from "./coupons";

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
