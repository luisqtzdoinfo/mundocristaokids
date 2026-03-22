'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const names = ['Terezinha', 'João', 'Maria', 'Carlos', 'Fernanda', 'Rafael', 'Juliana', 'Marcos', 'Camila', 'Beatriz', 'Ricardo', 'Leticia'];
const actions = ['acabou de comprar', 'garantiu agora', 'acabou de adquirir', 'acabou de acessar'];
const products = ['pacote premium', 'pacote básico', '35 livros + bônus', 'acesso completo', 'material com bônus'];

export function SocialProofNotifications() {
  const [notification, setNotification] = useState<{ name: string; action: string; product: string } | null>(null);

  useEffect(() => {
    const showRandomNotification = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];
      const product = products[Math.floor(Math.random() * products.length)];
      
      setNotification({ name, action, product });

      setTimeout(() => {
        setNotification(null);
      }, 4000); // Visível por 4 segundos
    };

    const interval = setInterval(() => {
      showRandomNotification();
    }, Math.floor(Math.random() * (12000 - 7000 + 1) + 7000)); // Intervalo entre 7 e 12 segundos

    // Primeira notificação após 3 segundos
    const initialTimeout = setTimeout(showRandomNotification, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-[100] pointer-events-none flex flex-col items-end gap-2 max-w-[90vw] sm:max-w-md">
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white/95 backdrop-blur-sm border border-border shadow-lg rounded-xl p-3 flex items-center gap-3 pointer-events-auto"
          >
            <div className="bg-green-100 p-1.5 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-sm text-foreground leading-tight">
              <span className="font-bold">{notification.name}</span> {notification.action}{' '}
              <span className="font-semibold text-primary">{notification.product}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}