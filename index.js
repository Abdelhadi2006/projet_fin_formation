require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Users = require("./models/User");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middlewares/auth");
const path = require('path');
const uploadRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));  // connecting the front end and the backend

         // connecting the DB

mongoose.connect(process.env.MONGODB_URI, { 
  serverSelectionTimeoutMS: 5000 
}).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
}).catch(err => {
  console.error("Database connection error:", err);
  process.exit(1);
});

app.use('/api/users', uploadRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


          // creating a new user (entity)
app.post('/signup', async (req, res) => {
  try {
    const { familyName, surname, gender, email, password } = req.body;
    
    if (!familyName || !surname || !gender || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await Users.findOne({ 
      email: email.toLowerCase().trim() 
    });
    
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const user = await Users.create({
      familyName,
      surname,
      gender,
      email: email.toLowerCase().trim(),
      password: await bcrypt.hash(password, 12)
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { 
      expiresIn: '60d' 
    });
    
    res.status(201).json({
      user: {
        email: user.email,
        gender: user.gender,
        familyName: user.familyName,
        surname: user.surname
      },
      token,
      message: "Account created successfully"
    });

  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ 
      error: "Server error",
      details: err.message 
    });
  }
});

        // searching if the user do exist to perform the log in

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email }).select('+password');

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '60d' });
    
    res.json({
      token,
      user: {
        familyName: user.familyName,
        surname: user.surname,
        email: user.email,
        gender: user.gender
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

      // allowing or not the user to access some pages

app.get('/signup', authMiddleware, async (req, res) => {
  const user = await Users.findById(req.user.id).select('-password');
  res.json(user);
});

    // allowing or not the user to access some pages

app.get('/login', authMiddleware, async (req, res) => {
  const user = await Users.findById(req.user.id).select('-password');
  res.json(user);
});