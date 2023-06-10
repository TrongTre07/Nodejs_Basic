var express = require("express");
var router = express.Router();

//  USER METHOD
// /auth/login : Dang nhap
router.post("auth/login", (req, res, next) => {
  const { phoneNumber, password } = req.body;
});

// /auth/register : dang ky
router.post("auth/register", (req, res, next) => {
  const { username, phoneNumber, password, confirmPassword } = req.body;
});

// /auth/logout : dang xuat
router.get("auth/logout", (req, res, next) => {});

// /account/change-password : doi mat khau
router.post("account/change-password", (req, res, next) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
});

// /account/profile : lay thong tin hien thi man hinh profile
router.get("account/profile", (req, res, next) => {});

// /account/edit-profile : doi thong tin profile
router.post("account/edit-profile", (req, res, next) => {
  const { username, phoneNumber } = req.body;
});

//==========================

//PRODUCT METHOD
// /get-products : lay danh sach san pham
router.get("/get-products", (req, res, next) => {});

// /get-categories : lay danh sach danh muc
router.get("/get-categories", (req, res, next) => {});

// /products/:id/details : hien thi chi tiet san pham theo id
router.get("/products/:id/details", (req, res, next) => {});

// /products?search=:query : tim kiem san pham theo query
router.get("products", (req, res, next) => {});

// ------------

// PRODUCT/FAVORITE

// /get-products/favorite : lay danh sach yeu thich
router.get("/get-products/favorite", (req, res, next) => {});

// /products/favorite/:id/delete : xoa san pham ra khoi danh sach yeu thich bang id
router.get("/products/favorite/:id/delete", (req, res, next) => {});

//========================

//CART METHOD

// /cart/get-products : lay danh sach san pham trong gio hang
router.get("/cart/get-products", (req, res, next) => {});

// /cart/:id/add : Add 1 sản phẩm từ shop vào trong giỏ hàng
router.post("cart/:id/add", (req, res, next) => {});

// /cart/:id/delete : Xoa san pham ra khoi gio hang theo id
router.get("cart/:id/delete", (req, res, next) => {
  const { id } = req.params;
});

// /cart/checkout : Update lai DB products
router.post("/cart/checkout", (req, res, next) => {
  const [] = req.body;
});
// Không có link thay đổi số lượng của Object vì nó sẽ thay đổi trong Store
//Sau đó gọi link /cart/checkout để đẩy trong Store đi

// ==========================

// CARD

// /get-cards : lay danh sach card
router.get("/get-cards", (req, res, next) => {});

// /cards/new: them card
router.post("/cards/new", (req, res, next) => {
  //card number: 16 unique nums
  //expiration date: ngay het han
  //cardholder name: ten cua chu? card
  //security code: 3 nums = CCV

  const { cardNumber, expirationDate, cardHolderName, CCV } = req.body;
});

// /cards/:id/delete : xoa card theo id
router.get("/cards/:id/delete", (req, res, next) => {
  const { id } = req.params;
});

// =====================

// ORDER

// /get-orders : lay danh sach san pham da mua thanh cong
router.get("/get-orders", (req, res, next) => {});

// /orders/:id/details : hien thi thong tin chi tiet san pham
router.get("orders/:id/details", (req, res, next) => {
  const { id } = req.params;
});

// /get-orders/delivering : lay danh sach san pham dang giao
router.get("/get-orders/delivering", (req, res, next) => {});

// /get-addresses : lay danh sach dia chi
router.get("/get-addresses", (req, res, next) => {});

// /addresses/:id/edit : lay thong tin dia chi
router.get("/addresses/:id/edit", (req, res, next) => {
  const { id } = req.params;
});

// /addresses/:id/edit : thay doi thong tin dia chi
router.post("/addresses/edit", (req, res, next) => {
  const { KhongBietBoGiVoHet } = req.body;
});

// /addresses/:id/edit : thay doi thong tin dia chi
router.post("/addresses/new", (req, res, next) => {
  const { KhongBietBoGiVoHet } = req.body;
});

router.post('')

//Hiện tại nhiêu đó, Còn PAYMENT. Payment nhiều quá nhìn nản ngang ><

module.exports = router;
