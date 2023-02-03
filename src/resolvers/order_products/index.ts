import { OrderProductSequelize } from "../../repositories/implementation/OrderProductSequelize";
import { CreateOrderProductService } from "../../services/order_products/createOrderProductService";
import { GetOrderProductByIdsService } from "../../services/order_products/getOrderProductByIdsService";
import { GetOrderProductsService } from "../../services/order_products/getOrderProductsService";
import {
  CreateOrderProductResolver,
  OrderProductInput,
} from "./CreateOrderProductResolver";
import {
  GetOrderProductResolver,
  OrderProductParams,
} from "./GetOrderProductsResolver";

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

export async function getOrderProductsResolver(_, args: OrderProductParams) {
  const orderProductRepository = new OrderProductSequelize();
  const getOrderProductByIdsService = new GetOrderProductByIdsService(
    orderProductRepository
  );
  const getOrderProductsService = new GetOrderProductsService(
    orderProductRepository
  );
  const getOrderProductsResolver = new GetOrderProductResolver(
    getOrderProductByIdsService,
    getOrderProductsService
  );

  return await getOrderProductsResolver.handle(_, args);
}
