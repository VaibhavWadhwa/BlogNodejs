const food = require('../utility/food');

const getFoodDetailsController = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            details : food
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
        const fooddetail = food.find(obj => obj.id.toString() === id.toString());
        if(fooddetail){
            res.status(200).json({
                message : "success",
                food : fooddetail
            })
        }else{
            res.status(401).json({
                message : "failed",
                food : {}
            })
        }
    }else{
        res.status(401).json({
            message : "failed",
            food : {}
        })
    }
}

module.exports = {getFoodDetailsController,getFoodDetailsByIdController};