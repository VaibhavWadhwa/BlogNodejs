const bollywood = require('../utility/bollywood');

const getBollywoodDetailsController = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            details : bollywood
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
        const bollywooddetail = bollywood.find(obj => obj.id.toString() === id.toString());
        if(bollywooddetail){
            res.status(200).json({
                message : "success",
                bollywood : bollywooddetail
            })
        }else{
            res.status(401).json({
                message : "failed",
                bollywood : {}
            })
        }
    }else{
        res.status(401).json({
            message : "failed",
            bollywood : {}
        })
    }
}

module.exports = {getBollywoodDetailsController,getBollywoodDetailsByIdController};