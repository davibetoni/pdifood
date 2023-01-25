import { Op } from "sequelize";
import { Product } from "../../entities/Product";
import {
  ProductAttributes,
  ProductRepository,
  ProductsParams,
} from "../ProductRepository";

export class ProductSequelize implements ProductRepository {
  async getProducts(query: ProductsParams): Promise<Product[]> {
    const { name, price, orderBy, restaurantId } = query;
    let where = {};
    let order = [];

    if (restaurantId) {
      where = {
        restaurantId: restaurantId,
      };
    }

    if (name) {
      where = {
        [Op.or]: [{ ...where }, { name: { [Op.like]: `%${name}%` } }],
      };
    }

    if (price && !orderBy) {
      where = {
        [Op.or]: [{ ...where }, { price: price }],
      };
    }

    if (orderBy) {
      switch (orderBy) {
        case "moreThan":
          where = {
            [Op.and]: [{ ...where }, { price: { [Op.gte]: price } }],
          };
          break;
        case "lessThan":
          where = {
            [Op.and]: [{ ...where }, { price: { [Op.lte]: price } }],
          };
          break;
        case "asc":
          order.push(["price", "ASC"]);
          break;
        case "desc":
          order.push(["price", "DESC"]);
          break;
      }
    }

    return await Product.findAll({ where, order });
  }

  async getProductByNameByRestaurant(
    name: string,
    restaurantId: string
  ): Promise<Product> {
    return await Product.findOne({ where: { name, restaurantId } });
  }

  async createProduct(params: ProductAttributes): Promise<Product> {
    return await Product.create(params);
  }
}
