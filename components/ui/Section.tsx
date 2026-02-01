'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
    return (
        <motion.section
            id={id}
            className={`py-20 px-4 md:px-8 ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </motion.section>
    );
}
