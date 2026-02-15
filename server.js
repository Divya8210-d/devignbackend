import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import sendmail from './send.js';
import cors from "cors"
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors())

app.use(express.json());

app.post("/contact", async (req, res) => {
    const { name, email, number, about } = req.body;
    try {
        await sendmail(name, email, number, about);
        res.status(200).send("Email sent successfully");
    } catch (error) {
        res.status(500).send("Error sending email");
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

