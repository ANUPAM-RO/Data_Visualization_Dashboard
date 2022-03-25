const Detail = require("../models/Detail");

//CREATE DATA

const Information =  async (req, res ) => {
       const newData = new Detail(req.body);
       const info = await newData.save();
       res.status(201).json(info)
   
}

//GET DATA

const ShowInformation = async (req, res) => {
       try {
       const userdetails = await Detail.findById(req.params.id);

              res.status(200).json(userdetails);
       } catch (err) {
              res.status(500).json(err);
       }
};
//GET ALL DATA

const ShowAllInformation = async(req,res)=>{
       try{
              const alluser = await Detail.find();
              res.status(200).json(alluser);
       }catch(error){
              res.status(500).json(error)
       }
       
}
module.exports = {
       Information,
       ShowInformation,
       ShowAllInformation
}