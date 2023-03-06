const fitness = require('../utility/fitness');

const getFitnessDetailsController = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            details : fitness
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
        const fitnessdetail = fitness.find(obj => obj.id.toString() === id.toString());
        if(fitnessdetail){
            res.status(200).json({
                message : "success",
                fitness : fitnessdetail
            })
        }else{
            res.status(401).json({
                message : "failed",
                fitness : {}
            })
        }
    }else{
        res.status(401).json({
            message : "failed",
            fitness : {}
        })
    }
}

module.exports = {getFitnessDetailsController,getFitnessDetailsByIdController};