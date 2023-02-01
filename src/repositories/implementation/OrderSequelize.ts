import { Order } from "../../entities/Order";
import { OrderProduct } from "../../entities/OrderProduct";
import { OrderContent, OrderParams, OrderRepository } from "../OrderRepository";

export class OrderSequelize implements OrderRepository {
  async createOrder(content: OrderContent): Promise<Order> {
    const { userId } = content;
    return await Order.create({ userId });
  }
  async finishOrder(order: Order, finishedBy: string): Promise<Order> {
    return await order.update({ finishedAt: Date.now(), finishedBy });
  }
  async getOrderById(id: string): Promise<Order> {
    return await Order.findByPk(id, {
      include: { model: OrderProduct, as: "orderProducts" },
    });
  }
  async getOrders(query: OrderParams): Promise<Order[]> {
    let where = {};

    if (query) {
      const { finishedAt } = query;
      if (finishedAt) {
        where = {
          finishedAt: finishedAt,
        };
      }
    }

    return await Order.findAll({
      where,
      include: { model: OrderProduct, as: "orderProducts" },
    });
  }
}
