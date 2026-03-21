
"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: "Como recebo os livros?", a: "Imediatamente após a confirmação do pagamento, você receberá um link de download em seu e-mail cadastrado." },
  { q: "Posso imprimir quantas vezes quiser?", a: "Sim! Como o acesso é vitalício e o arquivo é seu, você pode imprimir quantas vezes desejar para uso pessoal ou no ministério." },
  { q: "Qual a faixa etária recomendada?", a: "Nossos livros são projetados para crianças de 3 a 10 anos, com diferentes níveis de complexidade nas ilustrações." },
  { q: "Os arquivos funcionam em qualquer impressora?", a: "Sim, os arquivos estão em formato PDF de alta resolução, compatíveis com qualquer impressora doméstica ou profissional." },
  { q: "Preciso de internet para usar os livros?", a: "Apenas para fazer o download inicial. Depois disso, você pode salvá-los em seu dispositivo e usar offline." },
  { q: "Como funciona a garantia de 7 dias?", a: "Se por qualquer motivo você não estiver satisfeita, basta nos enviar um e-mail ou mensagem no WhatsApp e devolveremos 100% do seu dinheiro." },
  { q: "Que tipo de papel devo usar?", a: "Recomendamos papel sulfite comum (75g ou 90g) para lápis de cor e giz de cera. Para canetinha, um papel de gramatura maior (120g) é melhor." },
  { q: "Os livros têm versículos bíblicos?", a: "Sim! Todas as histórias acompanham versículos chave ou breves explicações bíblicas para auxiliar no ensino." }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">Dúvidas Frequentes</h2>
          <p className="text-lg text-muted-foreground">Tudo o que você precisa saber sobre o Luz do Céu Kids</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
