import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Button from './components/Button';
import Meme from './components/Meme';
import ImageSlider from './components/ImageSlider';
import TextInput from './components/TextInput';

function App() {
  const [pickedImage, setPickedImage] = useState();
  const [images, setImages] = useState([]);
  // Imgflip API endpoint
  // https://imgflip.com/api
  const endpoint = "https://api.imgflip.com/get_memes";

  // Invoke getImages function on update of pickedImage state variable
  useEffect(()=>{
    getImages(endpoint).then((res)=>{
      setImages(res);
    })
  },[])

  const getImages = async (url) => {
    const images = await axios
      .get(url)
      .then((response)=>{
        /* Array om Memes */
        return response.data.data.memes;
      })
      .catch((error)=>{console.error(error.message);})
      return images;
  }

  console.log(images);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meme Factory</h1>
        <p>
          Go on! Be awesome and get your personal Memes.
        </p>
      </header>
      <main>
        <div>
          <TextInput name="upper text" />
          <TextInput name="lower text" />
          <Button name="change pic"/>
          <Button name="load pic"/>
          <Button name="generate meme"/>
          
        </div>
        <div className="image-container">
          <Meme name="First Meme"/>
          <ImageSlider />
        </div>
      </main>
      
    </div>
  );
}

export default App;
