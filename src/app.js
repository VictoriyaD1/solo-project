require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const session = require("express-session");
const indexRouter = require("./routes");
const FileStore = require("session-file-store")(session);
const regRouter = require("./routes/reg");
const loginRouter = require("./routes/login");

const { secureRoute, checkUser, checkSeller } = require("./middlewares/common");
const catalogRouter = require("./routes/catalog");
const sellerRouter = require("./routes/seller");
const cartRouter = require("./routes/cart");

const app = express();

const PORT = 3000;

const sessionConfig = {
  name: "cookieName", // не забудь указать то же имя и при удалении куки
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Mellon", // SESSION_SECRET в .env
  resave: false, // если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // если false, куки появлятся только при установке req.session
  cookie: {
    maxAge: 24 * 1000 * 60 * 60, // время жизни в ms, 24(h)*1000(ms)*60(sec)*60(min) = 86400000
    httpOnly: true, // секьюрность, оставляем true
  },
};

app.use(session(sessionConfig));

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

// app.use("/register", regRouter);
app.use("/catalog", checkUser, catalogRouter);
app.use("/register", secureRoute, regRouter);
app.use("/login", secureRoute, loginRouter);
// app.use("/login", loginRouter);
app.use("/", indexRouter);
app.use("/cart", cartRouter);
app.use("/", checkSeller, sellerRouter);

app.listen(PORT, function () {
  console.log(`Server started on http://localhost:${this.address().port}`);
});
