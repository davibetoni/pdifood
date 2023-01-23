import { GraphQLError } from "graphql";
import { Order } from "../../entities/Order";

export async function getOrderByIdService(id: string): Promise<Order> {
  try {
    return await Order.findByPk(id);
  } catch (error) {
    throw new GraphQLError(error);
  }
}
