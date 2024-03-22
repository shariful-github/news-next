require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('news next server is running');
})

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9jtha6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const db = client.db("news-next");
        const categoriesCollection = db.collection("categories");
        const newsCollection = db.collection("news");
        // get all news
        app.get("/all-news", async (req, res) => {
            const allNews = await newsCollection.find().toArray();
            res.send({ status: true, message: "success", data: allNews });
        });

        // get specific news
        app.get("/news/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: id };
            const news = await newsCollection.findOne(query);
            res.send({ news });
        });

        // get all categories
        app.get("/categories", async (req, res) => {
            const categories = await categoriesCollection.find().toArray();
            res.send({ status: true, message: "success", data: categories });
        });

        // get specific categories
        app.get("/news", async (req, res) => {
            const name = req.query.category;
            let newses = [];
            if (name == "all-news") {
                newses = await newsCollection.find().toArray();
                return res.send({ status: true, message: "success", data: newses });
            }
            newses = await newsCollection
                .find({ category: { $regex: name, $options: "i" } })
                .toArray();
            res.send({ status: true, message: "success", data: newses });
        });
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    }
};

run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Welcome to News Next!");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});