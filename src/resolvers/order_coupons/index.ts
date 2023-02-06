import { OrderCouponSequelize } from "../../repositories/implementation/OrderCouponSequelize";
import { CreateOrderCouponService } from "../../services/order_coupons/CreateOrderCouponService";
import { IContext } from "../../types/IContext";
import {
  CreateOrderCouponResolver,
  OrderCouponInput,
} from "./CreateOrderCouponResolver";

export async function createOrderCouponResolver(
  _,
  args: OrderCouponInput,
  context: IContext
) {
  const orderCouponRepository = new OrderCouponSequelize();
  const createOrderCouponService = new CreateOrderCouponService(
    orderCouponRepository
  );
  const createOrderCouponResolver = new CreateOrderCouponResolver(
    createOrderCouponService
  );

  return await createOrderCouponResolver.handle(_, args, context);
}
