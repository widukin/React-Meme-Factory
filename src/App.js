import './App.css';
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
        </div>
      </main>
    </div>
  );
}

export default App;
