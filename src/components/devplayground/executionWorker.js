// Web Worker for safe code execution
self.onmessage = function (e) {
  const { code } = e.data;
  const capturedLogs = [];

  // Overwrite console methods within the worker
  const consoleProxy = {
    log: (...args) => {
      capturedLogs.push({
        type: 'log',
        content: args.map(arg =>
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '),
        id: Date.now() + Math.random(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      });
    },
    error: (...args) => {
      capturedLogs.push({
        type: 'error',
        content: args.map(arg => String(arg)).join(' '),
        id: Date.now() + Math.random(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      });
    }
  };

  // Replace global console in worker scope
  self.console = consoleProxy;

  try {
    // eslint-disable-next-line no-eval
    eval(code);

    if (capturedLogs.length === 0) {
      capturedLogs.push({
        type: 'log',
        content: 'Code executed successfully (no output).',
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      });
    }

    self.postMessage({ type: 'result', logs: capturedLogs });
  } catch (err) {
    capturedLogs.push({
      type: 'error',
      content: `Runtime Error: ${err.message}`,
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    });
    self.postMessage({ type: 'result', logs: capturedLogs });
  }
};
