import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, onChange, language, theme = 'vs-dark' }) => {
  const handleEditorChange = (value) => {
    onChange(value);
  };

  return (
    <div className="h-[500px] md:h-[650px] w-full rounded-xl overflow-hidden border border-dark-700/50 shadow-2xl glassmorphism">
      <Editor
        height="100%"
        width="100%"
        language={language}
        value={code}
        theme={theme}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: "'Fira Code', monospace",
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 20, bottom: 20 },
          lineNumbers: 'on',
          folding: true,
          lineDecorationsWidth: 10,
          lineNumbersMinChars: 3,
          wordWrap: 'on',
          suggestOnTriggerCharacters: true,
          quickSuggestions: {
            other: true,
            comments: true,
            strings: true
          },
          parameterHints: {
            enabled: true
          },
          formatOnPaste: true,
          formatOnType: true,
          snippetSuggestions: 'inline',
          tabSize: 2,
          hover: {
            enabled: true,
            delay: 300,
            sticky: true
          },
          contextmenu: false,
          lightbulb: {
            enabled: true
          },
          fixedOverflowWidgets: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
