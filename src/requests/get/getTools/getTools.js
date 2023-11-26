const mongoose = require('mongoose');
const {Tool} = require("../../../schemas/toolSchema");

const getTools = async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL)
    .then(async () => {
      await Tool.find({}).then((tool) => {
        console.log(`Tool: ${tool}`)
        res.status(201).json({tool})
      })
    })
    .catch((err) => {
      console.log(err)
      return res.sendStatus(500)
    })
}

module.exports = getTools;
