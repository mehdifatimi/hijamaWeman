'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, slideUp } from '@/lib/animations';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { whyUsItems } from '@/data/whyUs';

export default function WhyUs() {
    return (
        <Section className="bg-white">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <motion.div className="text-center mb-16" variants={slideUp}>
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Pourquoi Nous Choisir
                    </h2>
                    <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
                        Un espace dédié au bien-être des femmes, alliant professionnalisme, respect et bienveillance
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whyUsItems.map((item, index) => (
                        <motion.div key={item.id} variants={slideUp}>
                            <Card delay={index * 0.1}>
                                <div className="text-center">
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                    <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="font-poppins text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
