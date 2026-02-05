import { Users, Sparkles, GraduationCap, Heart, Flower2, ClipboardList } from 'lucide-react';
import React from 'react';

export interface WhyUsItem {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const whyUsItems: WhyUsItem[] = [
    {
        id: 1,
        title: "100% Espace Femmes",
        description: "Un environnement exclusivement réservé aux femmes pour votre confort et votre intimité.",
        icon: <Users size={48} className="text-rose-500" />
    },
    {
        id: 2,
        title: "Hygiène Stricte",
        description: "Matériel stérile à usage unique et protocoles d'hygiène rigoureux pour votre sécurité.",
        icon: <Sparkles size={48} className="text-rose-500" />
    },
    {
        id: 3,
        title: "Praticienne Certifiée",
        description: "Formée et certifiée en hijama thérapeutique avec plusieurs années d'expérience.",
        icon: <GraduationCap size={48} className="text-rose-500" />
    },
    {
        id: 4,
        title: "Approche Respectueuse",
        description: "Écoute attentive, respect de votre pudeur et accompagnement personnalisé.",
        icon: <Heart size={48} className="text-rose-500" />
    },
    {
        id: 5,
        title: "Cadre Apaisant",
        description: "Un espace calme et chaleureux conçu pour favoriser votre détente et votre bien-être.",
        icon: <Flower2 size={48} className="text-rose-500" />
    },
    {
        id: 6,
        title: "Suivi Personnalisé",
        description: "Conseils adaptés à vos besoins et suivi régulier pour optimiser les résultats.",
        icon: <ClipboardList size={48} className="text-rose-500" />
    }
];
