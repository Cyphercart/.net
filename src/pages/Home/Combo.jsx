import React, { useState } from 'react'



const Combo = () => {
      const [showPurchase, setShowPurchase] = useState(false);

   const handleOrderClick = () => {
     setShowPurchase(true);
   };
 
 
  return (
    <div className='combo'>
      <div className="combo-1">
         <h2>COmbo 1</h2>
         <ul>
            <li>wEbsite-market-Price - 5$</li>
            <li>GRaphic Design - 3$ - (poster_)</li>
            <hr/>
            <p>The total is only 8$ dollar but you have to pay now 6$</p>
         </ul>
         <a href='/purchase'>
         <button onClick={'/purchase'}>
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-bag" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
   <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
</svg>
         </button>
         </a>
      </div>
      <div className="combo-2">
         <h2>COmbo 2</h2>
         <ul>
            <li>App - 9$</li>
            <li>Website - 5$</li>
            <li>Documents of MS World - 1$</li>
            <hr/>
            <p>The total is only 15$ but you have to pay now 13$</p>
         </ul>
         <a href='/purchase'>
         <button onClick={'/purchase'}>
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-bag" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
   <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
</svg>
         </button>
         </a>
      </div>
      <div className="combo-3">
         <h2>COmbo 3</h2>
         <ul>
            <li>Graphic Design - 3$</li>
            <li>Website (Quantity-2) - 10$</li>
            <li>App - 10$</li>
            <li>MS Office work - 1$</li>
         </ul>
         <hr/>
         <p>The total is 24$ but you have to pay now only 19$</p>
         <a href='/purchase'>
         <button onClick={'/purchase'}>
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-bag" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
   <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
</svg>
         </button>
         </a>
      </div>
    </div>
  )
}

export default Combo