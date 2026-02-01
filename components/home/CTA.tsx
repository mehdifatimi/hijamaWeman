'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function CTA() {
    return (
        <Section className="bg-gradient-to-br from-rose-100 via-beige-100 to-sage-100">
            <motion.div
                className="text-center max-w-4xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideUp}
            >
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Prête à Prendre Soin de Vous ?
                </h2>
                <p className="font-poppins text-lg text-gray-600 mb-10">
                    Réservez votre séance de hijama et offrez-vous un moment de bien-être et de détente dans un cadre bienveillant et professionnel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button href="/contact" variant="primary">
                        Prendre Rendez-vous
                    </Button>
                    <Button href="https://wa.me/33123456789" variant="whatsapp">
                        Contactez-nous sur WhatsApp
                    </Button>
                </div>
            </motion.div>
        </Section>
    );
}
