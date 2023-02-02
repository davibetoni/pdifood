import { CreateCouponService } from "../services/coupons/createCouponService";
import { GetCouponByIdService } from "../services/coupons/getCouponByIdService";
import { GetCouponsService } from "../services/coupons/getCouponsService";
import { CreateOrderService } from "../services/orders/createOrderService";
import { FinishOrderService } from "../services/orders/finishOrderService";
import { GetOrderByIdService } from "../services/orders/getOrderById";
import { GetOrdersService } from "../services/orders/getOrdersService";
import { PriceOrderService } from "../services/orders/priceOrderService";
import { QuantityOrderService } from "../services/orders/quantityOrderService";
import { CreateOrderProductService } from "../services/order_products/createOrderProductService";
import { GetOrderProductByIdsService } from "../services/order_products/getOrderProductByIdsService";
import { GetOrderProductsService } from "../services/order_products/getOrderProductsService";
import { CreateProductService } from "../services/products/createProductService";
import { GetProductsService } from "../services/products/getProductsService";
import { CreateRestaurantService } from "../services/restaurants/createRestaurantService";
import { GetRestaurantByIdService } from "../services/restaurants/getRestaurantByIdService";
import { GetRestaurantsService } from "../services/restaurants/getRestaurantsService";
import { GetUserRestaurantByIdService } from "../services/user_restaurants/getUserRestaurantByIdsService";

export interface IServices {
  getRestaurantsService: GetRestaurantsService;
  getRestaurantByIdService: GetRestaurantByIdService;
  createRestaurantService: CreateRestaurantService;
  getProductsService: GetProductsService;
  createProductService: CreateProductService;
  getUserRestaurantByIdsService: GetUserRestaurantByIdService;
  createOrderService: CreateOrderService;
  finishOrderService: FinishOrderService;
  getOrderByIdService: GetOrderByIdService;
  getOrdersService: GetOrdersService;
  quantityOrderService: QuantityOrderService;
  priceOrderService: PriceOrderService;
  getOrderProductsService: GetOrderProductsService;
  getOrderProductByIdsService: GetOrderProductByIdsService;
  createOrderProductService: CreateOrderProductService;
  createCouponService: CreateCouponService;
  getCouponsService: GetCouponsService;
  getCouponByIdService: GetCouponByIdService;
}
