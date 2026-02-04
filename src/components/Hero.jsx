import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleClick = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
    };

    return (
        <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-200 via-red-100 to-pink-300">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-valentine-pink via-transparent to-valentine-red opacity-30 animate-pulse"></div>

            {/* Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-valentine-red text-opacity-40"
                        style={{
                            fontSize: `${Math.random() * 30 + 20}px`,
                            left: `${Math.random() * 100}%`
                        }}
                        initial={{
                            y: window.innerHeight + 100,
                            opacity: 0,
                            rotate: 0,
                        }}
                        animate={{
                            y: -100,
                            opacity: [0, 0.6, 0],
                            rotate: 360,
                        }}
                        transition={{
                            duration: Math.random() * 8 + 7,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear",
                        }}
                    >
                        {i % 3 === 0 ? '❤️' : i % 3 === 1 ? '💕' : '💖'}
                    </motion.div>
                ))}
            </div>

            {/* Confetti effect */}
            {showConfetti && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={`confetti-${i}`}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                                background: ['#ff4d6d', '#ffb3c1', '#ffd700', '#ff69b4'][i % 4],
                                left: '50%',
                                top: '50%',
                            }}
                            initial={{ scale: 0, x: 0, y: 0 }}
                            animate={{
                                scale: [0, 1, 0],
                                x: (Math.random() - 0.5) * 1000,
                                y: (Math.random() - 0.5) * 1000,
                                rotate: Math.random() * 360,
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeOut",
                            }}
                        />
                    ))}
                </div>
            )}

            <motion.div
                initial={{ scale: 0.5, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="z-10 text-center px-4 cursor-pointer"
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
            >
                {/* Glassmorphism card */}
                <div className="backdrop-blur-md bg-white/30 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold font-dancing text-transparent bg-clip-text bg-gradient-to-r from-valentine-red via-pink-500 to-valentine-red mb-6"
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{ backgroundSize: '200% 200%' }}
                    >
                        Happy Valentine's Day
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-3xl font-lato text-gray-800 max-w-lg mx-auto font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        To the one who makes my heart beat faster...
                    </motion.p>
                    <motion.p
                        className="text-sm mt-4 text-pink-600 font-lato italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    >
                        ✨ Click me for a surprise! ✨
                    </motion.p>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 text-valentine-red text-4xl z-10"
            >
                💝
            </motion.div>
        </section>
    );
};

export default Hero;
