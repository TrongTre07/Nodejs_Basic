var express = require("express");
var router = express.Router();

const categoryController = require("../../components/category/CategoryController");
const productController = require("../../components/product/ProductController");
const upload = require("../../middle/UploadFile");
const {authenWeb} = require('../../middle/Authen')
// const { deleteProductById } = require('../../components/product/ProductController');
//http://localhost:3000/cpanel/products
//Hien thi danh sach san pham
router.get("/",[authenWeb], async function (req, res, next) {
  const products = await productController.getAllProduct();
  res.render("product/list", { products });
});

//http:/localhost:3000/cpanel/products/:id/delete
router.get("/:id/delete",[authenWeb], async function (req, res, next) {
  try {
    const { id } = req.params;
    result = await productController.deleteProductById(id);
    console.log("ID: ", id);
    return res.json({ result });
  } catch (error) {
    console.log("delete at product.js: ", error);
    next(error);
  }
});

//http:/localhost:3000/cpanel/products/new
router.get("/new", async function (req, res, next) {
  try {
    const category = await categoryController.getAllCategory();
    res.render("product/new", { category });
  } catch (error) {
    next(error);
  }
});

//xu ly them moi
router.post("/new" ,[authenWeb,upload.single("image")], async function (req, res, next) {
  try {
    let { file, body } = req;
    if (file) {
      file = `http://192.168.137.202:3000/images/${file.filename}`;
      body = { ...body, image: file };
    }
    const { name, price, quantity, category, image } = body;
    const result = await productController.addProduct(
      name,
      price,
      quantity,
      image,
      category
    );
    if (result) {
      return res.redirect("/cpanel/products");
    }
    return res.redirect("/cpanel/products/new");
  } catch (error) {
    next(error);
  }
});
//cap nhat san pham
router.post("/:id/edit", [authenWeb,upload.single("image")], async function (req, res, next) {
  try {
    let {id} = req.params;
    let { file, body } = req;
    if (file) {
      file = `http://192.168.2.162:3000/images/${file.filename}`;
      body = { ...body, image: file };
    }
    const { name, price, quantity, category, image } = body;
    const result = await productController.updateProductById(
      id,
      name,
      price,
      quantity,
      image,
      category
    );
    if (result) {
      return res.redirect("/cpanel/products");
    }
    console.log()
    return res.redirect(`/cpanel/products/${id}/edit`);
  } catch (error) {
    next(error);
  }
});

//http:/localhost:3000/cpanel/products/edit
router.get("/:id/edit",[authenWeb], async function (req, res, next) {
  try {
    const { id } = req.params;
    const product = await productController.getProductById(id);
    let category = await categoryController.getAllCategory();
    category = category.map((item) => {
      item.selected = false;
      if (item._id.toString() == product.category.toString()) {
        item.selected = true;
      }
      return item;
    });
    console.log(product, category);
    res.render("product/edit", { product, category });
  } catch (error) {}
});

module.exports = router;
