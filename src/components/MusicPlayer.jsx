import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPulse, setShowPulse] = useState(false);
    const audioRef = useRef(null);

    const audioUrl = "https://cdn.pixabay.com/download/audio/2022/03/10/audio_5c1d889275.mp3?filename=romantic-piano-111162.mp3";

    useEffect(() => {
        // Show pulse hint after 2 seconds
        const timer = setTimeout(() => setShowPulse(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            setShowPulse(false);
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <audio ref={audioRef} src={audioUrl} loop />

            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
            >
                {/* Pulsing rings when playing */}
                <AnimatePresence>
                    {isPlaying && (
                        <>
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute inset-0 rounded-full border-2 border-valentine-pink"
                                    initial={{ scale: 1, opacity: 0.8 }}
                                    animate={{ scale: 2 + i * 0.5, opacity: 0 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.4,
                                    }}
                                />
                            ))}
                        </>
                    )}
                </AnimatePresence>

                {/* Hint pulse */}
                {showPulse && !isPlaying && (
                    <motion.div
                        className="absolute -inset-2 rounded-full bg-valentine-pink/30"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                )}

                <motion.button
                    onClick={togglePlay}
                    className="relative backdrop-blur-md bg-white/80 p-4 rounded-full shadow-2xl border-2 border-valentine-pink/50 hover:border-valentine-pink transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    title={isPlaying ? "Pause Music" : "Play Music"}
                >
                    <motion.div
                        animate={isPlaying ? { rotate: 360 } : {}}
                        transition={isPlaying ? { duration: 3, repeat: Infinity, ease: "linear" } : {}}
                    >
                        {isPlaying ? (
                            <span className="text-3xl">🎵</span>
                        ) : (
                            <span className="text-3xl">🎶</span>
                        )}
                    </motion.div>

                    {/* Musical notes animation when playing */}
                    {isPlaying && (
                        <>
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute text-xl"
                                    style={{ left: '50%', top: '50%' }}
                                    initial={{ x: 0, y: 0, opacity: 0 }}
                                    animate={{
                                        x: (i - 1) * 30,
                                        y: -50,
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                    }}
                                >
                                    ♪
                                </motion.div>
                            ))}
                        </>
                    )}
                </motion.button>

                {/* Tooltip */}
                <AnimatePresence>
                    {showPulse && !isPlaying && (
                        <motion.div
                            className="absolute bottom-full right-0 mb-2 bg-valentine-red text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap font-lato"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                        >
                            Click for romantic music! 🎵
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default MusicPlayer;
