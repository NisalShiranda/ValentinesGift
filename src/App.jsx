import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import LoveLetter from './components/LoveLetter';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-soft-white selection:bg-valentine-pink selection:text-valentine-red">
      <MusicPlayer />
      <Hero />
      <Gallery />
      <LoveLetter />

      <footer className="py-6 text-center text-gray-400 font-lato text-sm">
        Made with ❤️ for you
      </footer>
    </div>
  );
}

export default App;
