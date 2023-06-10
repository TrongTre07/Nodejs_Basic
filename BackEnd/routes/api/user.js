var express = require("express");
var router = express.Router();
const { checkRegister } = require("../../middle/Validation");
const jwt = require("jsonwebtoken");

const userController = require("../../components/user/UserController");
// http://localhost:3000/api/users

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userController.login(email, password);
    if (user) {
      //create token
      const token = jwt.sign({ user }, "secret", { expiresIn: "1h" });
      return res.status(200).json({ result: true, user, token });
    } else {
      return res.status(400).json({ result: false, user: null });
    }
  } catch (error) {
    res.status(500).json({ result: false, user: null });
  }
});

router.post("/register", [checkRegister], async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const user = await userController.register(email, password, name);
    if (user) {
      res.status(200).json({ result: true, user });
    } else {
      res.status(400).json({ result: false, user: null });
    }
  } catch (error) {
    res.status(500).json({ result: false, user: null });
  }
});

// Send mail
// http://localhost:3000/api/user/send-mail
router.post("/send-mail", async(req, res, next) => {
  try {
    const { to, subject } = req.body;
    const content = `
    <p>Hello con ga </p>
    <p>YEyeyye</p>
    `;
    const result = await userController.sendMail(to, subject, content)
    return res.status(200).json({result: true})
  } catch (error) {
    console.log("User send mail api ", error);
    return res.status(500).json({ result: false });
  }
});
module.exports = router;
