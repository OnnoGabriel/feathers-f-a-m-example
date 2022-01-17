// Initializes the `/mailer` service on path `/mailer`
const Mailer = require("feathers-mailer");
const smtpTransport = require("nodemailer-smtp-transport");
const hooks = require("./mailer.hooks");

module.exports = async function (app) {
  // Config for local testing (via Mailhog)
  let config = {
    smtp: {
      host: "mailhog",
      port: "1025",
    },
  };

  app.use("/mailer", Mailer(smtpTransport(config.smtp)));

  const service = app.service("mailer");
  service.hooks(hooks);
};
