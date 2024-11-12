const express = require('express');
const bodyparser = require('body-parser');
const Image = require('../models/image');
const image = require('../models/image');
const router = express.Router();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));

// Get all image
router.get('/image', async (req, res) => {
    try {
        const image = await Image.find().sort({ date: -1 });
        res.status(200).json(image);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Add a new note
router.post('/image', async (req, res) => {
    const image = new Image({
        image: req.body.image,
        description: req.body.description,
    });

    try {
        const newimage = await image.save();
        res.status(201).json(newimage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a note
router.put('/image/:id', async (req, res) => {
    try {
        const updatedimage = await Image.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedimage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Delete a note
router.delete('/image/:id', async (req, res) => {
    try {
        await Image.findByIdAndDelete(req.params.id);
        res.json({ message: 'Image deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;