import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/backButton/BackButton';
import Spinner from '../../components/spinner/Spinner';

const ShowBook = () => {
  const [book, setBook]= useState({});
  const [loading, setLoading]= useState(true);
  const {id}= useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/books/${id}`)
    .then (res=>{
      console.log(res.data)
      setBook(res.data);
      setError(true)
      setLoading(false);
    })
    .catch(err=>console.log(err));
     setLoading(false);
  }, []);
  return (
    <div className='p-4'>
      <BackButton destination='/'/>
      <h1 className='text-3xl my-4'>Book Details</h1>
      {loading ? <Spinner/> : (
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'> ID</span>
          <span>{book._id}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'> Title</span>
          <span>{book.title}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'> Author</span>
          <span>{book.author}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'> Publication Year</span>
          <span>{book.publicationYear}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'> Genre</span>
          <span>{book.genre}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'> Create Time</span>
          <span>{book.createdAt ? new Date(book.createdAt).toLocaleString() : 'N/A'}</span> 

        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'> Last Update Time</span>
          <span>{book.updatedAt ? new Date(book.updatedAt).toLocaleString() : 'N/A'}</span>

        </div>
        
        
      </div>
      )}
    </div>
  )
}

export default ShowBook