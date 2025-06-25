const express = require('express')
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@am.ochad9p.mongodb.net/?retryWrites=true&w=majority&appName=AM`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const plantsCollection = client.db('plantsDB').collection('plants');
    const usersCollection = client.db('plantsDB').collection('users');


    app.post('/users', async (req, res) => {
      const userProfile = req.body;
      const result = await usersCollection.insertOne(userProfile);
      res.send(result)
    })



    app.get('/users', async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });



    app.get('/all-plants', async (req, res) => {
      const result = await plantsCollection.find().toArray();
      res.send(result);
    });


    app.get('/all-plants', async (req, res) => {
      try {
        const data = await MyModel.find().sort({ careLevel: 1 });
        res.json(data);
      }
      catch (err) {
        res.status(500).json({ error: 'Failed to Fetch Data' });
      }
    });



    app.get('/all-plants/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await plantsCollection.findOne(query);
      res.send(result)


    })



    app.post('/new-plants', async (req, res) => {
      const plant = {
        ...req.body,
        createdAt: new Date()
      };

      const result = await plantsCollection.insertOne(plant);
      res.send(result);

    });



    app.put('/update-plants/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updatePlants = {
        ...req.body,
        updatedAt: new Date()
      };

      const updateDoc = {
        $set: updatePlants
      };

      const result = await plantsCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });




    app.delete('/plants/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const result = await plantsCollection.deleteOne({ _id: new ObjectId(id) });
        res.send(result);
      } catch (error) {
        console.error('Error deleting plant:', error);
        res.status(500).send({ error: 'Internal server error' });
      }
    });



    app.get('/new-plants', async (req, res) => {
      const result = await plantsCollection.find().sort({ createdAt: -1 }).limit(6).toArray();
      res.send(result);
    });




    app.get('/new-plants/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await plantsCollection.findOne(query);
      res.send(result)
    })

    app.post('/new-plants', async (req, res) => {
      const newPlant = {
        ...req.body,
        createdAt: new Date()
      };

      const result = await plantsCollection.insertOne(newPlant);
      res.send(result)
    });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('taking care of plants is necessary!')
})

app.listen(port, () => {
  console.log(`Plants server is running on port ${port}`)
})
