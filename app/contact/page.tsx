'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/ContactForm';
import Button from '@/components/ui/Button';

export default function ContactPage() {
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
                        Prendre Rendez-vous
                    </motion.h1>
                    <motion.p
                        className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Contactez-nous pour réserver votre séance de hijama ou pour toute question
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Contact Info */}
                    <motion.div
                        className="space-y-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                    >
                        <div>
                            <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-6">
                                Informations de Contact
                            </h2>
                            <p className="font-poppins text-gray-600 mb-8">
                                N'hésitez pas à nous contacter par téléphone, email ou WhatsApp. Nous serons ravies de répondre à vos questions et de vous accompagner.
                            </p>
                        </div>

                        <Card>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">📱</div>
                                    <div>
                                        <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-1">
                                            Téléphone
                                        </h3>
                                        <a
                                            href="tel:+33123456789"
                                            className="font-poppins text-rose-500 hover:text-rose-600 transition-colors"
                                        >
                                            01 23 45 67 89
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">📧</div>
                                    <div>
                                        <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-1">
                                            Email
                                        </h3>
                                        <a
                                            href="mailto:contact@hijama-femmes.fr"
                                            className="font-poppins text-rose-500 hover:text-rose-600 transition-colors"
                                        >
                                            contact@hijama-femmes.fr
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">📍</div>
                                    <div>
                                        <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-1">
                                            Adresse
                                        </h3>
                                        <p className="font-poppins text-gray-600">
                                            Paris, France
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button href="https://wa.me/33123456789" variant="whatsapp" className="w-full">
                                        Contactez-nous sur WhatsApp
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                                Horaires d'ouverture
                            </h3>
                            <div className="space-y-3 font-poppins text-gray-600">
                                <div className="flex justify-between">
                                    <span>Lundi - Vendredi</span>
                                    <span className="font-medium">9h00 - 18h00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Samedi</span>
                                    <span className="font-medium">10h00 - 16h00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Dimanche</span>
                                    <span className="font-medium">Fermé</span>
                                </div>
                            </div>
                            <p className="font-poppins text-sm text-gray-500 mt-4">
                                * Sur rendez-vous uniquement
                            </p>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </div>
    );
}
