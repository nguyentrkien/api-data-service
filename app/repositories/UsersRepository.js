const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

class UserRepository {
  login = async function ({ email, password }) {
    const exitUser = await User.findOne({ email }).exec();
    if (exitUser) {
      // Không được mã hóa ngược mật khẩu
      const isPassword = bcrypt.compareSync(password, exitUser.password);
      if (!!isPassword) {
        const accessToken = jwt.sign(
          {
            data: exitUser,
          },
          "secret",
          { expiresIn: "365day" }
        );

        return {
          // chú ý khi phân rã object, để tránh có nhiều thành phần ta dùng toObject()
          ...exitUser._doc,
          password: "not show",
          accessToken
        };
      } else {
        throw new Error("Password is wrong");
      }
    } else {
      throw new Error("Email is not exist");
    }
  };
  // validate already
  register = async function ({ email, password, name }) {
    const dashboards =  [
      {name: 'overview', type: 'overview', asset: 'edge', id: 'overview'},
      {name: 'add', type: 'add', asset: 'edge', id: 'add'},
    ]
    const hash = await bcrypt.hash(password, 10);
    const exitUser = await User.findOne({ email }).exec();
    if (!exitUser) {
      let newUser = await User.create({
        email,
        name,
        dashboards,
        password: hash,
      });
      return newUser;
    } else {
      throw new Error("Email already registered");
    }
  };
}

module.exports = new UserRepository();
