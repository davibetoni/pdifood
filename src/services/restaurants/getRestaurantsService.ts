import { GraphQLError } from "graphql";
import { Op } from "sequelize";
import { Product } from "../../entities/Product";
import { Restaurant } from "../../entities/Restaurant";

export async function getRestaurantsService(query: String) {
  let where = {};

  if (query) {
    where = {
      [Op.or]: [
        { name: { [Op.like]: `%${query}%` } },
        { cnpj: { [Op.like]: `%${query}%` } },
      ],
    };
  }

  try {
    return await Restaurant.findAll({
      where,
      include: { model: Product, as: "products" },
    });
  } catch (err) {
    throw new GraphQLError(err);
  }
}
