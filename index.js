import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; // Update if using MongoDB Atlas
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db("testDB");
        const collection = db.collection("users");

        const result = await collection.insertOne({ name: "Alice", age: 25 });
        console.log(`Document inserted with _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
