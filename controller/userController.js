const Users = require("../model/userModel");

const allUsers = async (req, res) => {
    const users = await Users.getAllUsersFromDB();
    return users ? res.status(200).send(users) : res.status(404).send("Error")
  };

  
module.exports = {
    allUsers,
  };