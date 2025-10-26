import { useState } from 'react';
import { Home, Bell, Settings, ChevronDown, Search, Plus, Users } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [workspace, setWorkspace] = useState({ name: 'Acme Studio', color: '#2F80ED' });
  const workspaces = [
    { name: 'Acme Studio', color: '#2F80ED' },
    { name: 'Mint Labs', color: '#56CC9D' },
    { name: 'Peachy Co', color: '#FFB672' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#292D3E] text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand + Workspace */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold tracking-tight">FlowSpark</span>
            </div>

            <div className="relative ml-4">
              <button
                onClick={() => setOpen((p) => !p)}
                className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20 transition"
                aria-haspopup="listbox"
                aria-expanded={open}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: workspace.color }}
                />
                <span className="font-medium">{workspace.name}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {open && (
                <ul
                  role="listbox"
                  className="absolute mt-2 w-56 rounded-xl bg-white text-[#292D3E] shadow-xl overflow-hidden"
                >
                  {workspaces.map((w) => (
                    <li key={w.name}>
                      <button
                        role="option"
                        onClick={() => {
                          setWorkspace(w);
                          setOpen(false);
                        }}
                        className="flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-[#F4F6FC]"
                      >
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: w.color }} />
                        <span>{w.name}</span>
                      </button>
                    </li>
                  ))}
                  <li className="border-t border-[#E2E8F0]">
                    <button className="flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-[#F4F6FC]">
                      <Plus className="h-4 w-4 text-[#2F80ED]" />
                      <span className="text-[#2F80ED]">New workspace</span>
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex items-center w-1/2 max-w-xl">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                type="text"
                placeholder="Search projects, tasks, people…"
                className="w-full rounded-full bg-white/10 pl-10 pr-4 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
                aria-label="Search"
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-[#2F80ED] px-3 py-1.5 text-sm font-medium hover:brightness-110 transition flex items-center gap-1">
              <Plus className="h-4 w-4" />
              New
            </button>
            <button className="relative rounded-full p-2 hover:bg-white/10 transition" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[#F44336]" />
            </button>
            <button className="rounded-full p-2 hover:bg-white/10 transition" aria-label="Team">
              <Users className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 hover:bg-white/10 transition" aria-label="Settings">
              <Settings className="h-5 w-5" />
            </button>
            <div className="ml-2 h-8 w-8 rounded-full bg-white/20 flex items-center justify-center font-semibold">
              AJ
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
