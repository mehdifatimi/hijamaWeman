import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-beige-100 border-t border-beige-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="relative h-24 w-64 mb-4">
                            <Image
                                src="/images/logo.png"
                                alt="Hijama Femmes"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="font-poppins text-gray-600 text-sm">
                            Centre de bien-être et de hijama thérapeutique exclusivement réservé aux femmes.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-4">
                            Liens Rapides
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="font-poppins text-gray-600 hover:text-rose-600 transition-colors duration-300 text-sm"
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="font-poppins text-gray-600 hover:text-rose-600 transition-colors duration-300 text-sm"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="font-poppins text-gray-600 hover:text-rose-600 transition-colors duration-300 text-sm"
                                >
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="font-poppins text-gray-600 hover:text-rose-600 transition-colors duration-300 text-sm"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-2 font-poppins text-gray-600 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-rose-500"><Mail size={16} /></span>
                                <a href="mailto:contact@hijama-femmes.fr" className="hover:text-rose-600 transition-colors">
                                    contact@hijama-femmes.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-rose-500"><Phone size={16} /></span>
                                <a href="tel:+33123456789" className="hover:text-rose-600 transition-colors">
                                    o762818313
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-rose-500"><MapPin size={16} /></span>
                                <span className="text-gray-600">marrakech, Maroc</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-beige-200 text-center">
                    <p className="font-poppins text-gray-600 text-sm">
                        © {currentYear} Hijama Femmes. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
