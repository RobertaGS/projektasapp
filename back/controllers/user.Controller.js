const User = require('../models/User');

const asyncHandler = require('express-async-handler');

// @desc Register new user
// @route POST /api/user
// @access PUBLIC
const registerUser = asyncHandler(async (req, res)=>{
    const { name, email, password } = req.body;
    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please add all fields');
    }
    //check if user exists
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('User already exists');
    }
    // create user !!!
    const user = await User.create({
        name,
        email,
        password
    });
    if(User){
        res.status(201).json({
            _id: User.id,
            name: User.name,
            email: User.email,
            password: User.password
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});
// @desc Login a user
// @route POST /api/users/login
// @access PUBLIC
const loginUser = asyncHandler(async (req, res)=> {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    //tikrinamas pagal token user&& compare password
    if(user) {
        res.json(
            {
                _id: user.id,
                name: user.name,
                email: user.email,
//json token panaudojamas
            }
        )
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
});


module.exports = {registerUser, loginUser}