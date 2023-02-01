import { Order } from "../../entities/Order";
import { IContext } from "../../types/IContext";

interface OrderParent {
  dataValues: {
    id: string;
  };
}

export async function quantityOrderResolver(
  parent: OrderParent,
  _,
  context: IContext
) {
  const { id: orderId } = parent.dataValues;
  const { services } = context;

  return await services.quantityOrderService.execute(orderId);
}
