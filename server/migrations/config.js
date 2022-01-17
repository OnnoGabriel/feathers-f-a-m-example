const env = process.env.NODE_ENV || "development";

module.exports = {
  [env]: {
    dialect: "mysql",
    url: process.env.MYSQL_STRING,
    migrationStorageTableName: "_migrations",
  },
};
