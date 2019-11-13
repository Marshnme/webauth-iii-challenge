const router = require('express').Router();
const model = require('../data/modelHelpers/helper');
const bcrypt = require('bcryptjs');


router.post('/', (req,res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash
    
    model.add(user)
    .then(newReg => {
        res.status(200).json(newReg)
    })
    .catch(err =>{
        res.status(400).json({message:'couldnt reg sorry'})
    })
});




module.exports=router