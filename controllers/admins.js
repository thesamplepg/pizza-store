const crypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const Admin = require('../models/Admin');

exports.signIn = async(req, res) => {

    const { name, password } = req.body;

    const admin = await Admin.findOne({name: name.toLowerCase()});

    if(admin && crypt.compareSync(password, admin.password)) {
        
        const jwtData = {
            name: admin.name.toLowerCase(),
            password: admin.password
        }

        jwt.sign(jwtData, require('../configs/keys').jwt, (err, token) => {

            if(err) return console.log(err);

            req.session.token = token;

            res.status(200).json({
                success: true
            });

        });

    } else {

        res.status(404).json({success: false, error: 'Wrong name or password'});

    }

}

exports.verify = (req, res) => {

    if(req.session.token) {

        jwt.verify(req.session.token, require('../configs/keys').jwt, async(err, data) => {

            if(err) return console.log(err);

            const admin = await Admin.findOne({name: data.name});

            if(admin) {

                res.status(200).json({success: true});

            } else {

                res.status(401).json({success: false});

            }

        });

    } else {

        res.status(401).json({success: false});

    }

}

exports.getAdmins = async(req, res) => {

    try {

        const admins = await Admin.find({});

        res.status(200).json({success: true, admins});

    } catch (error) {

        console.log(error);

        res.status(500).json({success: false});

    }

}

exports.createAdmin = async(req, res) => {

    const { name, password } = req.body;

    const isExist = await Admin.findOne({ name: name.toLowerCase() });

    if(!isExist) {
        const salt = crypt.genSaltSync(10);
        const hash = crypt.hashSync(password, salt);
        
        new Admin({name: name.toLowerCase(), password: hash}).save()
            .then(admin => {
                res.status(200).json({success: true, admin});
            })
            .catch(err => {
                if(err.ValidationError) {
                    res.status(400).json({
                        success: false,
                        validationFails: Object.keys(err.errors)
                    });
                }
            });
    } else {
        res.json({success: false, error: 'Already exists'});
    }
    
}

exports.deleteAdmin = (req, res) => {

    if(req.query.id && ObjectId.isValid(req.query.id)) {

        Admin.findByIdAndDelete({_id: ObjectId(req.query.id)})
            .then(deletedAdmin => {
                
                if(deletedAdmin) {

                    res.status(200).json({success: true, deletedAdmin});

                } else {

                    res.status(404).json({success: false, error: 'Admin not found'});

                }

            })
            .catch(err => {
                console.log(err);

                res.status(500).json({success: false});
            });

    } else {

        res.status(400).json({success: false, error: 'Wrong admins`s id'});

    }

}