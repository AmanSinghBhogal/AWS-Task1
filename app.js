import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

app.use(express.json())

dotenv.config();

app.use(bodyParser.json({ limit:"30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
    for(let i=1; i<=100; i++){
        console.log("Hello World #"+i);
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});


app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`)
});