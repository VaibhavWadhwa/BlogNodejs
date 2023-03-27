const Places = require('../model/places');

const getPlacesDetailsController = (req,res) =>{
    try{
        Places.find({}).then(data =>{
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

const getPlacesDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
       Places.findOne({id}).then(data =>{
        if(data){
            res.status(200).json({
                message : "success",
                places : data
            })
        }else{
            res.status(401).json({
                message : "failed",
                places : {}
            })
        }
       }).catch(err =>{
        res.status(401).json({
            message : "failed",
            places : {}
        })
       })
  
    }else{
        res.status(401).json({
            message : "failed",
            places : {}
        })
    }
}

module.exports = {getPlacesDetailsController,getPlacesDetailsByIdController};
