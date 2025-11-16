const express = require('express')
const cors = require('cors')
const db = require('./models')
const app = express()
const router = require('./routes/newsRouter')
var corOptions = {
    origin : 'https://localhost:8081'
}

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/api/news',router)

const PORT = process.env.PORT || 8082

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
