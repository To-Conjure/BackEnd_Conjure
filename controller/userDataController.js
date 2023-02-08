const UserData = require("../model/userDataModel.js");

const getAllUsersData = async (req, res) => {
    const allUsersData = await UserData.getAllUsersDataFromDB();
    return allUsersData ? res.status(200).send(allUsersData) : res.status(404).send("Error")
  };

const getSingleUserData = async (req, res) => { 
    const id = req.params.id
    const singleUserData = await UserData.getSingleUserDataFromDB(id);
    return singleUserData ? res.status(200).send(singleUserData) : res.status(404).send("Error")
};


  
module.exports = {
    getAllUsersData,
    getSingleUserData,
};