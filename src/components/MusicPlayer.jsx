import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Note: Most browsers block autoplay, so user interaction is needed.
    // Using a royalty-free romantic track placeholder.
    const audioUrl = "https://cdn.pixabay.com/download/audio/2022/03/10/audio_5c1d889275.mp3?filename=romantic-piano-111162.mp3";

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.div
            className="fixed bottom-4 right-4 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
        >
            <audio ref={audioRef} src={audioUrl} loop />
            <button
                onClick={togglePlay}
                className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-valentine-pink hover:bg-valentine-pink hover:text-white transition-colors duration-300"
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? (
                    <span className="text-2xl">⏸</span>
                ) : (
                    <span className="text-2xl">🎵</span>
                )}
            </button>
        </motion.div>
    );
};

export default MusicPlayer;
