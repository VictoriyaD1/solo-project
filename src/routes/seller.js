const sellerRouter = require("express").Router();

const renderTemplate = require("../utils/renderTemplate");
const myProducts = require("../views/products/MyProducts");
const NewProduct = require("../views/products/NewProduct");

const { Product } = require("../../db/models");
const EditProduct = require("../views/products/EditProduct");

sellerRouter.get("/new", async (req, res) => {
  const { login, role } = req.session;
  renderTemplate(NewProduct, { login, role }, res);
});

sellerRouter.post("/new", async (req, res) => {
  const { name, price, description, quantity, photo } = req.body;
  const { user_id, role } = req.session;
  let forSale = false;

  if (role) {
    if (quantity > 0) {
      forSale = true;
    }
    try {
      const product = await Product.create({
        name,
        price,
        description,
        quantity,
        seller_id: user_id,
        forSale,
        photo,
      });
      await product.save();
      res.json({ success: true });
    } catch (err) {
      renderTemplate(NewProduct, { errors: [err] }, res);
    }
  } else {
    renderTemplate(NewProduct, { errors: ["Вы не являетесь продавцом"] }, res);
  }
});

sellerRouter.get("/myProducts", async (req, res) => {
  const { user_id, login, role } = req.session;
  const products = await Product.findAll({ where: { seller_id: user_id } });
  renderTemplate(myProducts, { login, role, products }, res);
});

sellerRouter.get("/edit/:id", async (req, res) => {
  const { login, role } = req.session;
  const product = await Product.findOne({ where: { id: req.params.id } });

  renderTemplate(EditProduct, { login, role, product }, res);
});

sellerRouter.put("/edit/:id", async (req, res) => {
  const product = await Product.findOne({ where: { id: req.params.id } });
  const { name, price, description, quantity, photo } = req.body;
  product.name = name;
  product.price = price;
  product.description = description;
  product.quantity = quantity;
  product.photo = photo;

  product.save();
  res.json(product);
});

sellerRouter.delete("/delete/:id", async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.json({ success: true });
});

module.exports = sellerRouter;
