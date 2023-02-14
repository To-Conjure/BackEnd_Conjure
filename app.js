const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3010

const userRouter = require("./route/userRoute.js")
const userDataRouter = require("./route/userDataRoute.js")

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/usersData", userDataRouter);




app.listen(PORT, function(){
  console.log(`Server listening on http://localhost:${PORT}`);
})