const regRouter = require("express").Router();

const bcrypt = require("bcrypt");

const renderTemplate = require("../utils/renderTemplate");
const Register = require("../views/Register");

const { User } = require("../../db/models");

regRouter.get("/", (req, res) => {
  renderTemplate(Register, {}, res);
});

regRouter.post("/", async (req, res) => {
  try {
    const { login, email, password, role } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ err: `Пользователь с почтой ${email} уже существует` });
    } else {
      const hash = await bcrypt.hash(password, 10);
      let seller;
      if (
        role.toLowerCase() === "продавец" ||
        role.toLowerCase() === "покупатель"
      ) {
        role.toLowerCase() === "продавец" ? (seller = true) : (seller = false);

        const newUser = await User.create({
          login,
          email,
          password: hash,
          seller,
        });
        req.session.user_id = newUser.id;
        req.session.login = newUser.login;
        req.session.email = newUser.email;
        req.session.role = newUser.seller;

        req.session.save(() => {
          res.json({ regDone: "Добро пожаловать!" });
        });
      } else {
        res.json({ err: `Роль ${role} некорректна` });
      }
    }
  } catch (error) {
    res.redirect("/page404");
  }
});

module.exports = regRouter;
