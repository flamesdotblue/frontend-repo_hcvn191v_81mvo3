import { UserPlus, Shield } from 'lucide-react';

export default function TeamPage() {
  const members = [
    { name: 'Alex Johnson', role: 'Owner', color: '#2F80ED' },
    { name: 'Priya Patel', role: 'Admin', color: '#56CC9D' },
    { name: 'Diego Martinez', role: 'Member', color: '#FFD600' },
    { name: 'Sofia Rossi', role: 'Member', color: '#FFB672' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#292D3E]">Team</h2>
        <button className="inline-flex items-center gap-2 rounded-full bg-[#2F80ED] text-white px-3 py-1.5 text-sm hover:brightness-110 transition">
          <UserPlus className="h-4 w-4" /> Invite
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((m) => (
          <div key={m.name} className="rounded-2xl bg-white border border-[#E2E8F0] p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full flex items-center justify-center font-semibold text-white" style={{ backgroundColor: m.color }}>
                {m.name.split(' ').map(n=>n[0]).slice(0,2).join('')}
              </div>
              <div>
                <p className="font-medium text-[#292D3E]">{m.name}</p>
                <p className="text-sm text-[#64748B] inline-flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> {m.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
