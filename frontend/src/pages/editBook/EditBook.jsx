import React , {useState,useEffect} from 'react'
import BackButton from '../../components/backButton/BackButton';
import Spinner from '../../components/spinner/Spinner';
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';
import { useSnackbar } from 'notistack';



const EditBook = () => {
  const [title, setTitle]= useState('');
  const [author, setAuthor]= useState('');
  const [publicationYear, setPublicationYear]= useState('');
  const [genre, setGenre]= useState('');
  const [loading, setLoading]= useState(false);
  const navigate= useNavigate();
  const {id}= useParams();
    const { enqueueSnackbar } = useSnackbar()


  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5000/books/${id}`)
    .then(res=>{
      const book= res.data;
      console.log(book)
      setTitle(book.title);
      setAuthor(book.author);
      setPublicationYear(book.publicationYear);
      setGenre(book.genre);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert(error.response?.data?.message || 'An error occurred. Please try again later.');
      console.log(error)
  });
  },[id]);

  const handleEditBook= ()=>{
    const data = {
      title,
      author,
      publicationYear,
      genre
    };

    setLoading(true);
    axios.put(`http://localhost:5000/books/${id}`, data)
    .then(res=>{
      console.log(res.data);
      setLoading(false);
      enqueueSnackbar('Book updated successfully', { variant: 'success' });
      navigate('/');
    })
   .catch((error) => {
  console.error(error.response?.data || error.message);
  setLoading(false);
  enqueueSnackbar( 'An error occurred. Please try again later.', { variant: 'error' });
});

      
  };



  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
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
        onClick={handleEditBook}
        className='bg-sky-300 p-2 m-8' >Save</button>
        
      </div>
    </div>
  )
}

export default EditBook