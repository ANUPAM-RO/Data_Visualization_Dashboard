const express = require('express')
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routes/DashboardRoute")


app.get("/", (req, res) => {
  res.send("hello world")
});

mongoose.connect("mongodb://localhost:27017/dashboard",{
    useNewUrlParser: true,
    useUnifiedTopology:true,

}, (err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("Mongodb connected Sucessfully");
    }
});
app.use(express.json())
app.use("/backend", userRouter);

app.listen(5000)