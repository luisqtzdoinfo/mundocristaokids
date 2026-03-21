
"use client";

import React from 'react';
import { Users, School, Heart, ShieldCheck, Sparkles, Calendar } from 'lucide-react';

const uses = [
  {
    icon: Users,
    title: "Células e Grupos",
    desc: "Transforme suas células em momentos especiais! Engaje crianças e fortaleça vínculos familiares com atividades que ensinam enquanto divertem."
  },
  {
    icon: School,
    title: "Escola Dominical",
    desc: "Revolucione suas aulas! Recursos visuais profissionais que tornam o aprendizado bíblico interativo, memorável e cheio de significado."
  },
  {
    icon: Heart,
    title: "Devocional Familiar",
    desc: "Crie tradições duradouras! Fortaleça a fé em família com momentos especiais que ensinam valores cristãos de forma natural e divertida."
  },
  {
    icon: ShieldCheck,
    title: "Ministério Infantil",
    desc: "Potencialize seu ministério! Material profissional que facilita o ensino bíblico e mantém as crianças atentas e participativas."
  },
  {
    icon: Sparkles,
    title: "Aconselhamento",
    desc: "Ferramenta terapêutica! Ajude crianças a expressarem sentimentos e aprender valores através da arte e reflexão bíblica."
  },
  {
    icon: Calendar,
    title: "Eventos Especiais",
    desc: "Momentos únicos! Ideal para retiros, acampamentos, festivais e eventos especiais da igreja com atividades que marcam vidas."
  }
];

export const WhereToUse = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">Onde Usar Nossos Livros</h2>
          <p className="text-lg text-muted-foreground">Versatilidade comprovada em diversos contextos cristãos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uses.map((use, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-primary/5 group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <use.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{use.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{use.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
