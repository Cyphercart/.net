import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Purchase = () => {
   const [state, handleSubmit] = useForm("mpzgelyw");
   if (state.succeeded) {
       return <p>Thanks for joining!</p>;
   }
  return (
    <div className='purchase'>
      <h2>Maek it BUy</h2>
      <br/>
      <p>Please fiLL UP THE forM</p>
      <br/>      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label id='prod' name="product_name">Select the product</label>
      <select id='prod'  name = 'product_name'>
        <option id='prod' name="product_name is">None</option>
         <option id='prod' name="product_name is">COmbo - 1</option>
         <option id='prod' name="product_name is">COmbo - 2</option>
         <option id='prod' name="product_name is">COmbo - 3</option>
         <option id='prod' name="product_name is">Website</option>
         <option id='prod' name="product_name is">App`</option>
         <option id='prod' name="product_name is">Login</option>
         <option id='prod' name="product_name is">Graphic design</option>
         <option id='prod' name="product_name is">MS OFFICE</option>
         <option id='prod' name="product_name is">Website-Router</option>
         <option id='prod' name="product_name is">cLOCK</option>
         <option id='prod' name="product_name is">wOW dESKTOP</option>
         <option id='prod' name="product_name is">nONE</option>
      </select>
      <br/>
      <label id = "number">
        Creadit card number here:
      </label>
      <input
      placeholder='credit card number here'
      id='number'
      name='credit number'
      />
      <label id='date'>DATE:</label>
      <input
      type='date'
      name='date'
      id='date'
      />
      <br/>
      <label id='descibation' name="descibation">Please describe your work</label>
      <textarea name='descibation' id="descibation" placeholder='please describe your project that we will do or you can call me at 01720103641'/>
      <br/>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  )
}

export default Purchase