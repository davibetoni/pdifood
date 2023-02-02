import { GetOrderByIdService } from "../../services/orders/getOrderById";
import { GetOrdersService } from "../../services/orders/getOrdersService";
import { IContext } from "../../types/IContext";

interface QueryParams {
  finishedAt: Date;
}

interface getOrdersArgs {
  id: string;
  query: QueryParams;
}

export async function getOrdersResolver(
  _,
  args: getOrdersArgs,
  context: IContext
) {
  const { id, query } = args;
  const { repositories, userAttributes } = context;
  const getOrderByIdService = new GetOrderByIdService(
    repositories.orderRepository
  );
  const getOrdersService = new GetOrdersService(repositories.orderRepository);

  let userId: string;
  if (userAttributes.role !== "admin") {
    userId = userAttributes.id;
  }

  if (id) {
    return [await getOrderByIdService.execute(id, userId)];
  }
  return await getOrdersService.execute(query, userId);
}
