module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("usersnodeforreacts", {
    username: {
      type: Sequelize.STRING,
      require: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      require: true,
      allowNull: false,
    },

    password: {
      type: Sequelize.STRING,
      require: true,
      allowNull: false,
    },
    codeforverify: {
      type: Sequelize.STRING,
      defaultValue: "",
    },
    idverify: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });
  return User;
};
