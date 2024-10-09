import React from 'react'

const SingleMovie = (props) => {
    const {id, title, posterURL} = props.movie;
  return (
    <div className='col-span-12 sm:col-span-6 md:col-span-4 mx-1 sm:mx-5 my-5 xl:my-10'>
      <img src={posterURL} alt="" className='mx-auto xl:w-[90%] 2xl:w-full' />
    </div>
  )
}

export default SingleMovie
