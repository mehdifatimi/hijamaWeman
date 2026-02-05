'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { slideUp } from '@/lib/animations';
import Button from '@/components/ui/Button';

export default function ContactForm() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        const serviceParam = searchParams.get('service');
        if (serviceParam) {
            // Convert title to value format: "Hijama Sèche" -> "hijama-seche"
            const formattedService = serviceParam.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
                .replace(/\s+/g, '-'); // Replace spaces with hyphens

            // Check if it's a valid option
            const validServices = ['hijama-seche', 'hijama-humide', 'hijama-relaxante'];
            if (validServices.includes(formattedService)) {
                setFormData(prev => ({ ...prev, service: formattedService }));
            }
        }
    }, [searchParams]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Le nom est requis';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email invalide';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Le téléphone est requis';
        }

        if (!formData.service) {
            newErrors.service = 'Veuillez sélectionner un service';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Le message est requis';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            // Here you would typically send the form data to your backend
            console.log('Form submitted:', formData);
            alert('Merci pour votre message ! Nous vous contacterons bientôt.');

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        }
    };

    const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all duration-300 font-poppins";
    const labelClasses = "block font-poppins font-medium text-gray-700 mb-2";
    const errorClasses = "text-red-500 text-sm mt-1 font-poppins";

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
        >
            <div className="space-y-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className={labelClasses}>
                        Nom complet *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Votre nom"
                    />
                    {errors.name && <p className={errorClasses}>{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className={labelClasses}>
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="votre@email.com"
                    />
                    {errors.email && <p className={errorClasses}>{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className={labelClasses}>
                        Téléphone *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="06 12 34 56 78"
                    />
                    {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
                </div>

                {/* Service */}
                <div>
                    <label htmlFor="service" className={labelClasses}>
                        Service souhaité *
                    </label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={inputClasses}
                    >
                        <option value="">Sélectionnez un service</option>
                        <option value="hijama-seche">Hijama Sèche</option>
                        <option value="hijama-humide">Hijama Humide</option>
                        <option value="hijama-relaxante">Hijama Relaxante</option>
                    </select>
                    {errors.service && <p className={errorClasses}>{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className={labelClasses}>
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={inputClasses}
                        placeholder="Parlez-nous de vos besoins..."
                    />
                    {errors.message && <p className={errorClasses}>{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <Button type="submit" variant="primary" className="w-full">
                        Envoyer la demande
                    </Button>
                </div>
            </div>
        </motion.form>
    );
}
