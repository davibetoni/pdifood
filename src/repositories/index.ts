import { CouponSequelize } from "./implementation/CouponSequelize";
import { OrderProductSequelize } from "./implementation/OrderProductSequelize";
import { OrderSequelize } from "./implementation/OrderSequelize";
import { ProductSequelize } from "./implementation/ProductSequelize";
import { RestaurantSequelize } from "./implementation/RestaurantSequelize";
import { UserRestaurantSequelize } from "./implementation/UserRestaurantSequelize";

export function createRepositories() {
  const restaurantRepository = new RestaurantSequelize();
  const productRepository = new ProductSequelize();
  const userRestaurantRepository = new UserRestaurantSequelize();
  const orderRepository = new OrderSequelize();
  const orderProductRepository = new OrderProductSequelize();
  const couponRepository = new CouponSequelize();

  return {
    restaurantRepository,
    productRepository,
    userRestaurantRepository,
    orderRepository,
    orderProductRepository,
    couponRepository
  };
}
