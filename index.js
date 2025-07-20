const express = require("express");
const mongoose = require("mongoose");
const Users = require("./models/Users");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middlewares/authmidddleware");

const app = express();
app.use(express.json());
app.use(cors({origin:'http://localhost:5173',}),);


mongoose.connect("mongodb://localhost:27017/Gym-Web-app", { 
  serverSelectionTimeoutMS: 5000 
}).then(() => {
  app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
  });
}).catch(err => {
  console.error(err);
});


app.get('/SignUp', async (req, res) => {
  try {
    const users = await Users.find();
    res.json({ data: users, message: "All users" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post('/SignUp', async (req, res) => {
  try {
    const {familyName,surname,gender,email,password} = req.body;
    
    const isEmailExisit = await Users.findOne({email:email})

    if (isEmailExisit){
    return res.status(409).json({ exists: true, message: "Email already exists" });
  }


    const hashedPass = await bcrypt.hash(password, 12);

    const new_user = new Users({
    familyName,
    surname,
    gender,
    email,
    password: hashedPass
    });

    await new_user.save();

    new_user.password = undefined;
    res.json({ new_user, message: "User created" });
    res.json({ exists: false });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/LogIn", authMiddleware, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.json({ message: "Wrong information" });
    }

    const token = jwt.sign({ email: user.email, gender: user.gender }, "blame", { expiresIn: "60d" });

    res.json({
      message: "Logged in successfully",
      token,
      gender: user.gender
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});