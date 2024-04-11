import './App.css';
import HomePage from './pages/Home';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <HomePage/>
    </div>
  );
}

export default App;
