import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516981879613-9f5da904015f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop",
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-soft-white via-pink-50 to-soft-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 text-6xl opacity-10">💕</div>
            <div className="absolute bottom-20 right-10 text-6xl opacity-10">💖</div>
            <div className="absolute top-1/2 left-1/4 text-4xl opacity-10">✨</div>

            <motion.h2
                className="text-5xl md:text-6xl font-dancing text-transparent bg-clip-text bg-gradient-to-r from-valentine-red to-pink-500 text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Our Precious Memories
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group"
                        whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedImage(index)}
                    >
                        {/* Glassmorphism overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-valentine-red/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-4">
                            <span className="text-white font-dancing text-2xl">Memory #{index + 1}</span>
                        </div>

                        {/* Sparkle effect on hover */}
                        <motion.div
                            className="absolute top-2 right-2 text-2xl z-20"
                            initial={{ scale: 0, rotate: 0 }}
                            whileHover={{ scale: 1, rotate: 180 }}
                        >
                            ✨
                        </motion.div>

                        <img
                            src={src}
                            alt={`Memory ${index + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox modal */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            src={images[selectedImage]}
                            alt={`Memory ${selectedImage + 1}`}
                            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
                            initial={{ scale: 0.5, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0.5, rotate: 10 }}
                            transition={{ type: "spring" }}
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-4xl hover:text-valentine-pink transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.p
                className="text-center mt-12 text-gray-500 font-lato italic text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Every moment with you is a treasure 💎
            </motion.p>
        </section>
    );
};

export default Gallery;
