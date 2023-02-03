import { Json } from "sequelize/types/utils";
import { CreateOrderProductService } from "../../services/order_products/createOrderProductService";

export interface OrderProductInput {
  content: {
    orderId: string;
    productId: string;
    quantity: number;
    newIngredients: Json;
  };
}

export class CreateOrderProductResolver {
  constructor(private createOrderProductService: CreateOrderProductService) {}

  async handle(_, args: OrderProductInput) {
    const { content } = args;

    return await this.createOrderProductService.execute(content);
  }
}
