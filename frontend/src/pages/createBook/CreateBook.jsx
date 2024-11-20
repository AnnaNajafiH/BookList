import React , {useState} from 'react'
import BackButton from '../../components/backButton/BackButton';
import Spinner from '../../components/spinner/Spinner';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { useSnackbar } from 'notistack';


const CreateBook = () => {
  const [title, setTitle]= useState('');
  const [author, setAuthor]= useState('');
  const [publicationYear, setPublicationYear]= useState('');
  const [genre, setGenre]= useState('');
  const [loading, setLoading]= useState(false);
  const navigate= useNavigate();
  const { enqueueSnackbar } = useSnackbar()


  const handleSaveBook= ()=>{
    if (!title || !author || !publicationYear|| !genre){ 
    alert('All fields are required!');
    return;
  }

    const data = {
      title,
      author,
      publicationYear,
      genre
    };

    setLoading(true);
    axios.post('http://localhost:5000/books', data)
    .then(res=>{
      console.log(res.data);
      setLoading(false);
      enqueueSnackbar('Book added successfully', { variant: 'success' });
      navigate('/');
    })
   .catch((error) => {
  console.error(error.response?.data || error.message);
  setLoading(false);
  enqueueSnackbar( 'An error occurred. Please try again later.', { variant: 'error' });
  
  // alert(error.response?.data?.message || 'An error occurred. Please try again later.');
});

      
  };



  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto' >
        <div className= 'my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
          type='text'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className= 'my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
          type='text'
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className= 'my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publication Year</label>
          <input
          type='number'
          value={publicationYear}
          onChange={(e)=>setPublicationYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className= 'my-4'>
            <label className='text-xl mr-4 text-gray-500'>Genre</label>
          <input
          type='text'
          value={genre}
          onChange={(e)=>setGenre(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button 
        onClick={handleSaveBook}
        className='bg-sky-300 p-2 m-8' >Save</button>
        
      </div>
    </div>
  )
}

export default CreateBook