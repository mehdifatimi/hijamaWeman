'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, slideUp } from '@/lib/animations';
import Button from '@/components/ui/Button';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige-50 via-rose-50 to-sage-50">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage-200 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-center lg:text-left"
                    >
                        <motion.h1
                            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6"
                            variants={slideUp}
                        >
                            Hijama Thérapeutique
                            <br />
                            <span className="text-rose-500">pour Femmes</span>
                        </motion.h1>

                        <motion.p
                            className="font-poppins text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
                            variants={slideUp}
                        >
                            Bien-être, équilibre et soins naturels dans un espace exclusivement réservé aux femmes
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                            variants={slideUp}
                        >
                            <Button href="/contact" variant="primary">
                                Prendre Rendez-vous
                            </Button>
                            <Button href="https://wa.me/212762818313" variant="whatsapp">
                                WhatsApp
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
                            variants={slideUp}
                        >
                            <div className="text-center lg:text-left">
                                <div className="font-playfair text-3xl md:text-4xl font-bold text-rose-500">5+</div>
                                <div className="font-poppins text-sm text-gray-600 mt-1">Ans d'expérience</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="font-playfair text-3xl md:text-4xl font-bold text-rose-500">100%</div>
                                <div className="font-poppins text-sm text-gray-600 mt-1">Femmes</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="font-playfair text-3xl md:text-4xl font-bold text-rose-500">3</div>
                                <div className="font-poppins text-sm text-gray-600 mt-1">Services</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/services/Gemini_Generated_Image_mflkt1mflkt1mflk.png"
                            alt="Centre de bien-être Hijama - Espace luxueux et apaisant"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
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
