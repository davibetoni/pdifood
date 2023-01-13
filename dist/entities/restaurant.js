"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const node_crypto_1 = require("node:crypto");
const sequelize_1 = __importStar(require("sequelize"));
const database_1 = require("../database");
class Restaurant extends sequelize_1.Model {
}
exports.Restaurant = Restaurant;
Restaurant.init({
    id: {
        type: sequelize_1.default.STRING,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.default.STRING,
    },
    created_at: {
        type: sequelize_1.default.DATE,
    },
    updated_at: {
        type: sequelize_1.default.DATE,
    },
}, {
    sequelize: database_1.sequelize,
    timestamps: true,
    underscored: true,
    tableName: "restaurants",
});
Restaurant.beforeCreate((restaurant) => {
    restaurant.id = (0, node_crypto_1.randomUUID)();
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
