export interface Benefit {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export const benefits: Benefit[] = [
    {
        id: 1,
        title: "Amélioration de la circulation",
        description: "Stimule la circulation sanguine et lymphatique pour une meilleure oxygénation des tissus.",
        icon: "💓"
    },
    {
        id: 2,
        title: "Réduction du stress",
        description: "Favorise la relaxation profonde et aide à réduire l'anxiété et les tensions nerveuses.",
        icon: "🧘‍♀️"
    },
    {
        id: 3,
        title: "Détox naturelle",
        description: "Élimine les toxines et purifie l'organisme de manière naturelle et douce.",
        icon: "✨"
    },
    {
        id: 4,
        title: "Soulagement des douleurs",
        description: "Atténue les douleurs musculaires, articulaires et les maux de tête chroniques.",
        icon: "🌸"
    },
    {
        id: 5,
        title: "Renforcement immunitaire",
        description: "Stimule le système immunitaire et améliore la résistance naturelle du corps.",
        icon: "🛡️"
    },
    {
        id: 6,
        title: "Équilibre hormonal",
        description: "Aide à réguler les déséquilibres hormonaux et améliore le bien-être général.",
        icon: "⚖️"
    }
];
