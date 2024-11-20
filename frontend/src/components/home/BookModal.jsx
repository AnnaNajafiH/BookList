import React from 'react';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { PiBookOpenTextLight } from 'react-icons/pi';


const BookModal = ({item, onClose}) => {
  return (
    <div 
    className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
    onClick={onClose}
    >
        <div
        onClick={(e)=>e.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
        >
            <AiOutlineClose
            className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
            onClick={onClose}
            />
            <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                {item.publicationYear}
            </h2>
            <h4 className='my-2 text-gray-500'>{item._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl'/>
                <h2 className='my-1'>{item.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-300 text-2xl'/>
                <h2 className='my-1'>{item.author}</h2>
        </div>
        <p className='mt-4'>Anything about book</p>
        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eos eligendi illo, deleniti est, minima recusandae totam consequuntur aliquid repudiandae magnam libero aspernatur. Earum, sint!Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eos eligendi illo, deleniti est, minima recusandae totam consequuntur aliquid repudiandae magnam libero aspernatur. Earum, sint!</p>

        </div>
    </div>
  )
}

export default BookModal