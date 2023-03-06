const places = require('../utility/places');

const getPlacesDetailsController = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            details : places
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
        const placesdetail = places.find(obj => obj.id.toString() === id.toString());
        if(placesdetail){
            res.status(200).json({
                message : "success",
                places : placesdetail
            })
        }else{
            res.status(401).json({
                message : "failed",
                places : {}
            })
        }
    }else{
        res.status(401).json({
            message : "failed",
            places : {}
        })
    }
}

module.exports = {getPlacesDetailsController,getPlacesDetailsByIdController};