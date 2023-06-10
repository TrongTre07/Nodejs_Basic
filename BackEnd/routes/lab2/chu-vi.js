var express = require("express");
var router = express.Router();

// http://localhost:3000/chu-vi?a=10&b=20
router.post("", function (req, res, next) {
  const perimeter = req.body;

  const { a, b } = req.query;
  const result = Number(a) + Number(b) * 2;
  res.json({ result });
});

module.exports = router;

// 2. Route: /chu-vi
//  *  - Method: POST
//  *  - Input: 2 tham số: a, b
//  *  - Body: Loại hình
//  *  - Query: a, b, c, ...
//  *  http://localhost:3000/chu-vi?a=10&b=20
//  *  - Output: JSON
