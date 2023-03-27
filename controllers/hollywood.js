const Hollywood = require('../model/hollywood');

const getHollywoodDetailsController = (req,res) =>{
    try{
        Hollywood.find({}).then(data =>{
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

const getHollywoodDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
        Hollywood.findOne({id}).then(data =>{
            if(data){
                res.status(200).json({
                    message : "success",
                    hollywood : data
                })
            }else{
                res.status(401).json({
                    message : "failed",
                    hollywood : {}
                })
            }
        }).catch(err =>{
            res.status(401).json({
                message : "failed",
                hollywood : {}
            })
        })
      
    }else{
        res.status(401).json({
            message : "failed",
            hollywood : {}
        })
    }
}

module.exports = {getHollywoodDetailsController,getHollywoodDetailsByIdController};