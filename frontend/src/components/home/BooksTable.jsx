import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';


const BooksTable = ({books}) => {
  return (
    <div>
        <table className='w-full border-separate border-spacing-2'>


              <thead>
                <tr>
                  <th className='border border-slate-600 rounded-md'>No.</th>
                  <th className='border border-slate-600 rounded-md'>Title</th>
                  <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                  <th className='border border-slate-600 rounded-md max-md:hidden'>Publication Year</th>
                  <th className='border border-slate-600 rounded-md'> Operation</th>
                </tr>
              </thead>


              <tbody>
                {books.map((book,index)=>(
                  <tr key={book._id} className='h-8'>
                    <td className='border border-slate-700 rounded-md text-center'>
                      {index + 1}
                    </td>

                    <td className='border border-slate-700 rounded-md'>
                      {book.title}
                    </td>

                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                      {book.author}
                     </td>

                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                      {book.publicationYear}
                     </td>

                     <td className='border border-slate-700 rounded-md text-center'>
                      <div className='flex justify-center gap-x-4'>
                        <Link to={`/books/details/${book._id}`}>
                             <BsInfoCircle className='text-green-800 text-2xl' aria-label="Details" />
                        </Link>
                        <Link to={`/books/edit/${book._id}`}>
                            <AiOutlineEdit className='text-yellow-600 text-2xl' aria-label="Edit" />
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                              <MdOutlineDelete className='text-red-600 text-2xl' aria-label="Delete" />
                        </Link>

                      </div>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
    </div>
  )
}

export default BooksTable