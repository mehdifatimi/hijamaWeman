'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { scaleOnHover } from '@/lib/animations';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function Card({ children, className = '', delay = 0 }: CardProps) {
    return (
        <motion.div
            className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
            initial="rest"
            whileHover="hover"
            variants={scaleOnHover}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
}
