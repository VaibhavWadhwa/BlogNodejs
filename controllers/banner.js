const banner = require('../utility/banner');

const getBannerDetailsController = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            details : banner
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
        const bannerdetail = banner.find(obj => obj.id.toString() === id.toString());
        if(bannerdetail){
            res.status(200).json({
                message : "success",
                banner : bannerdetail
            })
        }else{
            res.status(401).json({
                message : "failed",
                banner : {}
            })
        }
    }else{
        res.status(401).json({
            message : "failed",
            banner : {}
        })
    }
}

module.exports = {getBannerDetailsController,getBannerDetailsByIdController};