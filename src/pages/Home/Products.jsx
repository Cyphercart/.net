import React from 'react'
import { useForm, ValidationError } from '@formspree/react';


const Products = () => {

  const [state, handleSubmit] = useForm("mleykdal");
  if (state.succeeded) {
      return <h1>Thanks for Your Advice!</h1>;
  }
  return (
    <div className='products'>
      <h2>OUr Launches ever</h2>
      <br/>
      <div className="website-router">
         <h3>Website ROuter</h3>
         <br/>
         <button>WEbsite ROuter</button>
         <br/>
         <a href=''>Source-code</a>
         <p>
Introducing our website router – a game-changer for low-end PCs. Say goodbye to sluggish browsers. Our router optimizes performance, ensuring swift webpage access. Time is precious, and we're dedicated to making every online moment count. Don't let hardware limitations slow you down. Experience a faster, more efficient internet with our innovative solution.</p>
      </div>
      <br/>
      <div className="website-router">
         <h3>Standard Clock</h3>
         <br/>
         <button>CLock</button>
         <br/>
         <a>source code</a>
         <br/>
         <p>This is clock for make your desktop view awesome. we have also launched many other apps that make your app awesome and cool.For that project please mailto <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrtMlQSpjDhRxKnZWHxMXxCmNdRfRZtkklmvNbnHPDjQZrLwXHCqxsTZNfStDWPhfSVdq'>fahimur994@gmail.com or click here</a>.We have made above 10 software that make your desktop cool and awesome.Thanks! :)</p>
      </div>
      <br/>
      <div className="website-router">
         <h3>Make you Desktop Look awesome</h3>
         <br/>
         <button>Wow Desktop</button>
         <br/>
         <a>Source-code</a>
         <br/>
         <p>Here, we have launched a web that make you desktop look just Wow [:)].It helps to save your time,again it also useful for show-off to ther guys.Here we can give you webs when you mail us to <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXPdZFkqMbxDBkZjffzctlmbLSSPclDJXtSLWqnMsWRhxdtdTdWTZrPlsRFFkkBPvXHDB'>fahimur994@gmail.com</a></p>
      </div>
      <br/>
      <div className="website-router">
        <h3>Give us any product advice</h3>
        <br/>
        <button>GIVe ADvice</button>
        <br/>
        <a>Source-code</a>
        <br/>
        <p>Please give us any advice.It will help us to improve our service.</p>
        <br/>
         <h3 style={{textAlign:"center"}}>PLease fill this form to give us Advice</h3><br/>
         <form onSubmit={handleSubmit}>
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
      <textarea
        id="message"
        name="message"
        placeholder='please inpur your Advice :)'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
      </div>
    </div>
  )
}


export default Products