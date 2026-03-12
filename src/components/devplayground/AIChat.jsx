import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIChat = ({ messages, isLoading, onSendMessage }) => {
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full rounded-xl border border-dark-700/50 bg-dark-800/30 overflow-hidden shadow-lg backdrop-blur-md">
      <div className="flex items-center gap-2 px-4 py-3 bg-dark-800/80 border-b border-dark-700/50">
        <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
        <span className="text-sm font-bold text-primary-400 uppercase tracking-widest">AI Code Assistant</span>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 min-h-0 p-4 overflow-y-auto space-y-4 custom-scrollbar"
      >
        {messages.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-sm text-dark-500 italic px-6">
              I can help you explain code, debug issues, or suggest improvements. Ask me anything!
            </p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                    ? 'bg-primary-600 text-white rounded-tr-none'
                    : 'bg-dark-700/50 text-gray-200 border border-dark-600 rounded-tl-none'
                  }`}
              >
                <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
              </div>
            </motion.div>
          ))
        )}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-dark-700/50 p-3 rounded-2xl rounded-tl-none border border-dark-600">
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1.5 h-1.5 bg-primary-400 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-dark-800/50 border-t border-dark-700/50">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AI about your code..."
            className="w-full bg-dark-900/80 text-gray-200 text-sm rounded-xl py-3 px-4 pr-12 border border-dark-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary-500 disabled:text-dark-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIChat;
