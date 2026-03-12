import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ConsoleOutput = ({ logs, clearLogs }) => {
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="flex flex-col h-full bg-dark-900/80 rounded-xl border border-dark-700/50 overflow-hidden shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-2 border-b border-dark-700/50 bg-dark-800/50">
        <span className="text-xs font-bold uppercase tracking-widest text-dark-400">Console Output</span>
        <button
          onClick={clearLogs}
          className="text-[10px] text-dark-400 hover:text-white transition-colors uppercase tracking-wider font-bold"
        >
          Clear
        </button>
      </div>
      <div 
        ref={scrollRef}
        className="flex-1 p-4 font-mono text-sm overflow-y-auto space-y-2 custom-scrollbar"
      >
        {logs.length === 0 ? (
          <span className="text-dark-500 italic">No output yet. Run your code to see results.</span>
        ) : (
          <AnimatePresence initial={false}>
            {logs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`py-1 ${log.type === 'error' ? 'text-red-400' : 'text-primary-300'}`}
              >
                <span className="text-dark-600 mr-2">[{log.timestamp}]</span>
                <span className="whitespace-pre-wrap">{String(log.content)}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default ConsoleOutput;
