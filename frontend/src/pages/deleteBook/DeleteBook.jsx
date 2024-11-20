import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import BackButton from '../../components/backButton/BackButton'
import Spinner from '../../components/spinner/Spinner'
import axios from 'axios';
import { useSnackbar } from 'notistack';


const DeleteBook = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5000/books/${id}`)
    .then(()=>{
      setLoading(false);
      enqueueSnackbar('Book deleted successfully', { variant: 'success' });
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      enqueueSnackbar( 'An error occurred. Please try again later.', { variant: 'error' });
      alert(error.response?.data?.message || 'An error occurred. Please try again later.');
    });
  }

  return (
    <div className='p-4'>
     <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col item-center border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto' >
        <div className= 'my-4'>
          <h1 className='text-3xl'>Are you sure you want to delete this book?</h1>
          <button onClick={handleDeleteBook} className='bg-red-500 text-white px-4 py-2 rounded-md mt-4 w-full'>Delete</button>
        </div>
    </div>
  </div>

  )
}


export default DeleteBook;