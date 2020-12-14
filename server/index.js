const express = require('express')
const morgan = require('morgan')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID

const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

const MONGO_URL = 'mongodb://localhost:27017'

const mongoClient = new MongoClient(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

let db

const app = express()

app.use(morgan('combined'))

app.use(express.static('static'))

app.get('/api/country', async (req, res) => {
    try {
        const database = db.db("winemag");
        const collection = database.collection("wine");
        const cursor = collection.distinct("country")
        const results = await cursor
        res.status(200).type('application/json').json(results)
        console.log(results)
    } catch (err) {
        console.log(err)
    }
})

app.get('/api/country/:country', async (req, res) => {
    const country = req.params.country
    const offset = parseInt(req.query.offset) || 0
    try {
        const database = db.db("winemag");
        const collection = database.collection("wine");
        const cursor = collection.find({
            country: {
                $regex: country,
                $options: "i"
            }
        }, {
            title: 1,
            price: 1
        }).limit(10).skip(offset).sort({
            title: 1
        }).toArray()
        const results = await cursor
        console.log(results)
        res.status(200).type('application/json').json(results)
    } catch (err) {
        console.log(err)
    }
})

app.get('/api/wine/:id',async (req,res)=>{
    let id  = req.params.id
    console.log(id)
    try{
        const database = db.db("winemag");
        const collection = database.collection("wine");
        const result = await collection.findOne({
            _id: ObjectId(id)
        })
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
    }

})

// check mongoconnection before starting app
mongoClient.connect(function (err, database) {
    if (err) throw err;

    db = database;

    // Start the application after the database connection is ready
    app.listen(PORT, () => {
        console.log(`APP started on ${PORT} on ${new Date()}`)
    })

});
