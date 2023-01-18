import { GraphQLError } from "graphql";
import { Json } from "sequelize/types/utils";
import { Product } from "../../entities/product";

interface ProductAttributes {
  restaurantId: string;
  name: string;
  price: number;
  ingredients: Json;
  imageUrl: string;
}

export async function createProductService(content: ProductAttributes) {
  const { restaurantId, name } = content;

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
