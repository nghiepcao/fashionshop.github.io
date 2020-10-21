require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    operatorsAliases: 0,
    pool: {
      max: parseInt(process.env.DATABASE_POOL_MAX),
      min: parseInt(process.env.DATABASE_POOL_MIN),
      acquire: process.env.DATABASE_POOL_ACQUIRE,
      idle: process.env.DATABASE_POOL_IDLE,
    },
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./Users/user.model")(sequelize, Sequelize);
// db.role = require("./models/role")(sequelize, Sequelize);
// db.job = require("./models/jobs")(sequelize, Sequelize);
// db.verify = require("./models/verify")(sequelize, Sequelize);
// db.role.belongsToMany(db.user, {
//   through: "user_roles",
//   foreignKey: "roleId",
//   otherKey: "userId",
// });
// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "userId",
//   otherKey: "roleId",
// });

// db.User = require("./Users/user.model")(sequelize, Sequelize);
// db.File = require("./uploadImage/upload.model")(sequelize, Sequelize);
module.exports = db;
