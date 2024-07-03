const dotenv = require("dotenv");
const program  = require("./commander.config.js")

const { mode } = program.opts();

dotenv.config({
  path: mode === "dev" ? "./.env.desarrollo" : "./.env.produccion",
});

const configObject = {
  server: {
    mongo_url: process.env.MONGO_URL,
    port: process.env.PORT || 5000
  },
  auth: {
    jwt_secret: process.env.JWT_SECRET,
    cookie_token: process.env.COOKIE_TOKEN
  },
  mailer: {
    mailer_user: process.env.MAILER_USER,
    mailer_pass: process.env.MAILER_PASS
  }
};

module.exports =  configObject;