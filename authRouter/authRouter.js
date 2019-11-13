const router = require('express').Router();
const model = require('../data/modelHelpers/helper');
const jwt = require('jsonwebtoken');


router.get('/', (req,res) => {
    const token = req.headers.authorization;

    if(token){
        const secret = process.env.JWT_SECRET || 'hehe cant see me';
        jwt.verify(token,secret,(err,decodedToken)=>{
            if(err){
                res.status(401).json({message:'invalid creds'})
            }else{
                model.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(400).json({message:'YOU GOTTA LOG IN PUNK'})
    })
            }
        })
    }else{
        res.json({message:'no creds'})
    }
    
});




module.exports=router