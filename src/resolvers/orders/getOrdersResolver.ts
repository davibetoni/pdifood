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
  const { services } = context;

  if (id) {
    return await services.getOrderByIdService.execute(id);
  }
  return await services.getOrdersService.execute(query);
}
