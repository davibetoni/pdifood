import { Order } from "../../entities/Order";
import { IContext } from "../../types/IContext";

export async function quantityOrderResolver(
  parent: Order,
  _,
  context: IContext
) {
  const { orderProducts } = parent;
  const { services } = context;

  return await services.quantityOrderService.execute(orderProducts);
}
