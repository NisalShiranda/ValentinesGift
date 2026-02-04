import React from 'react';
import { motion } from 'framer-motion';

// Placeholder images
const images = [
    "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=600&auto=format&fit=crop", // Couple holding hands
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop", // Love balloon
    "https://images.unsplash.com/photo-1516981879613-9f5da904015f?q=80&w=600&auto=format&fit=crop", // Rose
    "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=600&auto=format&fit=crop", // Sunset
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop", // Heart
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop", // Cat heart?
];

const Gallery = () => {
    return (
        <section className="py-20 px-4 bg-soft-white">
            <h2 className="text-4xl font-dancing text-valentine-red text-center mb-12">Our Memories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        className="overflow-hidden rounded-lg shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={src}
                            alt={`Memory ${index + 1}`}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>
            <p className="text-center mt-8 text-gray-500 font-lato italic">More memories to be made...</p>
        </section>
    );
};

export default Gallery;
