const checkRegister = (req, res, next) => {
  const { name, email, password, confirm_password } = req.body;
  if (!name || !email || !password || !confirm_password) {
    return res.status(400).json({
      status: false,
      message: "All parameter must required",
    });
  } else {
    // let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    // if (!regex.test(password)) {
    //   return res.status(400).json({
    //     status: false,
    //     message: "Password must required more things",
    //   });
    // }
    if (password != confirm_password) {
      return res.status(400).json({
        status: false,
        message: "Wrong Password confirm",
      });
    }
  }

  return next();
};

module.exports = { checkRegister };
