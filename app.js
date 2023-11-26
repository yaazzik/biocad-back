const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const getTools = require("./src/requests/get/getTools/getTools");
const createTool = require("./src/requests/post/createTool/createTool");
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());


app.post('/createTool', createTool)

app.get('/getTools', getTools)

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}.`)
})
