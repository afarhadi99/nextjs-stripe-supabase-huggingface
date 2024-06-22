'use client'
import { useState } from 'react';
import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="bg-card px-4 py-3 border-b border-border">
        <div className="flex items-center justify-between max-w-xl mx-auto">
          <div className="flex items-center gap-2">
            <img src="https://pbs.twimg.com/profile_images/1670152885328392195/TiNnmoap_400x400.jpg" alt="Chatbot" className="w-8 h-8 border" />
            <div className="font-medium">Chatbot</div>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto px-4 py-6 max-w-xl mx-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="flex items-start gap-3">
              <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt={message.role} className="w-8 h-8 border" />
              <div className={`bg-card p-3 rounded-lg max-w-[75%] ${message.role === 'user' ? '' : 'bg-primary text-primary-foreground justify-end'}`}>
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-card px-4 py-3 border-t border-border">
        <form onSubmit={handleSubmit} className="flex items-center max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 mr-2 rounded-lg bg-muted px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={input}
            onChange={handleInputChange}
          />
          <button type="submit" className="rounded-lg px-4 py-2">
            Send
          </button>
        </form>
      </footer>
    </div>
  );
}
