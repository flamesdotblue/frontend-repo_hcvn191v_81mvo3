import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I’m your workspace copilot. Ask me about tasks, projects, or write a summary from your notes.' },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input.trim() };
    // For now, simulate an AI response locally to avoid calling non-existent APIs.
    const simulated = {
      role: 'assistant',
      content:
        'Here are some suggestions:\n• Add due dates to tasks without deadlines.\n• “Onboarding Revamp” is trending; consider a standup.\n• I can summarize notes—paste them here when ready.',
    };
    setMessages((m) => [...m, userMsg, simulated]);
    setInput('');
  };

  return (
    <div>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#2F80ED] px-4 py-3 text-white shadow-lg hover:brightness-110 transition"
        aria-label="Open AI Assistant"
      >
        <MessageSquare className="h-5 w-5" />
        Ask AI
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-[92vw] max-w-sm rounded-2xl bg-white shadow-2xl border border-[#E2E8F0] flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#E2E8F0] bg-[#F9FAFB]">
            <div>
              <p className="text-sm font-semibold text-[#292D3E]">AI Assistant</p>
              <p className="text-xs text-[#64748B]">Smart tips & summaries</p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full p-1 hover:bg-white transition" aria-label="Close">
              <X className="h-5 w-5 text-[#334155]" />
            </button>
          </div>

          <div className="h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((m, idx) => (
              <div key={idx} className={`${m.role === 'user' ? 'justify-end' : 'justify-start'} flex`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                    m.role === 'user'
                      ? 'bg-[#2F80ED] text-white'
                      : 'bg-[#F4F6FC] text-[#1F2937]'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-[#E2E8F0] bg-white">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about projects, tasks, or paste notes to summarize…"
                className="flex-1 rounded-full border border-[#E2E8F0] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
                aria-label="Message AI Assistant"
              />
              <button
                onClick={handleSend}
                className="inline-flex items-center gap-1 rounded-full bg-[#2F80ED] px-4 py-2 text-sm text-white hover:brightness-110 transition"
              >
                <Send className="h-4 w-4" />
                Send
              </button>
            </div>
            <p className="mt-2 text-[11px] text-[#64748B]">
              Tip: Use natural language. Example: “Summarize yesterday’s standup notes into action items.”
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
