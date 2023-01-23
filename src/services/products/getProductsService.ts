import { GraphQLError } from "graphql";
import { Op } from "sequelize";
import { Product } from "../../entities/Product";

interface ProductsParams {
  name: string;
  orderBy: string;
  restaurantId: string;
  price: number;
}

export async function getProductsService(
  params: ProductsParams
): Promise<Product[]> {
  const { name, price, orderBy, restaurantId } = params;
  let where: any = {};
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

  try {
    return await Product.findAll({ where, order });
  } catch (err) {
    throw new GraphQLError(err);
  }
}
