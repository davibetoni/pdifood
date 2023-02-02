import { GetOrderProductByIdsService } from "../../services/order_products/getOrderProductByIdsService";
import { GetOrderProductsService } from "../../services/order_products/getOrderProductsService";
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
  const { orderProductRepository } = context.repositories;
  const { orderId, productId } = args;
  const getOrderProductByIdsService = new GetOrderProductByIdsService(
    orderProductRepository
  );
  const getOrderProductsService = new GetOrderProductsService(
    orderProductRepository
  );

  if (orderId && productId) {
    return await getOrderProductByIdsService.execute({
      orderId,
      productId,
    });
  }

  return await getOrderProductsService.execute(args);
}
