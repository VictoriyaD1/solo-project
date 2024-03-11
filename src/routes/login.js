const loginRouter = require("express").Router();

const bcrypt = require("bcrypt");
const renderTemplate = require("../utils/renderTemplate");

const Login = require("../views/Login");

const { User } = require("../../db/models");

loginRouter.get("/", (req, res) => {
  renderTemplate(Login, {}, res);
});

loginRouter.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.json({ err: "Пользователя не существует" });
    } else {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.user_id = user.id;
        req.session.login = user.login;
        req.session.email = user.email;
        req.session.role = user.seller;
        req.session.save(() => {
          res.json({ logDone: "Рады видеть вас снова" });
        });
      } else {
        res.json({ errPassword: "Неверный пароль" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = loginRouter;
