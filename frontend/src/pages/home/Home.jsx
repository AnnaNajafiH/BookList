import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../../components/spinner/Spinner';
import {Link} from 'react-router-dom';
import BooksCard from '../../components/home/BooksCard';

import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import BooksTable from '../../components/home/BooksTable';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
    .get('http://localhost:5000/books')
    .then(res => {
      console.log('Response:', res.data);
      setBooks(res.data?.books); 
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    })
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
        className='bg-sky-300 hover:bg.sky-600 px-4 py-1 rounded-lg '
        onClick={()=>setShowType('table')}>
          Table
        </button>
        <button
        className='bg-sky-300 hover:bg.sky-600 px-4 py-1 rounded-lg '
        onClick={()=>setShowType('card')}>
          Card
        </button>
      </div>
        <h1 className='text-3xl my-8 font-bold'>Books List</h1>
            <Link to='/books/create'>
             <MdOutlineAddBox className='text-sky-800 text-4xl'/>
          </Link>
     
          {loading ? (
            <Spinner />
          ): showType==='table' ? (
            <BooksTable books={books} />
          ) : (
            <BooksCard books={books} />
          )}
    </div>

  )
}

export default Home


