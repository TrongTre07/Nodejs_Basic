var express = require("express");
var router = express.Router();
const userController = require("../components/user/UserController");
const jwt = require("jsonwebtoken");
const { authenWeb } = require("../middle/Authen");
// const {authenWeb} = require("../middle/Authen");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//http://localhost:3000/body
router.post("/body", function (req, res, next) {
  const { a, b, c } = req.body;
  let result = a + b + c;
  res.render("index", { result });
});

//http://localhost:3000/params/1/2/3
router.get("/params/:a/:b/:c", function (req, res, next) {
  const { a, b, c } = req.params;
  let result = Number(a) + Number(b) + Number(c);
  // res.render('index', { result });
  res.json({ result });
});

// http://localhost:3000/query?a=1&b=2&c=3
router.get("/query", function (req, res, next) {
  const { a, b, c } = req.query;
  const delta = b * b - 4 * a * c;
  let result;
  if (delta < 0) {
    result = "Phuong trinh vo nghiem";
  } else if (delta > 0) {
    result =
      "Phuong trinh co 2no phan biet" +
      ((-b + Math.sqrt(delta)) / 2) * a +
      "," +
      ((-b - Math.sqrt(delta)) / 2) * a;
  } else {
    result = "Phuong trinh co cap nghiem kep" + (-b / 2) * a;
  }
  console.log("Result:", result);
  res.render("index", { a, b, c, result });
});

// http://localhost:3000/
router.get("/", async (req, res, next) => {
  res.render("product/home");
});

// http://localhost:3000/login
router.get("/login",[authenWeb], async (req, res, next) => {
  res.render("user/login");
});

//http://localhost:3000/login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await userController.login(email, password);
    console.log("RESULT: ", result)
    if (result) {
      //tao token
      const token = jwt.sign({id:1}, "secret",  {expiresIn: "1h"});
      // ({_id: result._id, role: result: result.role})
      // {id: 1, name: "hello"}
      // const token = jwt.sign({_id: result._id, role:result.role}, "secret", {
      //   expiresIn: 600
      // });
      req.session.token = token;
    
      // return res.redirect("/cpanel/products");
      return res.redirect("/");
      
    } else {
      return res.redirect("/login");
    }
  } catch (error) {
    console.log("Login got error: ", login);
    return res.redirect("/login");
  }
});

router.get('/logout', async function(req, res, next){
  try {
    
    req.session.destroy();
    return res.redirect('/login')
  } catch (error) {
    console.log('Logout error: ', error)
    return res.redirect('/login')
  }
})

module.exports = router;
