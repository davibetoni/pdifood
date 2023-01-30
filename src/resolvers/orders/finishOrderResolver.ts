import { GraphQLError } from "graphql";
import { IContext } from "../../types/IContext";

interface FinishOrderContent {
  content: { id: string; finishedAt: Date };
}

export async function finishOrderResolver(
  _,
  args: FinishOrderContent,
  context: IContext
) {
  const { userAttributes, services } = context;
  const { content } = args;

  if (userAttributes.role === "customer") {
    throw new GraphQLError(`${userAttributes.name} you can't finish a order.`);
  }

  return await services.finishOrderService.execute({
    ...content,
    finishedBy: userAttributes.id,
  });
}
