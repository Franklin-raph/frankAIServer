const express = require('express');
require('dotenv').config();
const cors = require('cors')
const PORT = process.env.PORT || 5000;

const app = express();

// middlewares
app.use(express.json())
app.use(cors())

app.use('/openai', require('./routes/openAiRoutes'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})