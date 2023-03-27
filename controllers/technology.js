const Technology = require('../model/technology');

const getTechnologyDetailsController = (req,res) =>{
    try{
        Technology.find({}).then(data => {
            res.status(200).json({
                message : "success",
                details : data
            })
        });
     
    }catch(err){
        res.status(500).json({
            message : err,
            details : []
        })
    }
};

const getTechnologyDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
Technology.findOne({id}).then(data => {
    if(data){
        res.status(200).json({
            message : "success",
            technology : data
        })
    }else{
        res.status(401).json({
            message : "failed",
            technology : {}
        })
    }
});   
    }else{
        res.status(401).json({
            message : "failed",
            technology : {}
        })
    }
}

module.exports = {getTechnologyDetailsController,getTechnologyDetailsByIdController};