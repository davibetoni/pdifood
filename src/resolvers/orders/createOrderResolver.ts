import { IUser } from "../../entities/IUser";
import { createOrderService } from "../../services/orders/createOrderService";

export async function createOrderResolver(_, _args, context: IUser) {
  const { userAttributes } = context;

  return await createOrderService({ userId: userAttributes.id });
}
