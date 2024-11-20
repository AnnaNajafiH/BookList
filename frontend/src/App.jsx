import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import CreateBook from './pages/createBook/CreateBook';
import DeleteBook from './pages/deleteBook/DeleteBook';
import EditBook from './pages/editBook/EditBook';
import ShowBook from './pages/showBook/ShowBook';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  )
}

export default App