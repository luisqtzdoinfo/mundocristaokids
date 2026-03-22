
"use client";

import React from 'react';
import { MessageCircle, Instagram, Facebook, Mail } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/20 transition-transform group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 drop-shadow-sm"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L14.81 8.62L22 9.24L16.5 13.97L18.18 21L12 17.27L5.82 21L7.5 13.97L2 9.24L9.19 8.62L12 2Z"
                    className="fill-white stroke-primary stroke-[0.75]"
                    strokeLinejoin="round"
                  />
                  <circle cx="17.5" cy="7.5" r="1.2" fill="#4F96CC" className="opacity-80" />
                </svg>
              </div>
              <span className="text-2xl font-headline font-bold">Mundo Cristão Kids</span>
            </Link>
            <p className="text-white/80 leading-relaxed">
              Educação cristã com amor e diversão para suas crianças. Fortalecendo a fé através da arte e criatividade.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link href="#ofertas" className="hover:text-secondary transition-colors">Ver Ofertas</Link></li>
              <li><Link href="#beneficios" className="hover:text-secondary transition-colors">Benefícios</Link></li>
              <li><Link href="#faq" className="hover:text-secondary transition-colors">Dúvidas Frequentes</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Suporte</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-secondary" />
                <Link href="https://wa.me/5500000000000" className="hover:text-secondary transition-colors">WhatsApp Suporte</Link>
              </li>
              <li>E-mail: suporte@mundocristãokids.com.br</li>
              <li>Segunda a Sexta, 09h às 18h</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-white/70">Receba dicas de educação cristã e novos lançamentos.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 flex-grow text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-bold hover:bg-secondary/90 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center text-sm text-white/60">
          <p>© 2026 Mundo Cristão Kids. Todos os direitos reservados. Desenvolvido com ❤️ para famílias cristãs.</p>
        </div>
      </div>
    </footer>
  );
};
