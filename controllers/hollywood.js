const hollywood = require('../utility/hollywood');

const getHollywoodDetailsController = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            details : hollywood
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
        const hollywooddetail = hollywood.find(obj => obj.id.toString() === id.toString());
        if(hollywooddetail){
            res.status(200).json({
                message : "success",
                hollywood : hollywooddetail
            })
        }else{
            res.status(401).json({
                message : "failed",
                hollywood : {}
            })
        }
    }else{
        res.status(401).json({
            message : "failed",
            hollywood : {}
        })
    }
}

module.exports = {getHollywoodDetailsController,getHollywoodDetailsByIdController};