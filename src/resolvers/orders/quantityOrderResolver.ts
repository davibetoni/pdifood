import { Order } from "../../entities/Order";
import { QuantityOrderService } from "../../services/orders/quantityOrderService";

export async function quantityOrderResolver(parent: Order) {
  const { orderProducts } = parent;
  const quantityOrderService = new QuantityOrderService();

  return await quantityOrderService.execute(orderProducts);
}
