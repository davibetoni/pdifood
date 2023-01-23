import { GraphQLError } from "graphql";
import { IUser } from "../../entities/IUser";
import { finishOrderService } from "../../services/orders/finishOrderService";

interface FinishOrderContent {
  content: { id: string; finishedAt: Date };
}

export async function finishOrderResolver(
  _,
  args: FinishOrderContent,
  context: IUser
) {
  const { userAttributes } = context;
  const { content } = args;

  if (userAttributes.role === "customer") {
    throw new GraphQLError(`${userAttributes.name} you can't finish a order.`);
  }

  return await finishOrderService({
    ...content,
    finishedBy: userAttributes.id,
  });
}
