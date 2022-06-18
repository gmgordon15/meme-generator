import React, {useState} from 'react'
import memesData from './memesData'


function Meme() {

const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
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

    return (
        <div className="Meme-Container">
           
               <div className="Input-Container">
                  
                  <div className="Input-Div">
                  <input type="text" name="top-text" 
                  className="Inputs" placeholder="Top Text"/>
                  
                  <input type="text" name="bottom-text" 
                  className="Inputs" placeholder="Bottom Text"/>
                 </div>
                 <button onClick={getMemeImage} className="Submit-Btn" >Generate New Meme</button>
               </div>
           <img src={meme.randomImage} alt=""/>
        </div>
    )
}

export default Meme
