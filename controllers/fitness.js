const Fitness = require('../model/fitness');

const getFitnessDetailsController = (req,res) =>{
    try{
        Fitness.find({}).then(data => {
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

const getFitnessDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
        Fitness.findOne({id}).then(data =>{
            if(data){
                res.status(200).json({
                    message : "success",
                    fitness : data
                })
            }else{
                res.status(401).json({
                    message : "failed",
                    fitness : {}
                })
            }
        }).catch(err =>{
            res.status(401).json({
                message : "failed",
                fitness : {}
            })
        })
      
    }else{
        res.status(401).json({
            message : "failed",
            fitness : {}
        })
    }
}

module.exports = {getFitnessDetailsController,getFitnessDetailsByIdController};