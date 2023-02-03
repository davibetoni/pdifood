import { Order } from "../../entities/Order";
import { PriceOrderService } from "../../services/orders/priceOrderService";

export class PriceOrderResolver {
  constructor(private priceOrderService: PriceOrderService) {}

  async handle(parent: Order) {
    const { orderProducts } = parent;

    return await this.priceOrderService.execute(orderProducts);
  }
}
