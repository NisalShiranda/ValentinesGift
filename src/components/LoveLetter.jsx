import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoveLetter = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-valentine-pink py-20 px-4 relative overflow-hidden">
            {/* Background hearts pattern can be added here */}

            {!isOpen ? (
                <motion.div
                    className="bg-white p-8 rounded-lg shadow-2xl cursor-pointer max-w-sm w-full text-center relative z-10"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsOpen(true)}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="w-full h-40 bg-valentine-red rounded-t-lg mb-4 flex items-center justify-center">
                        <span className="text-6xl">💌</span>
                    </div>
                    <h3 className="text-2xl font-dancing font-bold text-gray-800">A Letter For You</h3>
                    <p className="text-gray-500 mt-2 font-lato">Click to open</p>
                </motion.div>
            ) : (
                <motion.div
                    className="bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-2xl w-full relative z-10"
                    initial={{ scale: 0.8, opacity: 0, rotateX: 90 }}
                    animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-valentine-red"
                    >
                        ✕
                    </button>

                    <h2 className="text-3xl md:text-4xl font-dancing text-valentine-red mb-6">My Dearest Love,</h2>

                    <div className="font-lato text-gray-700 leading-relaxed text-lg space-y-4">
                        <p>
                            I wanted to create this little space on the internet just for you. Every moment with you is a treasure, and I am so grateful to have you in my life.
                        </p>
                        <p>
                            Your smile lights up my world, and your love gives me strength. On this Valentine's Day, I want to remind you how incredibly special you are to me.
                        </p>
                        <p>
                            I love you more than words can say.
                        </p>
                        <p className="text-right font-dancing text-2xl mt-8 text-valentine-red">
                            - Forever Yours
                        </p>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default LoveLetter;
