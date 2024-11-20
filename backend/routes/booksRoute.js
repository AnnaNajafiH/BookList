import express from 'express';
import {Book} from '../models/bookModel.js';


const router = express.Router();
//================================================================
//route to get all books:
//================================================================

router.get('/' ,async(req, res) => {
    try {
        const books= await Book.find();
        return res.status(200).send({
            count: books.length,
            books,
        });
    } catch (error) {
        console.log((error.message));
        res.status(500).send({message: error.message});
    }
})

//================================================================
//route to get single books:
//================================================================
router.get('/:id' ,async(req, res) => {
    const {id} =req.params;
    try {
        const book= await Book.findById(id);
        return res.status(200).send(book);
    } catch (error) {
        console.log((error.message));
        res.status(500).send({message: error.message});
    }
})

//===========================================================================
//route to create a new book:
//===========================================================================
router.post ('/', async (req,res)=>{
    const { title, author, publicationYear, genre } = req.body;

    // Check if any of the required fields are missing
   if (!title || !author || !publicationYear ||!genre  ) {
       return res.status(400).send({ message: "All fields (title, author, and publicationDate) are required" });
   }

    try {
        const newBook = new Book({ title, author, publicationYear, genre});
        await newBook.save();
        res.status(201).send('Book added Successfully');
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})
//================================================================
//route to update a book:
//================================================================
router.put('/:id', async (req, res)=>{
    const {id} = req.params;
    try {
        const updateBook = await Book.findByIdAndUpdate(id,req.body, {new: true , runValidators: true}); 
        //new: true: Returns the updated document instead of the original one.
        //runValidators: true: Ensures Mongoose validation rules are applied when updating.
        if (!updateBook) return res.status(404).send({ message: "Book not found" });
        res.status(200).send('Book updated Successfully');     // Return the updated book as the response
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})  

//================================================================
//route to delete a book:
//================================================================
router.delete('/:id', async (req, res)=>{
    const {id} = req.params;
    try {
        const deleteBook = await Book.findByIdAndDelete(id);    
        if (!deleteBook) return res.status(404).send({ message: "Book not found" });
        res.status(200).send('Book deleted Successfully');     // Return a success message
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}
);

export default router;