const mongoose = require('mongoose');
const {Tool} = require("../../../schemas/toolSchema");


const createTool = async (req, res) => {
  const tool = new Tool( {
    name: req.body.name,
    img: req.body.img,
    isAvailable: req.body.isAvailable,
    alarm: req.body.alarm
  } );

  await mongoose.connect(process.env.MONGO_URL)
    .then(async () => {
      await tool.save()
        .then(() => {
          console.log('Tool created!');
        })
        .catch((err) => {
          if (err) {
            console.error(err)
            res.sendStatus(500)
          }
        })
      res.sendStatus(201);
    })
    .catch((err) => {
      if (err) {
        console.log(err)
        return res.sendStatus(500)
      }
    })
}

module.exports = createTool;
