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

async function registerUser (req, res) {
  const {username, bio, password} = req.body 
  const hashedPassword = bcrypt.hashSync(password, 10)
  try{
    const createdUser = await UserModel.registerUserToDB(username, bio, hashedPassword)
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
