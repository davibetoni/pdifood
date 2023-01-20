import { GraphQLError } from "graphql";
import { Op } from "sequelize";
import { Restaurant } from "../../entities/Restaurant";
import { cnpjToNumber } from "../../helpers/cpf-cnpj";

interface RestaurantAttributes {
  name: string;
  cnpj: string;
}

export async function createRestaurantService(content: RestaurantAttributes) {
  const { name, cnpj } = content;

  const validCnpj = cnpjToNumber(cnpj);

  const restaurants = await Restaurant.findOne({
    where: { [Op.or]: [{ name }, { cnpj: validCnpj }] },
  });

  if (restaurants) {
    throw new GraphQLError("CNPJ or Fantasy Name is already in use.");
  }

  const newRestaurant = Restaurant.build({ name, cnpj });

  try {
    return await newRestaurant.save();
  } catch (err) {
    throw new GraphQLError(err);
  }
}
