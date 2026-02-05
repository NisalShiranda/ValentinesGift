import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ReasonsList from './components/ReasonsList';
import LoveLetter from './components/LoveLetter';
import MusicPlayer from './components/MusicPlayer';
import TimeTogether from './components/TimeTogether';

function App() {
  return (
    <div className="min-h-screen bg-soft-white selection:bg-valentine-pink selection:text-valentine-red overflow-x-hidden">
      <MusicPlayer />
      <Hero />
      <TimeTogether />
      <Gallery />
      <ReasonsList />
      <LoveLetter />

      <footer className="py-8 text-center bg-gradient-to-t from-valentine-pink/20 to-transparent">
        <p className="text-gray-500 font-lato text-sm mb-2">Made with ❤️ for you</p>
        <p className="text-xs text-gray-400 font-lato">Every day with you is Valentine's Day 💕</p>
      </footer>
    </div>
  );
}

export default App;
