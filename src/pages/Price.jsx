import React from 'react'


const Price = () => {
  return (
    <div className='Price'>
      <h2>PRoducts PRice</h2>
      <br/>
      <table>
         <ul>
            <h3>Website :</h3>
            <li>React  - 5$</li>
            <li>Angular - 5$</li>
            <li>LOgin form - 3$</li>
            <li>BAckend of LOgin by formspree - 5$</li>
            <li>USing HTmL,CSS,js - 3$</li>
         </ul>
         <h3>APP :</h3>
         <ul>
            <li>Electron - 9$</li>
         </ul>
         <h3>Graphic Design :</h3>
         <ul>
            <li>Poster - 3$</li>
            <li>__Book Cover__ = 5$</li>
         </ul>
         <h3>MS Office</h3>
         <ul>
            <li>Ms Word</li>
            <li>POwer point</li>
            <li>Exel</li>
            <li>Publisher</li>
            <li>Google Quiz</li>
            <p>All of them above per is only 1$</p>
         </ul>
      </table>
    </div>
  )
}

export default Price