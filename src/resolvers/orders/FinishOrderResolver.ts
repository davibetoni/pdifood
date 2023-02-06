import { GraphQLError } from "graphql";
import { Role } from "../../helpers/role";
import { FinishOrderService } from "../../services/orders/finishOrderService";
import { IContext } from "../../types/IContext";

export interface FinishOrderContent {
  content: { id: string; finishedAt: Date };
}

export class FinishOrderResolver {
  constructor(private finishOrderService: FinishOrderService) {}

  async handle(_, args: FinishOrderContent, context: IContext) {
    const { userAttributes } = context;
    const { content } = args;

    if (userAttributes.role === Role.Customer) {
      throw new GraphQLError(
        `${userAttributes.name} you can't finish a order.`
      );
    }

    return await this.finishOrderService.execute({
      ...content,
      finishedBy: userAttributes.id,
    });
  }
}
