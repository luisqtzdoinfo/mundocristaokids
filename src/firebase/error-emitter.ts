import { EventEmitter } from 'events';

// Simples emissor para navegadores que não suportam 'events' nativamente
class SimpleEmitter {
  private listeners: { [event: string]: Function[] } = {};

  on(event: string, listener: Function) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(listener);
  }

  off(event: string, listener: Function) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(l => l !== listener);
  }

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach(l => l(...args));
  }
}

export const errorEmitter = new SimpleEmitter();
