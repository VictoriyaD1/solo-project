const catalogRouter = require("express").Router();
const renderTemplate = require("../utils/renderTemplate");
const Catalog = require("../views/products/Catalog");
const Details = require("../views/products/Details");

const { Product } = require("../../db/models");

catalogRouter.get("/", async (req, res) => {
  try {
    const { login, role } = req.session;
    const products = await Product.findAll({
      attributes: ["id", "name", "price", "photo"],
    });

    renderTemplate(Catalog, { login, role, products }, res);
  } catch (error) {
    console.log(error);
  }
});

catalogRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { login, role } = req.session;
  try {
    const product = await Product.findOne({ where: { id } });
    renderTemplate(Details, { login, role, product }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = catalogRouter;
