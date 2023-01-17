import { GraphQLError } from "graphql";
import { Op } from "sequelize";
import { Restaurant } from "../../entities/restaurant";

interface RestaurantAttributes {
  name: string;
  cnpj: string;
}

export async function createRestaurantService(content: RestaurantAttributes) {
  const { name, cnpj } = content;
  const newRestaurant = Restaurant.build({ name, cnpj });
  const restaurants = await Restaurant.findAll({
    where: { [Op.or]: [{ name }, { cnpj }] },
  });

  if (restaurants?.length !== 0) {
    throw new GraphQLError("CNPJ or Fantasy Name is already in use.");
  }

  try {
    return await newRestaurant.save();
  } catch (err) {
    throw new GraphQLError(err);
  }
}
