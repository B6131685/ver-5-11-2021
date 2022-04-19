const expressFunction = require('express');
const mongoose = require('mongoose');
var expressApp = expressFunction();

const router = expressFunction.Router();
const Schema = require('mongoose').Schema;


const userSchema = Schema({
    username: String,
    password: String,
    role: String
}, {
    collection: 'users'
});

let User
try {
    User = mongoose.model('users')
}catch(error){
    User = mongoose.model('users',userSchema);
}


const subSchema = Schema({
        id_product: String,
        quantity: {typr:Number, default: 0}
})

const cartSchema = Schema({
    user: mongoose.ObjectId,
    product: [subSchema]
}, {
    collection: 'carts'
});

let Cart
try {
    Cart = mongoose.model('carts')
}catch(error){
    Cart = mongoose.model('carts',cartSchema);
}

router.route('/additemtocart').post(async (req, res)=>{
    try {

        console.log(req.body);
        const exist = await User.findOne({name:req.body.idUser})
        if(!exist){
            new Error('ไม่พบผู้ใช้งาน')
        }

        const cart = await Cart.findOne({name:req.body.idUser})
        if(!cart){
            new Error('ไม่พบตะกร้าผู้ใช้')
        }

        res.status(200).json({msg: cart});

    } catch (error) {
        res.status(400).json({msg: error});
    }
})

module.exports = router

