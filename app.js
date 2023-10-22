const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

const port = 8000;


app.use(cors());
app.use(express.urlencoded({ extended: true }))//allow to access information coming from forms
app.use(bodyParser.json());
 
app.get('/', (req, res) => {
    console.log("Here")
    res.status(200).json({message:'HEllo World!'});
})


const userRouter = require('./userRoutes')
app.use('/users', userRouter);


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});