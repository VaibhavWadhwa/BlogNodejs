const Banner = require('../model/banner');

const getBannerDetailsController = (req,res) =>{
    try{
        Banner.find({}).then((data) => {
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

const getBannerDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
        Banner.findOne({id}).then(data =>{
            if(data){
                res.status(200).json({
                    message : "success",
                    banner : data
                })
            }else{
                res.status(401).json({
                    message : "failed",
                    banner : {}
                })
            }
        }).catch(err =>{
            res.status(401).json({
                message : "failed",
                banner : {}
            })
        })
    
    }else{
        res.status(401).json({
            message : "failed",
            banner : {}
        })
    }
}

module.exports = {getBannerDetailsController,getBannerDetailsByIdController};