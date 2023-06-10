var express = require("express");
var router = express.Router();

// http://localhost:3000/dien-tich/circle?&a=10

// router.get("/:circle", function (req, res, next) {
//   const { circle } = req.params;
//   const { a } = req.query;
//   const result = 3.14 * Number(a) * Number(a);

//   res.render("dienTich", { a, circle, result });
// });

// http://localhost:3000/dien-tich/square?&a=10
router.get("/:square", function (req, res, next) {
  const { square } = req.params;
  const { a } = req.query;
  const result = Number(a) * Number(a);

  res.render("dienTich", { a, square, result });
});

module.exports = router;

// * 1. Route: /dien-tich
// *  - Method: GET
// *  - Input: 2 tham số: a, b
// *  - Params: Loại hình
// *  - Query: a, b, c, ...
// *  http://localhost:3000/dien-tich/hinh-tron?&a=10&b=20
// *  - Output: Diện tích có dùng bootstrap
