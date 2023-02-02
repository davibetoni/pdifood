import { CreateOrderService } from "../../services/orders/createOrderService";
import { IContext } from "../../types/IContext";

export async function createOrderResolver(_, _args, context: IContext) {
  const { userAttributes, repositories } = context;
  const createOrderService = new CreateOrderService(
    repositories.orderRepository
  );

  return await createOrderService.execute({
    userId: userAttributes.id,
  });
}
