import { MongoClient } from "mongodb";

const handler = async (req, res) => {


    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({ message: 'Invalid input!!!' });
            return;
        }

        const newMessage = {
            email, name, message
        }

        const username = process.env.mongodb_username;
        const password = process.env.mongodb_password;
        const clusterName = process.env.mongodb_clusterName;
        const database = process.env.mongodb_database;


        const url = `mongodb+srv://${username}:${password}@${clusterName}.4pdc6gt.mongodb.net/${database}?retryWrites=true&w=majority`
        let client;
        try {
            client = await MongoClient.connect(url);
        } catch (err) {
            res.status(500).json({ message: 'Could not connect to the database!!!' });
            return;
        }

        try {
            const db = client.db();

            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertId;

        } catch (err) {
            client.close();
            res.status(500).json({ message: 'Could not add message!!!' });
        }


        client.close();
        res.status(201).json({ message: "Messages stored!!!", data: newMessage })
    }


}

export default handler;
