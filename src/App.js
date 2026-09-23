import './App.css';
import Home from './components/pages/Home.tsx';
import { Routes ,Route } from 'react-router-dom';
import Movies from './components/pages/Movies.tsx';
import Series from './components/pages/Series.tsx';
import NewPop from './components/pages/NewPop.tsx';
import "react-activity/dist/library.css";
import VideoPlayer from './components/pages/VideoPlayer.tsx';
import FancodeHome from './components/fancode/FancodeHome.tsx';
import Search from './components/pages/Search.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/play" element={<VideoPlayer/>} />
        <Route path="/series" element={<Series/>} />
        <Route path="/new&popular" element={<NewPop/>} />
        <Route path="/fancode" element={<FancodeHome/>} />
        <Route path="/browse" element={<Search/>} />
      </Routes>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2000,
          background: "#0c4a6e",
          color: "#e0f2fe",
          fontSize: 12,
          padding: "8px 16px",
          textAlign: "center",
        }}
      >
        NT Flix is an unofficial portfolio demo. It is not Netflix and is not
        affiliated with Netflix, Inc. No logins or payments.
      </div>
    </>
  );
}

export default App;
