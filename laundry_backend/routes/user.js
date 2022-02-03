
const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const jwt = require("jsonwebtoken");
const User = require('../models/users');
const router=express.Router();
const bcrypt = require('bcrypt');
app.use(bodyParser());
router.get('/', (req,res) => {
    res.send("Hello")
     })
router.post('/login', async function(req,res){
    try{
        const {string, password} = req.body;
        console.log(string);
        console.log(password);
        const isEmail = string.include("@");
        const query=isEmail ? {"email" : string  } : {"phone" : parseInt(string)};
        const user = await User.findOne(query);
            //console.log(user);
            if(!user){
                return res.json({
                    status: "failed",
                    message: "User not registered"
                });
            }
            const match = await bcrypt.compare(password, user.password);
            if(!match){
                return res.json({
                    status:'failed',
                    message:'invalid credentials'
                });
            }
            const str=String(user._id);
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: str
            }, 'Laundry-Secret-123');
            res.json({
                status:'success',
                token
            });
    } catch(e){
        res.json({
            status:'failed',
            message: e.message
        });
    }    
})
router.post('/register', async function(req,res){
    try{
        const {name, email, phone, password, state, district, address, pincode} = req.body;
        const hash=await bcrypt.hash(password,10);
        await User.create({name, email, phone, password : hash, state, district, address, pincode});
        res.json({
            status:'success',
            message:'sign up success'
        });
    } catch(e){
        res.json({
            status:'failed',
            message: e.message
        });
    }
});



module.exports = router;