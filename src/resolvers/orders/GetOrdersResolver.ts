import { GetOrderByIdService } from "../../services/orders/getOrderById";
import { GetOrdersService } from "../../services/orders/getOrdersService";
import { IContext } from "../../types/IContext";

interface QueryParams {
  finishedAt: Date;
}

export interface getOrdersArgs {
  id: string;
  query: QueryParams;
}

export class GetOrdersResolver {
  constructor(
    private getOrderByIdService: GetOrderByIdService,
    private getOrdersService: GetOrdersService
  ) {}

  async handle(_, args: getOrdersArgs, context: IContext) {
    const { id, query } = args;
    const { userAttributes } = context;

    let userId: string;
    if (userAttributes.role !== "admin") {
      userId = userAttributes.id;
    }

    if (id) {
      return [await this.getOrderByIdService.execute(id, userId)];
    }
    return await this.getOrdersService.execute(query, userId);
  }
}
