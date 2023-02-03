import { CreateOrderService } from "../../services/orders/createOrderService";
import { IContext } from "../../types/IContext";

export class CreateOrderResolver {
  constructor(private createOrderService: CreateOrderService) {}

  async handle(_, _args, context: IContext) {
    const { userAttributes } = context;

    return await this.createOrderService.execute({
      userId: userAttributes.id,
    });
  }
}
