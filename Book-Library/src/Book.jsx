import React from 'react'
import './Book.css'

const Book=(props)=>{
  const {image,title,publisher,price}=props;
  return (
    <>
      <div className='book'>
    {console.log(props)}
    <div className='book-image'>
    <image src={image} />
        </div>
        <div className="book-info">
          <h2>{title}</h2>
          <p className='book-author'>by {publisher}</p>
          <p className='book-price'>$ {price}</p>
          <button>Add to Cart</button>
        </div>  
    </div>
    </>
  )
}

export default Book