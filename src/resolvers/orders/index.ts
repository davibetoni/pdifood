import { Order } from "../../entities/Order";
import { CouponSequelize } from "../../repositories/implementation/CouponSequelize";
import { OrderCouponSequelize } from "../../repositories/implementation/OrderCouponSequelize";
import { OrderSequelize } from "../../repositories/implementation/OrderSequelize";
import { CreateOrderService } from "../../services/orders/createOrderService";
import { FinishOrderService } from "../../services/orders/finishOrderService";
import { GetOrderByIdService } from "../../services/orders/getOrderById";
import { GetOrdersService } from "../../services/orders/getOrdersService";
import { PriceOrderService } from "../../services/orders/priceOrderService";
import { QuantityOrderService } from "../../services/orders/quantityOrderService";
import { IContext } from "../../types/IContext";
import { CreateOrderResolver } from "./CreateOrderResolver";
import { FinishOrderResolver } from "./FinishOrderResolver";
import { getOrdersArgs, GetOrdersResolver } from "./GetOrdersResolver";
import { PriceOrderResolver } from "./PriceOrderResolver";
import { QuantityOrderResolver } from "./QuantityOrderResolver";

export async function createOrderResolver(_, _args, context: IContext) {
  const orderRepository = new OrderSequelize();
  const createOrderService = new CreateOrderService(orderRepository);
  const createOrderResolver = new CreateOrderResolver(createOrderService);

  return await createOrderResolver.handle(_, _args, context);
}

export async function getOrdersResolver(
  _,
  args: getOrdersArgs,
  context: IContext
) {
  const orderRepository = new OrderSequelize();
  const getOrderByIdService = new GetOrderByIdService(orderRepository);
  const getOrdersService = new GetOrdersService(orderRepository);
  const getOrdersResolver = new GetOrdersResolver(
    getOrderByIdService,
    getOrdersService
  );

  return await getOrdersResolver.handle(_, args, context);
}

export async function finishOrderResolver(_, _args, context: IContext) {
  const orderRepository = new OrderSequelize();
  const finishOrderService = new FinishOrderService(orderRepository);
  const finishOrderResolver = new FinishOrderResolver(finishOrderService);

  return await finishOrderResolver.handle(_, _args, context);
}

export async function quantityOrderResolver(parent: Order) {
  const quantityOrderService = new QuantityOrderService();
  const quantityOrderResolver = new QuantityOrderResolver(quantityOrderService);

  return await quantityOrderResolver.handle(parent);
}

export async function priceOrderResolver(parent: Order) {
  const priceOrderService = new PriceOrderService();
  const priceOrderResolver = new PriceOrderResolver(priceOrderService);

  return await priceOrderResolver.handle(parent);
}
