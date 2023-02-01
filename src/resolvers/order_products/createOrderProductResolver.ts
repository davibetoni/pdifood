import { Json } from "sequelize/types/utils";
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
  const { services } = context;

  return await services.createOrderProductService.execute(content);
}
