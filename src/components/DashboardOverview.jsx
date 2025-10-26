import { Calendar, CheckCircle2, BarChart3, MessageSquare } from 'lucide-react';

function StatCard({ title, value, delta, color }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-[#E2E8F0] p-4 flex items-start gap-3">
      <div className="mt-1 h-8 w-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: color }}>
        <span className="sr-only">{title} icon</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#64748B]">{title}</p>
          <span className={`text-xs font-medium ${delta.startsWith('+') ? 'text-[#56CC9D]' : 'text-[#F44336]'}`}>{delta}</span>
        </div>
        <p className="mt-1 text-2xl font-bold text-[#292D3E]">{value}</p>
      </div>
    </div>
  );
}

function MiniBoard() {
  const columns = [
    { name: 'To-Do', color: '#E2E8F0' },
    { name: 'In Progress', color: '#FFD600' },
    { name: 'Done', color: '#56CC9D' },
  ];
  const items = [
    { title: 'Design onboarding screens', col: 0 },
    { title: 'Implement auth flow', col: 1 },
    { title: 'Write unit tests', col: 1 },
    { title: 'Team sync agenda', col: 2 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {columns.map((c, i) => (
        <div key={c.name} className="rounded-2xl bg-[#F9FAFB] border border-[#E2E8F0] p-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-[#292D3E]">{c.name}</h4>
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.color }} />
          </div>
          <div className="mt-3 space-y-2">
            {items.filter(it => it.col === i).map((it) => (
              <div key={it.title} className="rounded-xl bg-white border border-[#E2E8F0] p-3 text-sm text-[#334155] shadow-sm">
                {it.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DashboardOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#292D3E]">Workspace Overview</h2>
        <div className="flex items-center gap-2 text-sm">
          <button className="rounded-full bg-white px-3 py-1.5 border border-[#E2E8F0] hover:bg-[#F4F6FC] transition inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#2F80ED]" /> Calendar
          </button>
          <button className="rounded-full bg-[#2F80ED] text-white px-3 py-1.5 hover:brightness-110 transition inline-flex items-center gap-2">
            <BarChart3 className="h-4 w-4" /> Reports
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Projects" value="12" delta="+2 this week" color="#E3F2FD" />
        <StatCard title="Tasks In Progress" value="38" delta="+6" color="#FFF3E0" />
        <StatCard title="Completed" value="124" delta="+18" color="#E8F5E9" />
        <StatCard title="Mentions" value="7" delta="-2" color="#FFEBEE" />
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[#292D3E]">Today at a glance</h3>
              <span className="text-xs text-[#64748B]">Auto-updates</span>
            </div>
            <div className="mt-4">
              <MiniBoard />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#56CC9D]" />
              <h3 className="font-semibold text-[#292D3E]">Upcoming</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-[#334155]">
              <li className="rounded-xl border border-[#E2E8F0] p-3">Design review – 2:00 PM</li>
              <li className="rounded-xl border border-[#E2E8F0] p-3">Quarterly planning – tomorrow</li>
              <li className="rounded-xl border border-[#E2E8F0] p-3">Handoff to Dev – Friday</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-[#2F80ED]" />
              <h3 className="font-semibold text-[#292D3E]">Notifications</h3>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <p className="rounded-xl bg-[#F4F6FC] p-3">@Alex mentioned you in “Roadmap Q4”.</p>
              <p className="rounded-xl bg-[#FFF7ED] p-3">Deadline approaching: Marketing brief</p>
              <p className="rounded-xl bg-[#E8F5E9] p-3">Nice! 5 tasks completed today.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
