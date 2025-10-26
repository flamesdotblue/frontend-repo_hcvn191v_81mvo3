import { Plus, Filter } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    { name: 'Onboarding Revamp', status: 'Active', color: '#2F80ED' },
    { name: 'Mobile App V2', status: 'Active', color: '#56CC9D' },
    { name: 'Website Refresh', status: 'Planning', color: '#FFD600' },
    { name: 'Marketing Q4', status: 'Paused', color: '#FFB672' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#292D3E]">Projects</h2>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E2E8F0] px-3 py-1.5 text-sm hover:bg-[#F4F6FC] transition">
            <Filter className="h-4 w-4 text-[#64748B]" /> Filters
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-[#2F80ED] text-white px-3 py-1.5 text-sm hover:brightness-110 transition">
            <Plus className="h-4 w-4" /> New Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.name} className="rounded-2xl bg-white border border-[#E2E8F0] p-4 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                <h3 className="font-semibold text-[#292D3E]">{p.name}</h3>
              </div>
              <span className="rounded-full bg-[#F4F6FC] px-2 py-0.5 text-xs text-[#475569]">{p.status}</span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-[#E2E8F0]">
              <div className="h-2 rounded-full bg-[#2F80ED]" style={{ width: `${Math.floor(Math.random() * 70) + 20}%` }} />
            </div>
            <p className="mt-2 text-sm text-[#64748B]">3 active tasks • 1 overdue</p>
          </div>
        ))}
      </div>
    </div>
  );
}
