import { IContext } from "../../types/IContext";

interface OrderProductParams {
  orderId: string;
  productId: string;
}

export async function getOrderProductsResolver(
  _,
  args: OrderProductParams,
  context: IContext
) {
  const { services } = context;
  const { orderId, productId } = args;

  if (orderId && productId) {
    return await services.getOrderProductByIdsService.execute({
      orderId,
      productId,
    });
  }

  return await services.getOrderProductsService.execute(args);
}
