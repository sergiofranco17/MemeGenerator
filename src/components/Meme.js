import React from 'react'
import memesData from './memesData'

function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""

  })

  function handleText(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]:value
    }))
  }

  const [allMemeImages, setAllMemeImages] = React.useState([])

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then(res=> res.json())
      .then(data => setAllMemeImages(data.data.memes))
  },[])

  function getMemeImage(){
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <main>
        <div className='form'>
            <input 
            type="text"
            className='form-input'
            placeholder='Top text'
            onChange={handleText}
            name='topText'
            value={meme.topText}
            />
            <input 
            type="text" 
            className='form-input'
            placeholder='Bottom text'
            onChange={handleText}
            name='bottomText'
            value={meme.bottomText}
            />
            <button 
            className='form-button'
            onClick={getMemeImage}
            >
                Get a new meme image!
            </button>
        </div>
        <div className='meme'>
          <img src={meme.randomImage} className='meme-image'/>
          <h2 className='meme-text top'>{meme.topText}</h2>
          <h2 className='meme-text bottom'>{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme