const Users = require("../model/userModel");

const getSingleUser = async (req, res) => {
  const id = req.params.id;
  const oneUser = await Users.getSingleUserFromDB(id);
  return oneUser
    ? res.status(200).send(oneUser)
    : res.status(404).send("User not found");
};

const getSingleUserInfo = async (req, res) => {
  const id = req.params.id;
  const oneUserInfo = await Users.getSingleUsersInfoFromDB(id);
  return oneUserInfo
    ? res.status(200).send(oneUserInfo)
    : res.status(404).send("There is no such user info");
};

const getAllUsers = async (req, res) => {
  const allUsers = await Users.getAllUsersFromDB();
  return allUsers
    ? res.status(200).send(allUsers)
    : res.status(404).send("Error");
};

const getAllUsersInfo = async (req, res) => {
  const allUsersInfo = await Users.getAllUsersInfoFromDB();
  return allUsersInfo
    ? res.status(200).send(allUsersInfo)
    : res.status(404).send("Error");
};

const registerUser = async (req, res) => {
  const {username, email, password} = req.body
      try{
        const signUp = await Users.registerUserToDB(username,email,password);
        return res.status(200).send(signUp)
      }catch(e){
        return res.status(400).send(e)
      }
};



module.exports = {
  getAllUsers,
  getSingleUser,
  getSingleUserInfo,
  getAllUsersInfo,
  registerUser,
};
