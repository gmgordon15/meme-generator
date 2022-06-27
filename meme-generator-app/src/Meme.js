import React, {useState} from 'react'
import memesData from './memesData'
import {saveAs} from "file-saver"


function Meme() {

const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})

console.log(meme.randomImage)
const [allMemeImages, setAllMemeImages] = React.useState(memesData)


function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}


function handleChange (event){
    const{name, value} =  event.target     
    setMeme(prevMeme =>({
        ...prevMeme,
        [name] : value
    }))
}






    return (
        <div className="Meme-Container">
           
               <div className="Input-Container">
                  
                  <div className="Input-Div">
                  <input type="text" 
                  name="topText" 
                  className="Inputs" 
                  placeholder="Top Text"
                  value={meme.topText}
                  onChange={handleChange}
                  />
                  
                  <input type="text" 
                  name="bottomText" 
                  className="Inputs" 
                  placeholder="Bottom Text"
                  value={meme.bottomText}
                  onChange={handleChange}
                  />
                  
                 
                 </div>

                 
                 <button onClick={getMemeImage} value={meme.randomImage} className="Submit-Btn" >Generate New Meme</button>
               
               </div>
               
               
                <div className="Div-Pic">
                <img src={meme.randomImage} width="400px" height="500px"/>
                <h2 className="meme--text--top">{meme.topText}</h2>
                <h2 className="meme--text--bottom">{meme.bottomText}</h2>
                </div>
               
               
               
        </div>
    )
}

export default Meme
