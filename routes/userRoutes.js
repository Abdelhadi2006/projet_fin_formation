const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const User = require('../models/User');

// mazelt mafhamet the upload thing, mazal madert research kbira 3liha so i didnt figure the error out

router.patch('/upload-photo', upload.single('photo'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const photoPath = `/uploads/profiles/${req.file.filename}`;
    
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { photo: photoPath },
      { new: true }
    );

    res.json({ 
      photo: photoPath, 
      filename: req.file.filename, 
      message: 'Photo updated successfully' 
    });

  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ 
      error: 'Upload failed',
      details: err.message 
    });
  }
});

module.exports = router;