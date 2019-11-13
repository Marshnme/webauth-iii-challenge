const router = require('express').Router();
const model = require('../data/modelHelpers/helper');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', (req,res) => {
    let {username,password} = req.body;

    model.findBy({username})
    .first()
    .then(user =>{
        console.log(user)
        if(user && bcrypt.compareSync(password,user.password)){
            const token = getJwtToken(user);
            res.status(200).json({message:`welcome ${user.username}`,
        token })
        }else{
            res.status(401).json({message:'invalid creds'})
        }
        
    })
    .catch(err =>{
        res.status(500).json({ message: 'login err' })
    })
});


function getJwtToken(name){
    const payload = {
        id: name.id,
        name: name.username,
        department: name.department
    };
    const secret = process.env.JWT_SECRET || 'hehe cant see me'
    const options = {
        expiresIn:'1h'
    };

    return jwt.sign(payload,secret,options)
};




module.exports=router