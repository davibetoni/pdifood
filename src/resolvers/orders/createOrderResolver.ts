import { IContext } from "../../types/IContext";

export async function createOrderResolver(_, _args, context: IContext) {
  const { userAttributes, services } = context;

  return await services.createOrderService.execute({
    userId: userAttributes.id,
  });
}
