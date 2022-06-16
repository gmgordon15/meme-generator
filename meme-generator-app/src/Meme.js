import React from 'react'


function Meme() {
    return (
        <div className="Meme-Container">
           
               <form className="Input-Container">
                  
                  <div className="Input-Div">
                  <input type="text" name="top-text" 
                  className="Inputs" placeholder="Top Text"/>
                  
                  <input type="text" name="bottom-text" 
                  className="Inputs" placeholder="Bottom Text"/>
                 </div>
                 <button className="Submit-Btn">Generate New Meme</button>
               </form>
           
        </div>
    )
}

export default Meme
