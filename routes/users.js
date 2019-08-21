const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = require('../models/User');
const middleware = require('../middleware');

//Validates and sends back user information
//Private
router.get('/', middleware, async (req, res) => {
    try {
        //retrieve user information but dont bring the password
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

//login user and get a token
//Public
router.post('/login',
    [
        //checks to make sure post is valid
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'password is required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            //return error messages if errors occured
            return res.status(400).json({ errors: errors.array() });
        }
        //pull out data from request.body
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            //checks to see if input is valid
            if (!user) {
                res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
            }
            //check to see if right password
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
            }
            //return jsonwebtoken to immediatly log in and for authorized accessing
            const payload = {
                user: {
                    id: user.id
                }
            }
            //send the web token
            jwt.sign(payload,
                keys.jwtSecret,
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                });

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });


//POST Register a new user
//public

router.post('/register',
    [
        //checks to make sure post is valid
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password that has six or more characters').isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            //return error messages if errors occured
            return res.status(400).json({ errors: errors.array() });
        }
        //pull out data from request.body
        const { name, email, password } = req.body;
        try {
            //see if user exists
            let user = await User.findOne({ email });
            if (user) {
                res.status(400).json({ errors: [{ msg: 'user already exists' }] })
            }
            //create user
            user = new User({
                name,
                email,
                password
            });
            //Encrypt password
            const salt = await bcrypt.genSalt();
            user.password = await bcrypt.hash(password, salt);
            await user.save();

            //return jsonwebtoken to immediatly log in and for authorized accessing
            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(payload,
                keys.jwtSecret,
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                });

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });

module.exports = router;