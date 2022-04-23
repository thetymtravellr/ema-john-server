const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 8080;

//middleware
app.use(express.json())
app.use(cors())

