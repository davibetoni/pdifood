import { OrderProductSequelize } from "../../repositories/implementation/OrderProductSequelize";
import { CreateOrderProductService } from "../../services/order_products/createOrderProductService";
import {
  CreateOrderProductResolver,
  OrderProductInput,
} from "./CreateOrderProductResolver";

export async function createOrderProductResolver(_, args: OrderProductInput) {
  const orderProductRepository = new OrderProductSequelize();
  const createOrderProductService = new CreateOrderProductService(
    orderProductRepository
  );
  const createOrderProductResolver = new CreateOrderProductResolver(
    createOrderProductService
  );

  return await createOrderProductResolver.handle(_, args);
}
