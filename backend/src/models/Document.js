const { DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const Document = sequelize.define("Document", {

  fileName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  filePath: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  uploadedBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM(
      "pending",
      "approved",
      "rejected"
    ),
    defaultValue: "pending",
  },

  version: {
    type: DataTypes.STRING,
    defaultValue: "1.0",
  },

  signature: {
    type: DataTypes.STRING,
  },

});

module.exports = Document;