import { GraphQLError } from "graphql";
import { Order } from "../../entities/Order";

interface FinishOrderAttributes {
  id: string;
  finishedBy: string;
  finishedAt: Date;
}

export async function finishOrderService(
  content: FinishOrderAttributes
): Promise<Order> {
  const { id, finishedAt, finishedBy } = content;

  const order = await Order.findByPk(id);

  if (!order) {
    throw new GraphQLError("OrderId is not valid.");
  }

  if (order.finishedAt) {
    throw new GraphQLError("Order is already finished.");
  }

  try {
    return await order.update({
      finishedAt: finishedAt || Date.now(),
      finishedBy,
    });
  } catch (error) {
    throw new GraphQLError(error);
  }
}
function moment() {
  throw new Error("Function not implemented.");
}
