const UsersData = require("../model/userDataModel");

const getAllUsersData = async (req, res) => {
    const allUsersData = await Users.getAllUsersDataFromDB();
    return allUsersData ? res.status(200).send(allUsersData) : res.status(404).send("Error")
  };

const getSingleUsersData = async (req, res) => { 
    const id = req.params.id
    const singleUserData = await Users.getSingleUserDataFromDB(id);
    return singleUserData ? res.status(200).send(singleUserData) : res.status(404).send("Error")
};


  
module.exports = {
    getAllUsersData,
    getSingleUsersData,
};