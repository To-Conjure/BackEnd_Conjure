const Users = require("../model/userModel");
const bcrypt = require('bcrypt');
const salt = 10;

const getSingleUser = async (req, res) => {
  const id = req.params.id;
  const oneUser = await Users.getSingleUserFromDB(id);
  // const oneUserInfo = await Users.getSingleUsersInfoFromDB(id);
  return oneUser ?
  // && oneUserInfo
    res.status(200).send({
      oneUser: oneUser,
      // oneUserInfo: oneUserInfo,
    })
    : res.status(404).send("User not found");
};

const getSingleUserInfo = async (req, res) => {
  const id = req.params.id;
  const oneUserInfo = await Users.getSingleUsersInfoFromDB(id);
  return oneUserInfo
    ? res.status(200).send(oneUserInfo)
    : res.status(404).send("There is no such user info");
};

const getAllUsersInfo = async (req, res) => {
  const usersInfo = await Users.getAllUsersInfoFromDB();
  return usersInfo ? res.status(200).send(usersInfo) : res.status(404).send("User not found");
};

const getAllUsers = async (req, res) => {
  const users = await Users.getAllUsersFromDB();
  return users ? res.status(200).send(users) : res.status(404).send("User not found");
};

const registerUser = async (req, res) => {
  const {username, email, password} = req.body 
  const hashedPassword = bcrypt.hashSync(password, salt)
  try{
    const createdUser = await Users.registerUserToDB(username, email, hashedPassword)
    return res.status(200).send(createdUser)
  }catch(e){
    res.status(400).send(e)
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  getSingleUserInfo,
  getAllUsersInfo,
  registerUser,
};
