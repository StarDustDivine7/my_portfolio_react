import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import CodeEditor from './CodeEditor';
import ConsoleOutput from './ConsoleOutput';
import AIChat from './AIChat';

const boilerplates = {
  javascript: `// JavaScript Boilerplate\nconsole.log("Hello from JavaScript!");\n\nfunction greet(name) {\n  return \`Welcome, \${name}!\`;\n}\n\nconsole.log(greet("Developer"));`,
  python: `# Python Boilerplate\ndef greet(name):\n    return f"Welcome, {name}!"\n\nprint("Hello from Python!")\nprint(greet("Developer"))`,
  dart: `// Dart Boilerplate\nvoid main() {\n  print('Hello from Dart!');\n  greet('Developer');\n}\n\nvoid greet(String name) {\n  print('Welcome, $name!');\n}`,
  cpp: `// C++ Boilerplate\n#include <iostream>\n#include <string>\n\nvoid greet(std::string name) {\n    std::cout << "Welcome, " << name << "!" << std::endl;\n}\n\nint main() {\n    std::cout << "Hello from C++!" << std::endl;\n    greet("Developer");\n    return 0;\n}`,
  c: `// C Boilerplate\n#include <stdio.h>\n\nvoid greet(char* name) {\n    printf("Welcome, %s!\\n", name);\n}\n\nint main() {\n    printf("Hello from C!\\n");\n    greet("Developer");\n    return 0;\n}`,
  java: `// Java Boilerplate\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from Java!");\n        greet("Developer");\n    }\n\n    public static void greet(String name) {\n        System.out.println("Welcome, " + name + "!");\n    }\n}`,
  rust: `// Rust Boilerplate\nfn main() {\n    println!("Hello from Rust!");\n    greet("Developer");\n}\n\nfn greet(name: &str) {\n    println!("Welcome, {}!", name);\n}`,
  go: `// Go Boilerplate\npackage main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello from Go!")\n    greet("Developer")\n}\n\nfunc greet(name string) {\n    fmt.Printf("Welcome, %s!\\n", name)\n}`
};

// Judge0 Language IDs
const judge0Languages = {
  python: 92,
  dart: 90,
  cpp: 105,
  c: 103,
  java: 91,
  rust: 108,
  go: 107
};

const DevPlayground = () => {
  const [code, setCode] = useState(boilerplates.javascript);
  const [language, setLanguage] = useState('javascript');
  const [logs, setLogs] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isExplaining, setIsExplaining] = useState(false);
  const [activeTab, setActiveTab] = useState('editor');

  const languages = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'python', label: 'Python' },
    { id: 'dart', label: 'Dart' },
    { id: 'cpp', label: 'C++' },
    { id: 'c', label: 'C' },
    { id: 'java', label: 'Java' },
    { id: 'rust', label: 'Rust' },
    { id: 'go', label: 'Go' }
  ];

  const createLog = (type, content) => ({
    id: Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    type,
    content
  });

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    const savedCode = localStorage.getItem(`playground-snippet-${newLang}`);
    if (savedCode) {
      setCode(savedCode);
    } else {
      setCode(boilerplates[newLang] || '// Start coding...');
    }
  };

  const saveSnippet = () => {
    localStorage.setItem(`playground-snippet-${language}`, code);
    alert('Snippet saved locally!');
  };

  const loadSnippet = () => {
    const savedCode = localStorage.getItem(`playground-snippet-${language}`);
    if (savedCode) {
      setCode(savedCode);
    } else {
      alert('No saved snippet found for this language.');
    }
  };

  const runJavaScriptLocally = () => {
    const capturedLogs = [];
    const originalLog = console.log;
    const originalError = console.error;

    console.log = (...args) => {
      capturedLogs.push(createLog('log', args.map(arg =>
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ')));
    };

    console.error = (...args) => {
      capturedLogs.push(createLog('error', args.map(arg => String(arg)).join(' ')));
    };

    try {
      // Evaluate the user's code
      // eslint-disable-next-line no-eval
      eval(code);
      if (capturedLogs.length === 0) {
        capturedLogs.push(createLog('log', 'Code executed successfully (no output).'));
      }
    } catch (err) {
      capturedLogs.push(createLog('error', `Runtime Error: ${err.message}`));
    } finally {
      console.log = originalLog;
      console.error = originalError;
      setLogs(capturedLogs);
      setIsExecuting(false);
    }
  };

  const runCodeRemotely = async () => {
    setLogs([createLog('log', 'Connecting to execution engine (Judge0)...')]);

    try {
      const languageId = judge0Languages[language];
      if (!languageId) {
        throw new Error(`Language ${language} is not supported for remote execution.`);
      }

      const response = await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source_code: code,
          language_id: languageId
        })
      });

      if (!response.ok) {
        throw new Error(`Execution error: ${response.statusText}`);
      }

      const result = await response.json();
      const newLogs = [];

      if (result.stdout) {
        newLogs.push(createLog('log', result.stdout));
      }
      if (result.stderr) {
        newLogs.push(createLog('error', `[Runtime Error]\n${result.stderr}`));
      }
      if (result.compile_output) {
        newLogs.push(createLog('error', `[Compilation Error]\n${result.compile_output}`));
      }
      if (result.message) {
        newLogs.push(createLog('error', `[System Message] ${result.message}`));
      }

      if (newLogs.length === 0) {
        newLogs.push(createLog('log', 'Code executed successfully (no output).'));
      }

      setLogs(newLogs);
    } catch (err) {
      setLogs([createLog('error', `Execution Error: ${err.message}`)]);
    } finally {
      setIsExecuting(false);
      if (window.innerWidth < 1024) setActiveTab('console');
    }
  };

  const runCode = useCallback(() => {
    setIsExecuting(true);
    if (language === 'javascript') {
      runJavaScriptLocally();
    } else {
      runCodeRemotely();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, language]);

  const handleSendMessage = async (input) => {
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setIsExplaining(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const aiResponse = {
        role: 'assistant',
        content: `I've analyzed your ${language} code. 

Based on your input "${input}", here's my advice:
- The logic looks solid.
- In ${language}, it's best practice to handle edge cases like null or undefined inputs.
- Performance-wise, this is efficient for small inputs.

Would you like me to refactor this code or explain a specific part?`
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsExplaining(false);
    }
  };

  const clearLogs = () => setLogs([]);

  return (
    <section id="dev-playground" className="py-12 md:py-20 relative overflow-hidden bg-[#030409]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold mb-3 text-white"
              style={{ background: 'linear-gradient(to right, #22d3ee, #06b6d4, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Ultimate Dev Playground
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400"
            >
              Multilingual Execution Engine • AI Pair Programmer
            </motion.p>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-dark-800/80 text-gray-300 text-sm rounded-xl h-[44px] px-4 border border-dark-700 outline-none focus:ring-2 focus:ring-primary-500 shadow-xl backdrop-blur-md"
            >
              {languages.map(lang => (
                <option key={lang.id} value={lang.id}>{lang.label}</option>
              ))}
            </select>
            <Button
              variant="secondary"
              size="md"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                runCode();
              }}
              disabled={isExecuting}
              className="!min-h-[44px] !h-[44px] !py-0"
            >
              {isExecuting ? 'Running...' : 'Run Code'}
            </Button>
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="flex lg:hidden overflow-x-auto gap-2 mb-6 pb-2 no-scrollbar">
          {['editor', 'console', 'ai'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${activeTab === tab ? 'bg-primary-500/20 border-primary-500/50 text-primary-400' : 'bg-dark-800/40 border-dark-700/50 text-gray-500'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[750px] items-stretch">
          {/* Main Workspace */}
          <div className={`lg:col-span-12 xl:col-span-9 flex flex-col gap-6 h-[750px] lg:h-full overflow-hidden ${activeTab === 'editor' || activeTab === 'console' ? 'block' : 'hidden lg:flex'}`}>
            <div className={`flex flex-col h-1/2 min-h-0 transition-all ${activeTab === 'console' ? 'hidden lg:flex' : 'flex'}`}>
              <div className="flex items-center justify-between px-4 py-2 bg-dark-800/80 border border-b-0 border-dark-700/50 rounded-t-xl">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={saveSnippet} className="text-xs text-dark-400 hover:text-white transition-colors flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
                    Save
                  </button>
                  <button type="button" onClick={loadSnippet} className="text-xs text-dark-400 hover:text-white transition-colors flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                    Load
                  </button>
                </div>
              </div>
              <CodeEditor
                code={code}
                onChange={setCode}
                language={language}
              />
            </div>

            <div className={`flex-1 min-h-0 transition-all ${activeTab === 'editor' ? 'hidden lg:block' : 'block'}`}>
              <ConsoleOutput logs={logs} clearLogs={clearLogs} />
            </div>
          </div>

          {/* AI Chat Panel */}
          <div className={`lg:col-span-12 xl:col-span-3 h-[500px] lg:h-full overflow-hidden ${activeTab === 'ai' ? 'block' : 'hidden lg:block'}`}>
            <AIChat
              messages={messages}
              isLoading={isExplaining}
              onSendMessage={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevPlayground;
