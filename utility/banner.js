const CONSTANTS = require('../config/constant');

 const banner =  [
{
id : 1,
url : `http://${process.env.IP}:${CONSTANTS.PORT}/images/TropicalImage.jpg`,
type : "Travel",
date : "Janary 24, 2023",
title : "Himachal Pradesh"
},
{
id : 2,
url : `http://localhost:${CONSTANTS.PORT}/images/TropicalImage2.jpg`,
// type : "Travel",
// date : "Janary 24, 2023",
// title : "Manali"
},
{
id : 3,
url : `http://localhost:${CONSTANTS.PORT}/images/TropicalImage3.jpg`,
// type : "Travel",
// date : "Janary 24",
// title : "Colorado"
}]

module.exports = banner;
