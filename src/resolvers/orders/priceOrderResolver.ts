import { Order } from "../../entities/Order";
import { PriceOrderService } from "../../services/orders/priceOrderService";
import { IContext } from "../../types/IContext";

export async function priceOrderResolver(parent: Order, _, context: IContext) {
  const { orderProducts } = parent;
  const priceOrderService = new PriceOrderService();

  return await priceOrderService.execute(orderProducts);
}
