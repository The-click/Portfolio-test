import './App.css';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className="App">
       <Header />
      <Intro></Intro>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
