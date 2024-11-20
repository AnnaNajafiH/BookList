import express from 'express';
import { connectDB } from './database/database.js';
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();
const PORT = 5000;
app.use(express.json());


// Call connectDB only once
connectDB();


app.use(cors({origin: '*'}));

// app.use(cors({
//     origin: '*', // Allows any origin
//     // origin: 'http://localhost:3000', // Update this to match your front-end URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'], // Include 'Authorization' if using JWT tokens
//     credentials: true // Enable this if you are sending cookies or using withCredentials
// }));


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//===========================================================================
app.use('/books', booksRoute)

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}...`);
});






