const {
  AuthenticationManagementService,
} = require("feathers-authentication-management");

const notifier = require("./notifier");

module.exports = function (app) {
  app.use(
    "/authManagement",
    new AuthenticationManagementService({
      app,
      notifier: notifier(app),
    })
  );
};
