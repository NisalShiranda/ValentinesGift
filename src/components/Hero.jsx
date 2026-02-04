import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-valentine-pink to-soft-white">
            {/* Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-valentine-red text-opacity-50 text-2xl"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 100,
                            opacity: 0,
                        }}
                        animate={{
                            y: -100,
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear",
                        }}
                        style={{ left: Math.random() * 100 + '%' }}
                    >
                        ❤
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="z-10 text-center px-4"
            >
                <h1 className="text-5xl md:text-7xl font-bold font-dancing text-valentine-red mb-4 drop-shadow-sm">
                    Happy Valentine's Day
                </h1>
                <p className="text-xl md:text-2xl font-lato text-gray-700 max-w-lg mx-auto">
                    To the one who makes my heart beat faster...
                </p>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 text-valentine-red text-3xl"
            >
                ↓
            </motion.div>
        </section>
    );
};

export default Hero;
