import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app=express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/posts',postRoutes);
//mongodb

app.listen(process.env.PORT, () => {
   console.log(`Server running on port: ${process.env.PORT}`);
});

mongoose.connect(process.env.CONNECTION_URL)
   .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)) )
   .catch((error) =>console.log(error.message));


