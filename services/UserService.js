const User = require('../models/User.js');
const bcrypt = require('bcryptjs');


module.exports = class UserService {
  static async createUser(data) {
    try {
      const encryptedPassword = await bcrypt.hash(data.password, 10);

      const newUser = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: encryptedPassword,
      }
      const response = await new User(newUser).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }


}