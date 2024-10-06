import React from 'react'

const SingleMovie = (props) => {
    const {id, title, posterURL} = props.movie;
  return (
    <div className='col-span-4 mx-5 my-10'>
      <img src={posterURL} alt="" className='mx-auto' />
    </div>
  )
}

export default SingleMovie
