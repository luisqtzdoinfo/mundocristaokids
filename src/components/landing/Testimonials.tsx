
"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const reviews = [
  { name: 'Sara Pereira', text: 'Meus filhos amam! As ilustrações são lindas e os versículos ajudam muito no aprendizado.', rating: 5 },
  { name: 'Ludyany Guimarães', text: 'Material excelente para a escola dominical. As crianças ficam super concentradas.', rating: 5 },
  { name: 'Luciana', text: 'Melhor investimento para o devocional em família. Super recomendo!', rating: 5 },
  { name: 'Ana Souza', text: 'As atividades são muito bem pensadas. O download foi imediato.', rating: 5 },
  { name: 'Mariana Costa', text: 'Qualidade incrível para impressão. Ficou perfeito no papel comum.', rating: 5 },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">Depoimentos Reais</h2>
          <div className="flex items-center justify-center gap-1 text-yellow-500">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
            <span className="ml-2 text-xl font-bold text-foreground">4,9/5</span>
          </div>
          <p className="text-muted-foreground">Baseado em mais de 347 avaliações de clientes satisfeitos</p>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-scroll md:animate-none md:grid md:grid-cols-3">
            {reviews.map((review, i) => (
              <div key={i} className="min-w-[300px] bg-white p-8 rounded-2xl shadow-sm border border-primary/5 relative">
                <Quote className="absolute top-4 right-4 text-primary/10 w-12 h-12" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`} />
                    <AvatarFallback>{review.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-bold">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
