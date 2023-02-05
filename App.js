const express = require('express');
const { default: mongoose } = require("mongoose");
const app = express();
require('dotenv').config()
const cors = require("cors");
const TodoModel = require('./models/TodoSchema');
const router = require('./routes');

const PORT = process.env.PORT || 5000;

// Allow CORS Origin
app.use(cors())
// Allow Body Parsel
app.use(express.json())
// Router
app.use(router)

const DBURI = "mongodb+srv://admin:admin@cluster0.rbv3k1z.mongodb.net/crudapp";

mongoose
  .connect(DBURI)
  .then((res) => console.log("Mongo DB Connected"))
  .catch((err) => console.log("DB ERROR", err));




app.listen(PORT, () =>
console.log(`server running on http://localhost:${PORT}`)
);