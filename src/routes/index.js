const indexRouter = require("express").Router();

const renderTemplate = require("../utils/renderTemplate");
const Home = require("../views/Home");
const Error = require("../views/Error");

indexRouter.get("/", (req, res) => {
  const { login, role } = req.session;
  renderTemplate(Home, { login, role }, res);
});

indexRouter.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("cookieName");
    res.redirect("/");
  });
});

indexRouter.get("/page404", (req, res) => {
  renderTemplate(Error, null, res);
});

module.exports = indexRouter;
