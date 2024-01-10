import './App.css';
import Home from './components/pages/Home.tsx';
import { Routes ,Route } from 'react-router-dom';
import Movies from './components/pages/Movies.tsx';
import Series from './components/pages/Series.tsx';
import NewPop from './components/pages/NewPop.tsx';
import "react-activity/dist/library.css";
import VideoPlayer from './components/pages/VideoPlayer.tsx';
import FancodeHome from './components/fancode/FancodeHome.tsx';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/play" element={<VideoPlayer/>} />
        <Route path="/series" element={<Series/>} />
        <Route path="/new&popular" element={<NewPop/>} />
        <Route path="/fancode" element={<FancodeHome/>} />
      </Routes>
  );
}

export default App;
