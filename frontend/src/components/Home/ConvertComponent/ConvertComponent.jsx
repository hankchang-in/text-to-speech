import React, { use } from 'react'
import './ConvertComponent.css'
import { useState ,useRef , useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
const ConvertComponent = () => {

  // const textarea = document.getElementsByClassName("myTextarea");
  const wordCountDisplay = document.getElementsByClassName("wordCount");
  const maxWords = 10000;
  const [updateWords, setUpdateWords] = useState(0);
  const textarea = useRef(null);
  const [voices, setVoices] = useState([]); 
  const [language , setLanguage] = useState('');
  const [languageCode , setLanguageCode] = useState('');
  const [ssmlGender , setSsmlGender] = useState('');
  const [audioUrl , setAudioUrl] = useState('');
  const getVoicesAPI  = async () => { 
    try{
      const data = await fetch('https://magicvoice-mrmg.onrender.com/api/getVoices');
      const voices = await data.json(); 
      setVoices(voices)
    }catch(err){ 
      console.log(err)
    }
  }
  useEffect(() => {
      getVoicesAPI()
  },[])
 

  const handleChange = (e) => {
    const currentWordCount =textarea.current.value.length;
    const words = textarea.current.value;
    if(currentWordCount >= maxWords){
      textarea.current.value = words.slice(0, maxWords) // Trim extra words
      
    }else{
      setUpdateWords(currentWordCount);
    }

  }
  const sendRequest = async (text) => {
    try{
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( {
          "text" : text,
          "voice" : language,
          "languageCode" : languageCode,
          "ssmlGender" : ssmlGender

        }),
      }
      const response = await fetch('https://magicvoice-mrmg.onrender.com/api/tts' , options)
      const data = await response.blob();
        // 🔹 Set Audio Source
        const url = URL.createObjectURL(data);
        setAudioUrl(url)
    }catch(err){
      console.log(err);
    }
  }
  const handleRequest = () => {
    if(language === ''){
      alert('Please select a voice')
      return;
    }else if(textarea.current.value === ''){
      alert('Please enter some text')
      return;
    }else{
      sendRequest(textarea.current.value);
    }
  }

  const handleVoiceChange = (e) => {  
    setLanguage(e.target.value)
    setLanguageCode(e.target.selectedOptions[0].id)
    setSsmlGender(e.target.selectedOptions[0].className)

  }
  return (
    <div className='convertComponent'>
      <Navbar></Navbar>
        <div className='convertContainer'>
            <p>Convert Text to Speech</p>
            <textarea ref={textarea} onChange={handleChange} className='myTextarea' placeholder='Enter text here to convert to speech....'></textarea>
            <button onClick={handleRequest}>Convert</button>
            <p className="wordCount">{updateWords} / {maxWords} words</p>
        </div>

        <div className='voiceContainer'>
          <select  name="" id="" onChange={handleVoiceChange}>

            <option value="">Select a voice</option>
            {voices.map((voice) => {
              return <option style={{width:'100px'}} id={voice.languageCodes[0]} className={voice.ssmlGender} value={voice.name }>{voice.name}</option>
            })} 
          </select>
          <div className='selectedLanguage'>
            <span>Selected Language : {language ? language : 'None'}</span>
          </div>
        </div>

        <div className='audioContainer'>
        {audioUrl && (
        <div>
          <audio controls>
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <br />
          <a className='downloadButton' href={audioUrl} download="generated-audio.mp3">
            <button>Download Audio</button>
          </a>
        </div>
      )}
        </div>
    </div>
  )
}

export default ConvertComponent
