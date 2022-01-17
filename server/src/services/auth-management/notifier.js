module.exports = (app) => {
  return {
    notifier: function (type, user, notifierOptions) {
      switch (type) {
        case "verifySignupLong":
          return sendEmail({
            from: "test@localhost",
            to: user.email,
            subject: "Please confirm e-mail address",
            text: getLink("verify", user.verifyToken),
          });
          break;

        case "resendVerifySignup":
          console.log("HI");
          return sendEmail({
            from: "test@localhost",
            to: user.email,
            subject: "Please confirm e-mail address again",
            text: getLink("verify", user.verifyToken),
          });
          break;

        case "sendResetPwd":
          return sendEmail({
            from: "test@localhost",
            to: user.email,
            subject: "Password request",
            text: getLink("reset", user.resetToken),
          });
          break;

        case "identityChange":
          return sendEmail({
            from: "test@localhost",
            to: user.email,
            subject: "E-Mail changed",
            text: getLink("reset", user.verifyToken),
          });
          break;

        default:
          break;
      }
    },
  };

  function getLink(type, hash) {
    return "http://localhost:3030/" + type + "?token=" + hash;
  }

  async function sendEmail(email) {
    try {
      const result = app.service("mailer").create(email);
    } catch (err) {
      console.error(err);
    }
  }
};
