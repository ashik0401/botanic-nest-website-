const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

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
    await client.connect();

    const plantsCollection = client.db('plantsDB').collection('plants');
    const usersCollection = client.db('plantsDB').collection('users');

    app.post('/users', async (req, res) => {
      const userProfile = req.body;
      const result = await usersCollection.insertOne(userProfile);
      res.send(result);
    });

    app.get('/users', async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    app.get('/all-plants', async (req, res) => {
      const result = await plantsCollection.find().toArray();
      res.send(result);
    });

    app.get('/all-plants/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await plantsCollection.findOne(query);
      res.send(result);
    });

    app.post('/new-plants', async (req, res) => {
      const newPlant = {
        ...req.body,
        createdAt: new Date()
      };
      const result = await plantsCollection.insertOne(newPlant);
      res.send(result);
    });

    app.get('/new-plants', async (req, res) => {
      const result = await plantsCollection.find().sort({ createdAt: -1 }).limit(6).toArray();
      res.send(result);
    });

    app.get('/new-plants/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await plantsCollection.findOne(query);
      res.send(result);
    });

    app.put('/update-plants/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          ...req.body,
          updatedAt: new Date()
        }
      };
      const result = await plantsCollection.updateOne(filter, updateDoc, { upsert: true });
      res.send(result);
    });

    app.delete('/plants/:id', async (req, res) => {
      const id = req.params.id;
      const result = await plantsCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    app.get('/plants-count', async (req, res) => {
      try {
        const count = await plantsCollection.estimatedDocumentCount();
        res.send({ total: count });
      } catch (err) {
        res.status(500).send({ error: 'Failed to count documents' });
      }
    });

    app.get('/plants-count/:email', async (req, res) => {
      try {
        const email = req.params.email;
        const count = await plantsCollection.countDocuments({ userEmail: email });
        res.send({ total: count });
      } catch (err) {
        res.status(500).send({ error: 'Failed to count user-specific plants' });
      }
    });

    console.log('✅ MongoDB Connected Successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
  await client.connect();
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('🌱 Taking care of plants is necessary!');
});

app.listen(port, () => {
  console.log(`🚀 Plants server is running on port ${port}`);
});
