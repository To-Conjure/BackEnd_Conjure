const jwt = require("jsonwebtoken");
const Users = require("./model/userModel");
require("dotenv").config();


const authenticate = async (req, res, next) => {
    //bearer token
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).send("Token not found, please login.");
    }
    //handler verifying
    const { username } = await jwt.verify(
      token,
      process.env.REACT_APP_AUTH_KEY,
      (err, decoded) => {
        if (err) {
          throw Error("Failed to authenticate token");
        }
        return decoded;
      }
    );
  
    const user = await Users.getUserByUsername(username);
  
    if (!user) return res.status(404).send("No user found.");

    req.id = user.id;
    console.log(user, "in auth.js");
    next(); //valid input
  };
  
  module.exports = authenticate;