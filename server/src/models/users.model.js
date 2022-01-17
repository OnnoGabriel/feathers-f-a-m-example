// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const users = sequelizeClient.define(
    "users",
    {
      id: {
        type: DataTypes.UUID,
        unique: true,
        primaryKey: true,
        isUUID: 4,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isVerified: { type: DataTypes.BOOLEAN },
      verifyToken: { type: DataTypes.STRING },
      verifyExpires: { type: DataTypes.DATE },
      verifyChanges: { type: Sequelize.JSON },
      resetToken: { type: DataTypes.STRING },
      resetExpires: { type: DataTypes.DATE },
      resetAttempts: { type: DataTypes.INTEGER },
      verifyShortToken: { type: DataTypes.STRING },
      resetShortToken: { type: DataTypes.STRING },
      preferredComm: { type: DataTypes.STRING },
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return users;
};
