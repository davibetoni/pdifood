import { Op } from "sequelize";
import { Product } from "../../entities/Product";
import { Restaurant } from "../../entities/Restaurant";
import {
  RestaurantAttributes,
  RestaurantRepository,
} from "../RestaurantRepository";

export class RestaurantSequelize implements RestaurantRepository {
  async createRestaurant(params: RestaurantAttributes): Promise<Restaurant> {
    return await Restaurant.create(params);
  }

  async getRestaurantByNameOrCnpj(name: string, cnpj: string) {
    return await Restaurant.findOne({
      where: { [Op.or]: [{ name }, { cnpj }] },
    });
  }

  async getRestaurants(query: string): Promise<Restaurant[]> {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { name: { [Op.like]: `%${query}%` } },
          { cnpj: { [Op.like]: `%${query}%` } },
        ],
      };
    }

    return await Restaurant.findAll({
      where,
      include: { model: Product, as: "products" },
    });
  }

  async getRestaurantById(id: string): Promise<Restaurant> {
    return await Restaurant.findByPk(id, {
      include: {
        model: Product,
        as: "products",
      },
    });
  }
}
