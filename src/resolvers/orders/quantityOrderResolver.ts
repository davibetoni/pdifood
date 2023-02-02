import { Order } from "../../entities/Order";
import { QuantityOrderService } from "../../services/orders/quantityOrderService";
import { IContext } from "../../types/IContext";

export async function quantityOrderResolver(
  parent: Order,
  _,
  context: IContext
) {
  const { orderProducts } = parent;
  const quantityOrderService = new QuantityOrderService();

  return await quantityOrderService.execute(orderProducts);
}
