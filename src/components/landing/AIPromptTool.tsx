
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { generateCreativeColoringPrompt } from '@/ai/flows/ai-creative-coloring-prompt-generator-flow';
import { Sparkles, Loader2, BookOpen, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const AIPromptTool = () => {
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [prompts, setPrompts] = useState<string[]>([]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;
    
    setLoading(true);
    try {
      const result = await generateCreativeColoringPrompt({ topic, details });
      setPrompts(result.prompts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Ferramenta de Inspiração IA</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold">Crie Novas Ideias para Colorir</h2>
            <p className="text-lg text-muted-foreground">
              Nossa inteligência artificial ajuda você a criar ideias personalizadas para desenhos bíblicos. Digite um tema e veja a mágica acontecer!
            </p>
            
            <form onSubmit={handleGenerate} className="space-y-4 bg-white p-6 rounded-2xl shadow-xl border border-primary/10">
              <div className="space-y-2">
                <label className="text-sm font-bold">Tópico Bíblico</label>
                <Input 
                  placeholder="Ex: A Parábola do Bom Samaritano" 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="bg-muted/50 border-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Detalhes Extras (Opcional)</label>
                <Textarea 
                  placeholder="Ex: Inclua muitos animais e flores..." 
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="bg-muted/50 border-primary/20"
                />
              </div>
              <Button 
                type="submit" 
                disabled={loading || !topic}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-12"
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                GERAR IDEIAS CRIATIVAS
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            {prompts.length > 0 ? (
              <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-5 duration-500">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <BookOpen className="text-primary" />
                  Suas Ideias Personalizadas:
                </h3>
                {prompts.map((prompt, i) => (
                  <Card key={i} className="border-l-4 border-l-primary shadow-md">
                    <CardContent className="p-4 italic text-muted-foreground">
                      "{prompt}"
                    </CardContent>
                  </Card>
                ))}
                <p className="text-xs text-muted-foreground mt-4">
                  *Use estas descrições para imaginar ou até mesmo guiar crianças em desenhos livres!
                </p>
              </div>
            ) : (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 bg-white/50 rounded-2xl border-2 border-dashed border-primary/20">
                <Sparkles className="w-16 h-16 text-primary/20 mb-4" />
                <p className="text-muted-foreground font-medium">As ideias geradas aparecerão aqui...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
