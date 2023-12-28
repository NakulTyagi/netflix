import './App.css';
import Home from './components/Home.tsx';
import { Routes ,Route } from 'react-router-dom';
import Movies from './components/Movies.tsx';
import Series from './components/Series.tsx';
import NewPop from './components/NewPop.tsx';
import "react-activity/dist/library.css";
import VideoPlayer from './components/VideoPlayer.tsx';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/play" element={<VideoPlayer/>} />
        <Route path="/series" element={<Series/>} />
        <Route path="/new&popular" element={<NewPop/>} />
      </Routes>
  );
}

export default App;
