import { Order } from "../../entities/Order";
import { PriceOrderService } from "../../services/orders/priceOrderService";

export class PriceOrderResolver {
  constructor(private priceOrderService: PriceOrderService) {}

  async handle(parent: Order) {
    return await this.priceOrderService.execute(parent);
  }
}
