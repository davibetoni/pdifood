import { Order } from "../../entities/Order";
import { PriceOrderService } from "../../services/orders/priceOrderService";

export async function priceOrderResolver(parent: Order) {
  const { orderProducts } = parent;
  const priceOrderService = new PriceOrderService();

  return await priceOrderService.execute(orderProducts);
}
