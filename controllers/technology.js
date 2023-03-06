const technology = require('../utility/technology');

const getTechnologyDetailsController = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            details : technology
        })
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
        const technologydetail = technology.find(obj => obj.id.toString() === id.toString());
        if(technologydetail){
            res.status(200).json({
                message : "success",
                technology : technologydetail
            })
        }else{
            res.status(401).json({
                message : "failed",
                technology : {}
            })
        }
    }else{
        res.status(401).json({
            message : "failed",
            technology : {}
        })
    }
}

module.exports = {getTechnologyDetailsController,getTechnologyDetailsByIdController};