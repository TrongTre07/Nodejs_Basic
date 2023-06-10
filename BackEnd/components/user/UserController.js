const userService = require("./UserService");
const mailer = require("nodemailer");

const transporter = mailer.createTransport({
  pool: true,
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: "trongtruth2003@gmail.com",
    pass: "ahjrqhkmzmnulkhn",
  },
});

const login = async (email, password) => {
  try {
    return await userService.login(email, password);
  } catch (error) {
    throw error;
  }
};

const register = async (email, password, name) => {
  try {
    return await userService.register(email, password, name);
  } catch (error) {
    console.log("User controller register error: ", error);
  }
};

const sendMail = async (to, subject, content) => {
  try {
    const mailOptions = {
      from: "Trong Dep Trai <trongtruth2003@gmail.com",
      to: to,
      subject: subject,
      html: content,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.log("Send mail error", error);
  }
  return false;
};

module.exports = { login, register, sendMail };
