'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div key={service.id} variants={slideUp}>
                                <Card delay={index * 0.2} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 overflow-hidden items-center p-0 rounded-3xl border-none shadow-xl hover:shadow-2xl ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Image Section */}
                                    <div className="lg:w-1/2 relative h-[400px] lg:h-[500px] w-full overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Content Section */}
                                    <div className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-12">
                                        <div className="mb-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-4xl bg-gold-50 text-gold-600 p-4 rounded-full shadow-sm border border-gold-100">{service.icon}</span>
                                                <div>
                                                    <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                                                        {service.title}
                                                    </h2>
                                                    <div className="w-16 h-1 bg-gold-400 mt-2 rounded-full"></div>
                                                </div>
                                            </div>
                                            <p className="font-poppins text-gold-600 mb-4 text-lg font-medium tracking-wide uppercase text-sm">
                                                {service.subtitle}
                                            </p>
                                            <div className="inline-flex items-center gap-2 text-gray-500 text-sm bg-beige-50 px-4 py-2 rounded-full border border-beige-100">
                                                <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="font-poppins uppercase tracking-wider text-xs font-semibold">{service.duration}</span>
                                            </div>
                                        </div>

                                        <div className="grow space-y-8">
                                            <p className="font-playfair text-gray-600 leading-relaxed text-lg italic">
                                                &quot;{service.description}&quot;
                                            </p>

                                            <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-beige-100">
                                                <div>
                                                    <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                                                        Bienfaits
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {service.benefits.map((benefit, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-poppins group">
                                                                <span className="text-gold-400 mt-1 transition-transform group-hover:scale-110">✦</span>
                                                                <span>{benefit}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-sage-400"></span>
                                                        Indications
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {service.indications.map((indication, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-poppins group">
                                                                <span className="text-sage-400 mt-1 transition-transform group-hover:scale-110">●</span>
                                                                <span>{indication}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-10 pt-6 flex items-center">
                                            <Button
                                                href={`/contact?service=${encodeURIComponent(service.title)}`}
                                                variant="outline"
                                                className="w-full sm:w-auto px-10 py-4 border-2 border-gold-400 text-gold-700 hover:bg-gold-50 hover:border-gold-500 font-medium tracking-wide transition-all duration-300"
                                            >
                                                Prendre Rendez-vous
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
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
