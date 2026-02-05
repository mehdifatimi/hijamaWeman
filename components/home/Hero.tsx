'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';
import Button from '@/components/ui/Button';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige-50 via-rose-50 to-sage-50">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage-200 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <motion.h1
                        className="font-playfair text-5xl md:text-7xl font-bold text-gray-800 mb-6"
                        variants={slideUp}
                    >
                        Hijama Thérapeutique
                        <br />
                        <span className="text-rose-500">pour Femmes</span>
                    </motion.h1>

                    <motion.p
                        className="font-poppins text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
                        variants={slideUp}
                    >
                        Bien-être, équilibre et soins naturels dans un espace exclusivement réservé aux femmes
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        variants={slideUp}
                    >
                        <Button href="/contact" variant="primary">
                            Prendre Rendez-vous
                        </Button>
                        <Button href="https://wa.me/212762818313" variant="whatsapp">
                            WhatsApp
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                >
                    <svg
                        className="w-6 h-6 text-rose-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
