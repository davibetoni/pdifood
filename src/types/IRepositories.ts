import { CouponSequelize } from "../repositories/implementation/CouponSequelize";
import { OrderProductSequelize } from "../repositories/implementation/OrderProductSequelize";
import { OrderSequelize } from "../repositories/implementation/OrderSequelize";
import { ProductSequelize } from "../repositories/implementation/ProductSequelize";
import { RestaurantSequelize } from "../repositories/implementation/RestaurantSequelize";
import { UserRestaurantSequelize } from "../repositories/implementation/UserRestaurantSequelize";

export interface IRepositories {
  restaurantRepository: RestaurantSequelize;
  productRepository: ProductSequelize;
  userRestaurantRepository: UserRestaurantSequelize;
  orderRepository: OrderSequelize;
  orderProductRepository: OrderProductSequelize;
  couponRepository: CouponSequelize;
}
