
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center border-2 border-white shadow-sm overflow-hidden transition-transform group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14.81 8.62L22 9.24L16.5 13.97L18.18 21L12 17.27L5.82 21L7.5 13.97L2 9.24L9.19 8.62L12 2Z"
                className="fill-primary stroke-white stroke-[1]"
                strokeLinejoin="round"
              />
              <circle cx="17.5" cy="7.5" r="1.2" fill="white" className="animate-pulse" />
            </svg>
          </div>
          <span className="text-xl font-headline font-bold text-primary">Mundo Cristão Kids</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#ofertas" className="text-sm font-medium hover:text-primary transition-colors">Ofertas</Link>
          <Link href="#beneficios" className="text-sm font-medium hover:text-primary transition-colors">Benefícios</Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">Dúvidas</Link>
          <Button asChild className="gap-2 bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white hover:opacity-90 border-none">
            <Link href="https://www.instagram.com/mundocristãokids">
              <Instagram className="w-4 h-4" />
              Instagram
            </Link>
          </Button>
        </nav>
        <Button variant="ghost" className="md:hidden">Menu</Button>
      </div>
    </header>
  );
};
