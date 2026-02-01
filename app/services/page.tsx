'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, slideUp } from '@/lib/animations';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

export default function ServicesPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-beige-50 via-rose-50 to-sage-50 py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <motion.h1
                        className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Nos Services
                    </motion.h1>
                    <motion.p
                        className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Découvrez nos différents types de hijama et choisissez celui qui correspond le mieux à vos besoins
                    </motion.p>
                </div>
            </section>

            {/* Services Details */}
            <Section className="bg-white">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="space-y-16"
                >
                    {services.map((service, index) => (
                        <motion.div key={service.id} variants={slideUp}>
                            <Card delay={index * 0.2} className="lg:flex lg:gap-8">
                                <div className="lg:w-1/3 mb-6 lg:mb-0">
                                    <div className="text-6xl mb-4">{service.icon}</div>
                                    <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-2">
                                        {service.title}
                                    </h2>
                                    <p className="font-poppins text-rose-500 mb-4">
                                        {service.subtitle}
                                    </p>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-poppins">{service.duration}</span>
                                    </div>
                                </div>

                                <div className="lg:w-2/3 space-y-6">
                                    <div>
                                        <p className="font-poppins text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                                            Bienfaits
                                        </h3>
                                        <ul className="space-y-2">
                                            {service.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="text-rose-400 mt-1">✓</span>
                                                    <span className="font-poppins text-gray-600">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                                            Indications
                                        </h3>
                                        <ul className="space-y-2">
                                            {service.indications.map((indication, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="text-sage-500 mt-1">•</span>
                                                    <span className="font-poppins text-gray-600">{indication}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Button href="/contact" variant="primary">
                        Réserver une séance
                    </Button>
                </motion.div>
            </Section>
        </div>
    );
}
