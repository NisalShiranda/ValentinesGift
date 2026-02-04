import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoveLetter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hearts, setHearts] = useState([]);

    const handleOpen = () => {
        setIsOpen(true);
        // Create floating hearts
        const newHearts = Array.from({ length: 20 }, (_, i) => ({
            id: Date.now() + i,
            x: Math.random() * 100,
            delay: Math.random() * 0.5,
        }));
        setHearts(newHearts);
        setTimeout(() => setHearts([]), 3000);
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-valentine-pink via-pink-200 to-valentine-red py-20 px-4 relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-6xl"
                        style={{
                            left: `${(i * 20) % 100}%`,
                            top: `${(i * 30) % 100}%`,
                        }}
                        animate={{
                            rotate: 360,
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 10 + i,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        💌
                    </motion.div>
                ))}
            </div>

            {/* Floating hearts on open */}
            <AnimatePresence>
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        className="absolute text-4xl pointer-events-none z-50"
                        style={{ left: `${heart.x}%`, top: '50%' }}
                        initial={{ y: 0, opacity: 1, scale: 0 }}
                        animate={{ y: -500, opacity: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, delay: heart.delay }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </AnimatePresence>

            {!isOpen ? (
                <motion.div
                    className="relative z-10 cursor-pointer"
                    whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                    onClick={handleOpen}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-valentine-red/30 blur-3xl rounded-full animate-pulse"></div>

                    <div className="relative backdrop-blur-md bg-white/40 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center border-2 border-white/60">
                        <motion.div
                            className="w-full h-48 bg-gradient-to-br from-valentine-red to-pink-500 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden"
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(255, 77, 109, 0.5)',
                                    '0 0 40px rgba(255, 77, 109, 0.8)',
                                    '0 0 20px rgba(255, 77, 109, 0.5)',
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.span
                                className="text-8xl"
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                💌
                            </motion.span>

                            {/* Sparkles */}
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute text-2xl"
                                    style={{
                                        left: `${20 + i * 15}%`,
                                        top: `${20 + (i % 2) * 40}%`,
                                    }}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                    }}
                                >
                                    ✨
                                </motion.div>
                            ))}
                        </motion.div>

                        <h3 className="text-3xl font-dancing font-bold text-gray-800 mb-2">A Letter For You</h3>
                        <p className="text-gray-600 font-lato text-lg">Click to open & reveal the magic 💫</p>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    className="relative z-10 backdrop-blur-lg bg-white/50 p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full border-2 border-white/70"
                    initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                    animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-valentine-red text-2xl transition-colors"
                    >
                        ✕
                    </button>

                    <motion.h2
                        className="text-4xl md:text-5xl font-dancing text-transparent bg-clip-text bg-gradient-to-r from-valentine-red to-pink-500 mb-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        My Dearest Love,
                    </motion.h2>

                    <div className="font-lato text-gray-800 leading-relaxed text-lg space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            I wanted to create this little space on the internet just for you. Every moment with you is a treasure, and I am so grateful to have you in my life.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            Your smile lights up my world, and your love gives me strength. On this Valentine's Day, I want to remind you how incredibly special you are to me.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="font-semibold text-xl"
                        >
                            I love you more than words can say. 💕
                        </motion.p>
                        <motion.p
                            className="text-right font-dancing text-3xl mt-8 text-transparent bg-clip-text bg-gradient-to-r from-valentine-red to-pink-500"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.1 }}
                        >
                            - Forever Yours ❤️
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default LoveLetter;
