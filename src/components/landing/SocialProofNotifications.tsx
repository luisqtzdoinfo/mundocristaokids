
"use client";

import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAMES = [
  'Terezinha', 'João', 'Maria', 'Carlos', 'Fernanda', 'Rafael', 'Juliana', 
  'Marcos', 'Camila', 'Luciana', 'Ricardo', 'Beatriz', 'Sonia', 'Paulo',
  'Adriana', 'Marcelo', 'Eliane', 'Gustavo', 'Patrícia', 'Fernando'
];

const ACTIONS = [
  'acabou de comprar',
  'garantiu agora',
  'acabou de adquirir',
  'garantiu o seu',
  'recebeu o acesso'
];

const PRODUCTS = [
  'o pacote premium',
  'o pacote básico',
  '35 livros + bônus',
  'o acesso completo',
  'material com bônus'
];

interface NotificationData {
  id: number;
  message: string;
}

export const SocialProofNotifications = () => {
  const [notification, setNotification] = useState<NotificationData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const showNextNotification = () => {
      // Gerar dados aleatórios
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
      const product = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
      
      setNotification({
        id: Date.now(),
        message: `✅ ${name} ${action} ${product}`
      });
      
      setIsVisible(true);

      // Tempo visível: 3 a 5 segundos
      const visibleTime = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
      
      setTimeout(() => {
        setIsVisible(false);
        
        // Intervalo para a próxima: 5 a 12 segundos
        const nextInterval = Math.floor(Math.random() * (12000 - 5000 + 1)) + 5000;
        timeoutId = setTimeout(showNextNotification, nextInterval);
      }, visibleTime);
    };

    // Iniciar após um pequeno delay inicial
    timeoutId = setTimeout(showNextNotification, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!notification) return null;

  return (
    <div 
      className={cn(
        "fixed top-20 right-4 z-[100] transition-all duration-500 transform pointer-events-none",
        isVisible 
          ? "opacity-100 translate-x-0" 
          : "opacity-0 translate-x-10"
      )}
    >
      <div className="bg-white/95 backdrop-blur-sm border border-primary/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] rounded-2xl p-4 flex items-center gap-3 max-w-[280px] md:max-w-[320px]">
        <div className="bg-secondary/20 p-2 rounded-full shrink-0">
          <CheckCircle2 className="w-5 h-5 text-secondary" />
        </div>
        <p className="text-sm font-medium text-foreground leading-snug">
          {notification.message}
        </p>
      </div>
    </div>
  );
};
