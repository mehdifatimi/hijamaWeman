export interface Service {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    indications: string[];
    duration: string;
    icon: string;
}

export const services: Service[] = [
    {
        id: 1,
        title: "Hijama Sèche",
        subtitle: "Thérapie par ventouses sans incision",
        description: "La hijama sèche utilise des ventouses pour créer une aspiration sur la peau sans effectuer d'incisions. Cette technique stimule la circulation sanguine et détend les muscles en profondeur.",
        benefits: [
            "Améliore la circulation locale",
            "Détend les muscles tendus",
            "Réduit les inflammations",
            "Soulage les douleurs musculaires"
        ],
        indications: [
            "Douleurs musculaires et articulaires",
            "Tensions cervicales et dorsales",
            "Migraines et maux de tête",
            "Fatigue chronique"
        ],
        duration: "45 minutes",
        icon: "🌿"
    },
    {
        id: 2,
        title: "Hijama Humide",
        subtitle: "Thérapie traditionnelle de détoxification",
        description: "La hijama humide combine l'application de ventouses avec de légères incisions superficielles pour permettre l'élimination des toxines et du sang stagnant. C'est la méthode traditionnelle la plus complète.",
        benefits: [
            "Détoxification profonde de l'organisme",
            "Purification du sang",
            "Renforcement du système immunitaire",
            "Équilibre énergétique global"
        ],
        indications: [
            "Détoxification générale",
            "Troubles circulatoires",
            "Déséquilibres hormonaux",
            "Renforcement immunitaire"
        ],
        duration: "60 minutes",
        icon: "💫"
    },
    {
        id: 3,
        title: "Hijama Relaxante",
        subtitle: "Bien-être et détente profonde",
        description: "Une séance de hijama douce axée sur la relaxation et le bien-être. Idéale pour les personnes découvrant la hijama ou recherchant un moment de détente et de lâcher-prise.",
        benefits: [
            "Relaxation profonde du corps et de l'esprit",
            "Réduction du stress et de l'anxiété",
            "Amélioration de la qualité du sommeil",
            "Sensation de légèreté et de bien-être"
        ],
        indications: [
            "Stress et anxiété",
            "Troubles du sommeil",
            "Fatigue nerveuse",
            "Besoin de détente"
        ],
        duration: "50 minutes",
        icon: "🌸"
    }
];
