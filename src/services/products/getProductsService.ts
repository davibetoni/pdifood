import { GraphQLError } from "graphql";
import { Op } from "sequelize";
import { Product } from "../../entities/product";

interface ProductsParams {
  name: string;
  orderBy: string;
  price: number;
}

export async function getProductsService(params: ProductsParams) {
  const { name, price, orderBy } = params;
  let where = {};
  let order = [];

  if (name) {
    where = {
      name: { [Op.like]: `%${name}%` },
    };
  }

  if (price) {
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
