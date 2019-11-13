const router = require('express').Router();
const model = require('../data/modelHelpers/helper');

router.get('/', (req,res) => {
    model.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(400).json({message:'YOU GOTTA LOG IN PUNK'})
    })
});




module.exports=router