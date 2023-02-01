import { IContext } from "../../types/IContext";

interface OrderParent {
  dataValues: {
    id: string;
  };
}

export async function priceOrderResolver(
  parent: OrderParent,
  _,
  context: IContext
) {
  const { id: orderId } = parent.dataValues;
  const { services } = context;

  return await services.priceOrderService.execute(orderId);
}
