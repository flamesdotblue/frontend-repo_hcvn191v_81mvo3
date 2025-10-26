import { useMemo } from 'react';
import { LayoutDashboard, FolderKanban, CalendarDays, Users, Settings } from 'lucide-react';

export default function Sidebar({ route }) {
  const items = useMemo(
    () => [
      { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: '#2F80ED' },
      { key: 'projects', label: 'Projects', icon: FolderKanban, color: '#56CC9D' },
      { key: 'calendar', label: 'Calendar', icon: CalendarDays, color: '#FFD600' },
      { key: 'team', label: 'Team', icon: Users, color: '#FFB672' },
      { key: 'settings', label: 'Settings', icon: Settings, color: '#292D3E' },
    ],
    []
  );

  const go = (key) => {
    window.location.hash = `#/${key}`;
  };

  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 h-[calc(100vh-64px)] sticky top-16 bg-white border-r border-[#E2E8F0]">
      <div className="p-3">
        <div className="rounded-xl bg-[#F4F6FC] p-3 text-sm text-[#475569]">
          Quick tip: Press Alt + K to search anywhere.
        </div>
      </div>
      <nav className="px-2 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const active = route === item.key;
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              onClick={() => go(item.key)}
              className={`w-full flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                active
                  ? 'bg-[#2F80ED]/10 text-[#292D3E] border border-[#2F80ED]/30'
                  : 'text-[#475569] hover:bg-[#F4F6FC]'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <Icon className={`h-4 w-4 ${active ? 'text-[#2F80ED]' : 'text-[#64748B]'}`} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="mt-auto p-3">
        <div className="rounded-xl bg-gradient-to-br from-white to-[#F4F6FC] border border-[#E2E8F0] p-3 text-sm">
          <p className="font-semibold text-[#292D3E]">Upgrade</p>
          <p className="text-[#64748B]">Unlimited projects, AI credits, SSO</p>
          <button
            onClick={() => go('settings')}
            className="mt-2 w-full rounded-full bg-[#2F80ED] text-white text-sm py-2 hover:brightness-110 transition"
          >
            Start trial
          </button>
        </div>
      </div>
    </aside>
  );
}
