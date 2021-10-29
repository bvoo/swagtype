import './App.css';
import Word from './components/Word.jsx';
import randomWords from 'random-words';

function App() {
  // generate random word to guess
  const words = randomWords(60);

  return (
    <div className="App">
      <header className="app-swag">
        <div class="centerContent">
          <div class="top"></div>
          <div className="middle">
            <div class="gaming">
            {
              words.map(word => {
                return <Word word={word} />
              })
            }
            </div>
            <input class="wordsInput" tabindex="0" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" />
          </div>
          <div className="bottom"></div>
        </div>
      </header >
    </div >
  );
}

export default App;
