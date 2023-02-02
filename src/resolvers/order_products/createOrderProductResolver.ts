import { Json } from "sequelize/types/utils";
import { CreateOrderProductService } from "../../services/order_products/createOrderProductService";
import { IContext } from "../../types/IContext";

interface OrderProductInput {
  content: {
    orderId: string;
    productId: string;
    quantity: number;
    newIngredients: Json;
  };
}

export async function createOrderProductResolver(
  _,
  args: OrderProductInput,
  context: IContext
) {
  const { content } = args;
  const { orderProductRepository } = context.repositories;
  const createOrderProductService = new CreateOrderProductService(
    orderProductRepository
  );

  return await createOrderProductService.execute(content);
}
