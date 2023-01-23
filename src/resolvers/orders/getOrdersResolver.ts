import { IUser } from "../../entities/IUser";
import { getOrderByIdService } from "../../services/orders/getOrderById";
import { getOrdersService } from "../../services/orders/getOrdersService";

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
  context: IUser
) {
  const { id, query } = args;

  if (id) {
    return await getOrderByIdService(id);
  }
  return await getOrdersService(query);
}
