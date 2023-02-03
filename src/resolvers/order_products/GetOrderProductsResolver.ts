import { GetOrderProductByIdsService } from "../../services/order_products/getOrderProductByIdsService";
import { GetOrderProductsService } from "../../services/order_products/getOrderProductsService";
import { IContext } from "../../types/IContext";

export interface OrderProductParams {
  orderId: string;
  productId: string;
}

export class GetOrderProductResolver {
  constructor(
    private getOrderProductByIdsService: GetOrderProductByIdsService,
    private getOrderProductsService: GetOrderProductsService
  ) {}

  async handle(_, args: OrderProductParams) {
    const { orderId, productId } = args;

    if (orderId && productId) {
      return await this.getOrderProductByIdsService.execute({
        orderId,
        productId,
      });
    }

    return await this.getOrderProductsService.execute(args);
  }
}
