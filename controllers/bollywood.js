const Bollywood = require('../model/bollywood');

const getBollywoodDetailsController = (req,res) =>{
    try{
    Bollywood.find({}).then((data) => {
        res.status(200).json({
            message : "success",
            details : data
        })
    }).catch(err =>{
        res.status(500).json({
            message : err,
            details : []
        })
    })
    }catch(err){
        res.status(500).json({
            message : err,
            details : []
        })
    }
};

const getBollywoodDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
       Bollywood.findOne({id}).then(data =>{
        if(data){
            res.status(200).json({
                message : "success",
                bollywood : data
            })
        }else{
            res.status(401).json({
                message : "failed",
                bollywood : {}
            })
        }
       }).catch(err =>{
        res.status(401).json({
            message : "failed",
            bollywood : {}
        })
       })
    
    }else{
        res.status(401).json({
            message : "failed",
            bollywood : {}
        })
    }
}

module.exports = {getBollywoodDetailsController,getBollywoodDetailsByIdController};