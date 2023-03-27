const Food = require('../model/food');

const getFoodDetailsController = (req,res) =>{
    try{
        Food.find({}).then(data =>{
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

const getFoodDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
        Food.findOne({id}).then(data =>{
            if(data){
                res.status(200).json({
                    message : "success",
                    food : data
                })
            }else{
                res.status(401).json({
                    message : "failed",
                    food : {}
                })
            }
        }).catch(err =>{
            res.status(401).json({
                message : "failed",
                food : {}
            })
        })
    
    }else{
        res.status(401).json({
            message : "failed",
            food : {}
        })
    }
}

module.exports = {getFoodDetailsController,getFoodDetailsByIdController};