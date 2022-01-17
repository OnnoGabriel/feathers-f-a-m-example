"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        unique: true,
        primaryKey: true,
        isUUID: 4,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      isVerified: { type: Sequelize.BOOLEAN },
      verifyToken: { type: Sequelize.STRING },
      verifyExpires: { type: Sequelize.DATE },
      verifyChanges: { type: Sequelize.JSON },
      resetToken: { type: Sequelize.STRING },
      resetExpires: { type: Sequelize.DATE },
      resetAttempts: { type: Sequelize.INTEGER },
      verifyShortToken: { type: Sequelize.STRING },
      resetShortToken: { type: Sequelize.STRING },
      preferredComm: { type: Sequelize.STRING },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
