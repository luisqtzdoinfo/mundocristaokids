
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const books = [
  { id: 'noah-ark', title: 'A Arca de Noé' },
  { id: 'david-goliath', title: 'Davi e Golias' },
  { id: 'creation', title: 'A Criação do Mundo' },
  { id: 'easter', title: 'Páscoa Cristã' },
  { id: 'moses', title: 'Moisés' },
  { id: 'jonah', title: 'Jonas e a Baleia' },
];

export const BookShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">Conheça Nossos Livros Cristãos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias bíblicas cuidadosamente ilustradas para ensinar valores cristãos de forma lúdica e educativa
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {books.map((book) => {
            const img = PlaceHolderImages.find(i => i.id === book.id);
            return (
              <div key={book.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 border-4 border-muted">
                  <Image
                    src={img?.imageUrl || ''}
                    alt={book.title}
                    fill
                    className="object-cover"
                    data-ai-hint={img?.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm font-bold">{book.title}</span>
                  </div>
                </div>
                <p className="mt-3 text-center font-medium group-hover:text-primary transition-colors">{book.title}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {['Adão e Eva', 'Pedro Discípulo', 'Cristão Menina', 'Cristão Menino', 'Yeshua'].map((tag) => (
            <Badge key={tag} variant="outline" className="px-4 py-2 text-sm border-primary/20 bg-primary/5">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
