import { GraphQLError } from "graphql";
import { Json } from "sequelize/types/utils";
import { sequelize } from "../../database";
import { Product } from "../../entities/product";

interface ProductAttributes {
  restaurantId: string;
  name: string;
  price: number;
  ingredients: Json;
  imageUrl: string;
}

export async function createProductService(content: ProductAttributes) {
  const { restaurantId, name, price, ingredients, imageUrl } = content;

  const newProduct = Product.build(content)

  try {
    newProduct.save()
  } catch (err) {
    throw new GraphQLError(err);
  }
}
