import React from 'react'
import Combo from './Combo'
import Heading from './Heading'
import Products from './Products'
import Price from '../Price'

const Allover = () => {
  return (
    <div className='Allover'>
      <br/><br/>
      <Heading/>
      <br/>
      <Combo/>
      <br/>
      <Products/>
      <br/>
      <Price/>
      <br/><br/><br/>
    </div>
  )
}

export default Allover