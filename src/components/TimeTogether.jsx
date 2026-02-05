import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TimeTogether = () => {
    // START DATE: REPLACE THIS WITH YOUR ACTUAL ANNIVERSARY DATE
    // Format: YYYY-MM-DDTHH:mm:ss
    const startDate = "2022-08-26T00:00:00";

    const [timeLeft, setTimeLeft] = useState(getTimeDifference(startDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeDifference(startDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function getTimeDifference(start) {
        const now = new Date();
        const past = new Date(start);
        const diff = now - past;

        if (diff < 0) return { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        // Approximate years/months for display (simple calculation)
        const years = Math.floor(days / 365);
        const remainingDays = days % 365;

        return { years, days: remainingDays, hours, minutes, seconds };
    }

    const timeUnits = [
        { label: 'Years', value: timeLeft.years },
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ];

    return (
        <section className="py-12 px-4 bg-white/50 backdrop-blur-sm relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 text-4xl animate-pulse">⏳</div>
                <div className="absolute bottom-10 right-10 text-4xl animate-pulse delay-1000">💖</div>
            </div>

            <motion.div
                className="max-w-4xl mx-auto text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-dancing text-valentine-red mb-8">
                    Together For...
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center">
                    {timeUnits.map((item, index) => (
                        <div key={item.label} className="flex flex-col items-center">
                            <motion.div
                                className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-lg border-2 border-pink-200 flex items-center justify-center mb-2"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.1, rotate: 3 }}
                            >
                                <span className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-valentine-red to-pink-500 font-lato">
                                    {String(item.value).padStart(2, '0')}
                                </span>
                            </motion.div>
                            <span className="text-gray-600 font-lato font-medium text-sm uppercase tracking-wider">{item.label}</span>
                        </div>
                    ))}
                </div>

                <motion.p
                    className="mt-8 text-lg text-gray-500 font-lato italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    ...and counting every beautiful second with you. 💕
                </motion.p>
            </motion.div>
        </section>
    );
};

export default TimeTogether;
