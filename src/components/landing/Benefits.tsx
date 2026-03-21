
"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: "Valores Cristãos Sólidos",
    desc: "Histórias bíblicas cuidadosamente adaptadas que ensinam amor, fé, perdão e bondade de forma natural e memorável"
  },
  {
    title: "Desenvolvimento Completo",
    desc: "Estimula criatividade, coordenação motora fina, concentração e habilidades cognitivas essenciais para o crescimento"
  },
  {
    title: "Tempo de Qualidade",
    desc: "Momentos especiais em família longe das telas, fortalecendo vínculos e criando memórias duradouras"
  },
  {
    title: "Acesso Vitalício",
    desc: "Download instantâneo após compra, imprima ilimitadamente, use offline, sem dependência de internet"
  },
  {
    title: "Conteúdo Seguro",
    desc: "Material 100% cristão, livre de violência, desenvolvido por educadores cristãos experientes"
  },
  {
    title: "Qualidade Premium",
    desc: "Ilustrações profissionais, alta resolução para impressão, papel e formato otimizados para crianças"
  }
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">Benefícios Únicos e Comprovados</h2>
          <p className="text-lg text-muted-foreground">Para o desenvolvimento das crianças</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-1">
                <CheckCircle2 className="w-6 h-6 text-secondary fill-secondary/10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
