import { GraphQLError } from "graphql";
import { Op } from "sequelize";
import { Restaurant } from "../../entities/restaurant";

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
    return await Restaurant.findAll({ where });
  } catch (err) {
    throw new GraphQLError(err);
  }
}
