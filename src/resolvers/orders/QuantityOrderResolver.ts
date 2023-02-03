import { Order } from "../../entities/Order";
import { QuantityOrderService } from "../../services/orders/quantityOrderService";

export class QuantityOrderResolver {
  constructor(private quantityOrderService: QuantityOrderService) {}

  async handle(parent: Order) {
    const { orderProducts } = parent;

    return await this.quantityOrderService.execute(orderProducts);
  }
}