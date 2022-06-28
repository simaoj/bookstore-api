const UserService = require("../services/UserService");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = class UserController {

  static async registerUser(req, res) {

    try {
      const { first_name, last_name, email, password } = req.body;

      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
      email = email.toLowerCase()
      const oldUser = await User.findOne({ email });

      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }

      const dataUser = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
      }
      const user = await UserService.createUser(dataUser);
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "2h" }
      );
      user.token = token;

      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const user = await User.findOne({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          { expiresIn: "2h" }
        );

        user.token = token;

        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  }

}