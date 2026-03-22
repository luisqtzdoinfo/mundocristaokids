'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Instagram, Check, Star, ShieldCheck, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SocialProofNotifications } from '@/components/social-proof-notifications';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');
  const books = [
    { id: 'noah-ark', title: 'A Arca de Noé', img: PlaceHolderImages.find(i => i.id === 'noah-ark') },
    { id: 'david-goliath', title: 'Davi e Golias', img: PlaceHolderImages.find(i => i.id === 'david-goliath') },
    { id: 'creation', title: 'A Criação do Mundo', img: PlaceHolderImages.find(i => i.id === 'creation') },
    { id: 'easter', title: 'Páscoa Cristã', img: PlaceHolderImages.find(i => i.id === 'easter') },
    { id: 'moses', title: 'Moisés', img: PlaceHolderImages.find(i => i.id === 'moses') },
    { id: 'jonah', title: 'Jonas e a Baleia', img: PlaceHolderImages.find(i => i.id === 'jonah') },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SocialProofNotifications />
      
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" />
            <span className="text-xl font-headline font-bold text-primary">Mundo Cristão Kids</span>
          </div>
          <Link href="https://instagram.com/mundocristao_kids" target="_blank">
            <Button variant="secondary" className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90 transition-opacity gap-2">
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary/5 overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h1 className="text-4xl lg:text-6xl font-headline font-black text-foreground leading-tight">
                Transforme o Tempo do Seu Filho em uma <span className="text-primary">Aventura Bíblica!</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Mais de 100 desenhos exclusivos para colorir que ensinam valores cristãos enquanto divertem. Baixe agora e comece a colorir hoje mesmo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform">
                  Quero Garantir Meu Acesso
                </Button>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  Compra 100% Segura
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-xl">
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={heroImage?.imageUrl || "https://i.postimg.cc/GmhnwSmf/Ekudb9t-Lyf6p1r-Sp-Ct-Dz-YLG20DMv-Z0k-VSu1DFct7.png"}
                  alt="Mundo Cristão Kids"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vitrine de Livros */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-headline font-bold mb-4">Conheça Nossa Coleção</h2>
              <p className="text-muted-foreground">Histórias clássicas da Bíblia ilustradas com amor para os pequenos.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {books.map((book) => (
                <div key={book.id} className="group cursor-pointer">
                  <div className="aspect-[3/4] relative rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <Image
                      src={book.img?.imageUrl || ""}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white font-bold text-sm">{book.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Ensino Lúdico', desc: 'Aprenda princípios bíblicos brincando.', icon: Star },
                { title: 'Acesso Imediato', desc: 'Receba o material via e-mail na hora.', icon: Download },
                { title: 'Exclusividade', desc: 'Desenhos criados especialmente para crianças.', icon: Check },
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-lg">
                  <CardContent className="pt-8 text-center space-y-4">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="text-lg font-headline font-bold text-primary">Mundo Cristão Kids</span>
          </div>
          <p className="text-muted-foreground text-sm">© 2026 Mundo Cristão Kids. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}