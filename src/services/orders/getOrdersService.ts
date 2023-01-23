import { GraphQLError } from "graphql";
import { Order } from "../../entities/Order";

interface OrderParams {
  finishedAt: Date;
}

export async function getOrdersService(params: OrderParams): Promise<Order[]> {
  let where = {};

  if (params) {
    const { finishedAt } = params;
    if (finishedAt) {
      where = {
        finishedAt: finishedAt,
      };
    }
  }

  try {
    return await Order.findAll({ where });
  } catch (error) {
    throw new GraphQLError(error);
  }
}
