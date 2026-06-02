import { useState, useEffect, useRef } from 'react';
import './SocTerminal.css';

const LOG_MESSAGES = [
  '[INFO] Initializing SOC environment...',
  '[OK] Firewall rules loaded.',
  '[WARN] Unusual traffic detected on port 443.',
  '[INFO] Scanning for vulnerabilities...',
  '[ERROR] Unauthorized access attempt from 192.168.1.105 blocked.',
  '[INFO] System health: 98% stable.',
  '[OK] Integrity check complete: No changes detected.',
  '[INFO] Monitoring network interfaces: eth0, wlan0.',
  '[CRITICAL] Potential DDoS attack signature identified!',
  '[INFO] Mitigation strategy engaged: Rate limiting applied.',
  '[OK] Database connection established.',
  '[INFO] Log rotation successful.',
  '[WARN] Latency spike in US-East-1 region.',
  '[INFO] Patching system kernel: v5.15.0-76-generic.',
  '[OK] Threat intelligence feed updated.',
  '[INFO] Analyzing packet headers...',
  '[ERROR] SSH brute force attempt detected: 10 failed logins.',
  '[INFO] IP 203.0.113.42 added to blacklist.',
  '[OK] SSL certificate validated.',
  '[INFO] Weekly security audit initiated.'
];

const SocTerminal = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const addLog = (message: string, type: 'info' | 'ok' | 'warn' | 'error' = 'info') => {
    const timestamp = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const prefix = `[${type.toUpperCase()}]`;
    const newLog = `[${timestamp}] ${prefix} ${message}`;
    
    setLogs((prevLogs) => [...prevLogs, newLog].slice(-20));
  };

  useEffect(() => {
    // Initializing logs
    addLog('SOC Monitor Initialized. Tracking user activity...', 'ok');
    addLog('Establishing websocket connection to UI...', 'info');
    addLog('Listener active: clicks, scrolls, navigation.', 'ok');

    // Track clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const text = target.innerText || target.getAttribute('aria-label') || 'element';
      const cleanText = text.split('\n')[0].trim().substring(0, 30);
      
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        addLog(`USER_INTERACTION: Clicked "${cleanText}"`, 'info');
      } else {
        addLog(`UI_EVENT: Interaction at (${e.clientX}, ${e.clientY})`, 'info');
      }
    };

    // Track Section visibility (Navigation)
    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            const sectionName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
            addLog(`NAVIGATION: User entered ${sectionName} section`, 'ok');
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    // Track context menu
    const handleContextMenu = () => {
      addLog('SECURITY_ALERT: Right-click detected. Inspect attempt?', 'warn');
    };

    // Track visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        addLog('USER_STATUS: Tab minimized/backgrounded', 'warn');
      } else {
        addLog('USER_STATUS: Tab focused', 'info');
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs]);

  const getLogLevelClass = (log: string) => {
    if (log.includes('[OK]')) return 'log-ok';
    if (log.includes('[WARN]')) return 'log-warn';
    if (log.includes('[ERROR]') || log.includes('[CRITICAL]')) return 'log-error';
    return 'log-info';
  };

  return (
    <div className="soc-terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">LIVE ACTIVITY MONITOR</div>
      </div>
      <div className="terminal-body" ref={terminalBodyRef}>
        {logs.map((log, index) => (
          <div key={index} className={`log-entry ${getLogLevelClass(log)}`}>
            <span className="cursor">{'>'}</span> {log}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocTerminal;
