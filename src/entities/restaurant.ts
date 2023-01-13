import { randomUUID as uuid } from "node:crypto";
import Sequelize, { Model } from "sequelize";
import { sequelize } from "../database";

interface CreateRestaurantAttributes {
  name: string;
}

interface RestaurantAttributes extends CreateRestaurantAttributes {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export class Restaurant
  extends Model<RestaurantAttributes, CreateRestaurantAttributes>
  implements RestaurantAttributes
{
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

Restaurant.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    tableName: "restaurants",
  }
);

Restaurant.beforeCreate((restaurant) => {
  restaurant.id = uuid();
});

// Todo.belongsTo(User, {
//   as: 'user',
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
//   foreignKey: {
//     allowNull: false,
//     name: 'userId',
//     field: 'user_id',
//   },
// })
// ​
// User.hasMany(Todo, {
//   as: 'todos',
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
//   foreignKey: {
//     allowNull: false,
//     name: 'userId',
//     field: 'user_id',
//   },
// })
