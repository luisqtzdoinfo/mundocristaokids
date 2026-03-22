
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, Home, Heart, BookOpen, ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Hero = () => {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section className="relative overflow-hidden bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold">
              <Star className="w-4 h-4 fill-secondary" />
              <span>Oferta Exclusiva: 35 Livros de Colorir</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
              Transforme momentos especiais com sua <span className="text-primary underline decoration-secondary">família, célula e escola dominical</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Histórias bíblicas cuidadosamente ilustradas para ensinar valores cristãos de forma lúdica e educativa para suas crianças.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-primary/10">
                <Star className="text-primary w-5 h-5" />
                <span className="font-medium">Células</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-primary/10">
                <Home className="text-primary w-5 h-5" />
                <span className="font-medium">Escola Dominical</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-primary/10">
                <Heart className="text-primary w-5 h-5" />
                <span className="font-medium">Devocional Familiar</span>
              </div>
            </div>

            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-all">
              <a href="#ofertas">
                QUERO VER AS OFERTAS
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="relative animate-in slide-in-from-right duration-700">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src={heroImg?.imageUrl || ''} 
                alt={heroImg?.description || ''}
                fill
                className="object-cover object-top"
                data-ai-hint={heroImg?.imageHint}
              />
            </div>
            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 p-4 bg-white rounded-xl shadow-lg border border-primary/10 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold">35 Livros</p>
                  <p className="text-xs text-muted-foreground">Download Imediato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
