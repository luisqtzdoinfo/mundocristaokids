
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Instagram } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Sparkles className="text-white w-6 h-6" />
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
