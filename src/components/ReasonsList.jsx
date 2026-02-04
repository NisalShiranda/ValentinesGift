import React, { useState } from 'react';
import { motion } from 'framer-motion';

const reasons = [
    { emoji: '😊', text: 'Your beautiful smile brightens my day' },
    { emoji: '💫', text: 'The way you make everything magical' },
    { emoji: '🌟', text: 'Your kindness and caring heart' },
    { emoji: '🎨', text: 'Your creativity and unique perspective' },
    { emoji: '💪', text: 'Your strength and determination' },
    { emoji: '🌈', text: 'The colors you bring to my life' },
    { emoji: '🎵', text: 'Your laugh is my favorite sound' },
    { emoji: '✨', text: 'The sparkle in your eyes' },
];

const ReasonsList = () => {
    const [flipped, setFlipped] = useState([]);

    const handleFlip = (index) => {
        if (flipped.includes(index)) {
            setFlipped(flipped.filter(i => i !== index));
        } else {
            setFlipped([...flipped, index]);
        }
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-soft-white to-pink-100 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 text-9xl">💝</div>
                <div className="absolute bottom-20 right-10 text-9xl">💖</div>
            </div>

            <motion.h2
                className="text-5xl md:text-6xl font-dancing text-transparent bg-clip-text bg-gradient-to-r from-valentine-red to-pink-500 text-center mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Why I Love You
            </motion.h2>

            <motion.p
                className="text-center text-gray-600 font-lato mb-12 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Click each card to reveal... 💕
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        className="relative h-48 cursor-pointer perspective-1000"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => handleFlip(index)}
                    >
                        <motion.div
                            className="relative w-full h-full"
                            animate={{ rotateY: flipped.includes(index) ? 180 : 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Front */}
                            <div
                                className="absolute inset-0 backdrop-blur-md bg-gradient-to-br from-valentine-pink/40 to-valentine-red/40 rounded-2xl shadow-xl border-2 border-white/50 flex items-center justify-center"
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                <motion.div
                                    animate={{
                                        scale: flipped.includes(index) ? 0.8 : [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: flipped.includes(index) ? 0 : Infinity,
                                    }}
                                    className="text-7xl"
                                >
                                    {reason.emoji}
                                </motion.div>
                            </div>

                            {/* Back */}
                            <div
                                className="absolute inset-0 backdrop-blur-md bg-gradient-to-br from-valentine-red/60 to-pink-500/60 rounded-2xl shadow-xl border-2 border-white/70 flex items-center justify-center p-6"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                }}
                            >
                                <p className="text-white font-lato text-center text-lg font-medium">
                                    {reason.text}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <motion.p
                className="text-center mt-12 text-gray-600 font-lato italic text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                ...and countless more reasons every day! ❤️
            </motion.p>
        </section>
    );
};

export default ReasonsList;
