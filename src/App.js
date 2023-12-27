import './App.css';
import Home from './components/Home.tsx';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Movies from './components/Movies.tsx';
import Series from './components/Series.tsx';
import NewPop from './components/NewPop.tsx';
import "react-activity/dist/library.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/series" element={<Series/>} />
        <Route path="/new&popular" element={<NewPop/>} />
      </Routes>
    </Router>
  );
}

export default App;
