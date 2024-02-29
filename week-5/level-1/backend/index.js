const express = require('express');
const cors = require('cors');
const { BusinessCard } = require('./db');
const { BusinessCardSchema } = require('./types');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/users', async (req, res) => {
    const users = await BusinessCard.find({});

    res.json({
        users: users
    });
});

app.post('/user', async (req, res) => {
    const createPayload = req.body;

    const parsedPayload = BusinessCardSchema.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you send the wrong inputs"
        });
        return;
    }

    await BusinessCard.create({
        name: createPayload.name,
        bio: createPayload.bio,
        social: createPayload.social,
        interests: createPayload.interests
    });  

    res.json({
        message: "Business card Successfully added"
    });
});

app.listen(PORT, () => {
    console.log("Server is running");
});
