const express = require('express');
// const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path')

const CONSTANTS = require('./config/constant');
const bannerRouter = require('./routes/banner');
const bollywoodRouter = require('./routes/bollywood');
const fitnessRouter = require('./routes/fitness');
const foodRouter = require('./routes/food');
const hollywoodRouter = require('./routes/hollywood');
const placesRouter = require('./routes/places');
const technologyRouter = require('./routes/technology');


const app = express();
app.use(cors())



// app.use(bodyParser.urlencoded({extended : false}));
// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use("/banner",bannerRouter);
app.use("/bollywood",bollywoodRouter);
app.use("/fitness",fitnessRouter);
app.use("/food",foodRouter);
app.use("/hollywood",hollywoodRouter);
app.use("/Travel",placesRouter);
app.use("/technology",technologyRouter);


app.listen(CONSTANTS.PORT, ()=>{
    console.log(`Server is listening at http://localhost:${CONSTANTS.PORT}`)
})
