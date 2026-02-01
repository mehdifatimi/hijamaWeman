'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, slideUp } from '@/lib/animations';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

export default function Services() {
    return (
        <Section className="bg-beige-50">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <motion.div className="text-center mb-16" variants={slideUp}>
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Nos Services
                    </h2>
                    <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
                        Choisissez le type de hijama adapté à vos besoins et à vos objectifs de bien-être
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <motion.div key={service.id} variants={slideUp}>
                            <Card delay={index * 0.15} className="h-full flex flex-col">
                                <div className="text-center mb-4">
                                    <div className="text-5xl mb-4">{service.icon}</div>
                                    <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="font-poppins text-sm text-rose-500 mb-4">
                                        {service.subtitle}
                                    </p>
                                </div>
                                <p className="font-poppins text-gray-600 mb-6 flex-grow">
                                    {service.description}
                                </p>
                                <div className="mt-auto">
                                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-poppins">{service.duration}</span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="text-center" variants={slideUp}>
                    <Button href="/services" variant="primary">
                        Découvrir tous nos services
                    </Button>
                </motion.div>
            </motion.div>
        </Section>
    );
}
