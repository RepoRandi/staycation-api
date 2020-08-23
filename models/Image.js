const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Image", imageSchema);
