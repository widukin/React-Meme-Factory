import './App.css';
import Button from './components/Button';
import Meme from './components/Meme';
import ImageSlider from './components/ImageSlider';
import TextInput from './components/TextInput';

function App() {
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
