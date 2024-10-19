const { response } = require("express");
const user = require("../models/user.model")
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    console.log(req.body);

    return res.json(req.body);
}

const register = async (req, res) => {
    const { email } = req.body;
    const userCheck = await user.findOne({email})

    if (userCheck) {
        console.log("Girdiğiniz email kullanılmakta");
    }
    
    req.body.password = await bcrypt.hash(req.body.password, 10)
    
    try {
        const user1 = new user(req.body)
        await user1.save();
        return res.status(201).json({ 
            succes: true,
            data: response,
            message: "Kullanıcı başarıyla kaydedildi." 
        })
            
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    login,
    register
}