const { ROLES } = require("../AppConstant/AppConstants");
const userModel = require("./UserModel");
const bcrypt = require("bcryptjs");

const login = async (email, password) => {
  try {
    // const user = data.find((item) => item.email == email);
    // if (user && user.password == password) {
    //   return user;
    // }
    let user = await userModel.findOne({ email });
    if (user) {
      const ismatch = bcrypt.compareSync(password, user.password);
      return ismatch ? user : false;
    }
  } catch (error) {
    console.log("User service login got error: ", error);
    throw error;
  }
  return false;
};

const register = async (email, password, name) => {
  try {
    let user = await userModel.findOne({ email: email });
    if (!user) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      user =  await userModel.create({ email: email, password: hash, name: name, role: ROLES.USER });
      return user;
    }
  } catch (error) {
    console.log("User service login err: ", error);
  }
  return false;
};
module.exports = { login, register };

var data = [
  { _id: 1, email: "abs@gmail.com", password: "1", name: "An" },
  { _id: 2, email: "abd", password: "1", name: "Ann" },
  { _id: 3, email: "abc", password: "1", name: "Annn" },
];
