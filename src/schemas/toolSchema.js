const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
  name: String,
  img: String,
  isAvailable: Boolean,
  alarm: String
});

const Tool = mongoose.model('Tool', toolSchema);

module.exports.toolSchema = toolSchema;
module.exports.Tool = Tool;
