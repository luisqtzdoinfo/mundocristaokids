
"use client";

import React from 'react';
import { Check, ShieldCheck, CreditCard, Clock, Gift, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Pricing = () => {
  return (
    <section id="ofertas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 px-4 py-1 text-sm font-bold animate-pulse">
            OFERTA LIMITADA
          </Badge>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">Escolha Sua Oferta Especial</h2>
          <p className="text-lg text-muted-foreground">Livros de qualidade profissional para enriquecer seus momentos de fé</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-3xl p-8 border-2 border-primary/10 flex flex-col h-full hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-2">Pacote Básico</h3>
            <div className="space-y-1 mb-8">
              <span className="text-lg line-through text-muted-foreground">R$ 47,00</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">R$ 10,00</span>
                <Badge className="bg-secondary text-secondary-foreground font-bold">-79%</Badge>
              </div>
              <p className="text-sm font-medium text-secondary">Você economiza R$ 37,00</p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "35 Livros de Colorir Completos",
                "Download Imediato",
                "Acesso Vitalício",
                "Garantia de 7 dias"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-xl h-14 font-bold">
              QUERO O PACOTE BÁSICO
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-primary rounded-3xl p-8 border-4 border-secondary flex flex-col h-full relative overflow-hidden shadow-2xl scale-105">
            <div className="absolute top-4 right-4">
              <Badge className="bg-secondary text-secondary-foreground font-bold">MAIS VENDIDO</Badge>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Pacote Premium</h3>
            <div className="space-y-1 mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">R$ 17,00</span>
              </div>
              <p className="text-sm font-medium text-secondary">Você economiza R$ 171,00</p>
            </div>

            <div className="bg-white/10 rounded-xl p-4 mb-6">
              <p className="text-sm font-bold text-white mb-3">TUDO DO PACOTE BÁSICO +</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-secondary shrink-0" />
                  <div className="text-white text-sm">
                    <p className="font-bold">BÔNUS 1: 5 Vídeos de Histórias Bíblicas</p>
                    <p className="text-xs opacity-70 line-through">97,00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-secondary shrink-0" />
                  <div className="text-white text-sm">
                    <p className="font-bold">BÔNUS 2: 18 Versículos Ilustrados</p>
                    <p className="text-xs opacity-70 line-through">39,00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-secondary shrink-0" />
                  <div className="text-white text-sm">
                    <p className="font-bold">BÔNUS 3: Calendário Bíblico Semanal</p>
                    <p className="text-xs opacity-70 line-through">35,00</p>
                  </div>
                </li>
              </ul>
            </div>

            <Button asChild size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl h-14 font-bold shadow-lg">
              <a href="https://ggcheckout.app/checkout/v3/HLKBRosd1dXgDQGxtaTu" target="_blank" rel="noopener noreferrer">
                QUERO O PACOTE PREMIUM
              </a>
            </Button>
          </div>
        </div>

        {/* Security badges */}
        <div className="mt-16 bg-primary/5 rounded-3xl p-8 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-primary font-bold">
              <ShieldCheck className="w-6 h-6" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold">
              <CreditCard className="w-6 h-6" />
              <span>Pagamento Facilitado</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold">
              <Clock className="w-6 h-6" />
              <span>Download Imediato</span>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            Aceitamos todos os cartões de crédito e PIX. Transação criptografada com SSL de 256 bits.
          </div>
        </div>
      </div>
    </section>
  );
};
