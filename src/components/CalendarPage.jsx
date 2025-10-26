import { Calendar as CalendarIcon, Clock } from 'lucide-react';

export default function CalendarPage() {
  const events = [
    { title: 'Design Review', date: 'Tue 2:00 PM', color: '#2F80ED' },
    { title: 'Sprint Planning', date: 'Wed 10:00 AM', color: '#56CC9D' },
    { title: 'Marketing Sync', date: 'Thu 4:30 PM', color: '#FFB672' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#292D3E]">Calendar</h2>
        <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E2E8F0] px-3 py-1.5 text-sm">
          <CalendarIcon className="h-4 w-4 text-[#2F80ED]" />
          Month view
        </div>
      </div>

      <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4">
        <div className="grid grid-cols-7 gap-2 text-center text-xs text-[#64748B]">
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d)=> (
            <div key={d} className="py-2">{d}</div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-lg border border-[#E2E8F0] bg-[#F9FAFB] p-1 text-[10px] text-[#64748B]">
              <div className="text-right">{i+1}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4">
        <h3 className="font-semibold text-[#292D3E]">Upcoming</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {events.map(e => (
            <li key={e.title} className="flex items-center justify-between rounded-xl border border-[#E2E8F0] p-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: e.color }} />
                <span className="text-[#334155]">{e.title}</span>
              </div>
              <div className="inline-flex items-center gap-2 text-[#64748B]">
                <Clock className="h-4 w-4" />
                {e.date}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
