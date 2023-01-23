import { GraphQLError } from "graphql";
import { Order } from "../../entities/Order";

interface OrderContent {
  userId: string;
}

export async function createOrderService(
  content: OrderContent
): Promise<Order> {
  const { userId } = content;

  try {
    const order = Order.build({ userId });
    return await order.save();
  } catch (error) {
    throw new GraphQLError(error);
  }
}
