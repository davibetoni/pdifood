import { GraphQLError } from "graphql";
import { FinishOrderService } from "../../services/orders/finishOrderService";
import { IContext } from "../../types/IContext";

interface FinishOrderContent {
  content: { id: string; finishedAt: Date };
}

export async function finishOrderResolver(
  _,
  args: FinishOrderContent,
  context: IContext
) {
  const { userAttributes, repositories } = context;
  const { content } = args;
  const finishOrderService = new FinishOrderService(
    repositories.orderRepository
  );

  if (userAttributes.role === "customer") {
    throw new GraphQLError(`${userAttributes.name} you can't finish a order.`);
  }

  return await finishOrderService.execute({
    ...content,
    finishedBy: userAttributes.id,
  });
}
