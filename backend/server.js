const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())

app.use(express.json())

// localhost:{port}/api/v1/xxxxx
app.use('/api/v1/', require('./api'))

const PORT = 8081
app.listen(PORT, () => {
    console.log('Server Running...');
})



