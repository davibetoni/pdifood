import { GraphQLError } from "graphql";
import { Json } from "sequelize/types/utils";
import { IUser } from "../../entities/IUser";
import { Product } from "../../entities/Product";
import { getUserRestaurantByIdService } from "../user_restaurants/getUserRestaurantByIdsService";

interface ProductAttributes {
  restaurantId: string;
  name: string;
  price: number;
  ingredients: Json;
  imageUrl: string;
}

export async function createProductService(
  content: ProductAttributes,
  manager: IUser
) {
  const { restaurantId, name } = content;
  const { userAttributes } = manager;

  const userRestaurant = getUserRestaurantByIdService(
    restaurantId,
    userAttributes.id
  );

  if (userAttributes.role === "manager" && !userRestaurant) {
    throw new GraphQLError(
      `${userAttributes.name}, you aren't authorized to create products on this restaurant.`
    );
  }

  const product = await Product.findOne({ where: { name, restaurantId } });

  if (product) {
    throw new GraphQLError(
      "Already exist a product with this name on this restaurant."
    );
  }

  const newProduct = Product.build(content);

  try {
    return await newProduct.save();
  } catch (err) {
    throw new GraphQLError(err);
  }
}
