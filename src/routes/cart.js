const cartRouter = require("express").Router();

const renderTemplate = require("../utils/renderTemplate");
const MyCart = require("../views/Cart");

const { Product, Cart } = require("../../db/models/index");

cartRouter.get("/", async (req, res) => {
  const { user_id, login, role } = req.session;

  const products = await Cart.findAll({
    raw: true,
    include: [
      {
        model: Product,
        attributes: ["name", "price", "photo"],
      },
    ],
    where: { user_id },
  });

  renderTemplate(MyCart, { login, role, products }, res);
});

cartRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const { user_id } = req.session;
  try {
    const entry = await Cart.findOne({ where: { product_id: id, user_id } });

    if (!entry) {
      await Cart.create({
        product_id: id,
        user_id,
        quantity: "1",
      });
    }
    res.redirect("/catalog");
  } catch (error) {
    console.log(error);
  }
});

cartRouter.delete("/deleteInCart/:id", async (req, res) => {
  const { id } = req.params;
  await Cart.destroy({ where: { id } });
  res.json({ success: true });
});

module.exports = cartRouter;
