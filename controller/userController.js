const Users = require("../model/userModel");

const getAllUsers = async (req, res) => {
    const allUsers = await Users.getAllUsersFromDB();
    return allUsers ? res.status(200).send(allUsers) : res.status(404).send("Error")
  };

const getSingleUser = async (req, res) => { 
    const id = req.params.id
    const oneUser = await Users.getSingleUserFromDB(id);
    return oneUser ? res.status(200).send(oneUser) : res.status(404).send("Error")
};


  
module.exports = {
    getAllUsers,
    getSingleUser,
};