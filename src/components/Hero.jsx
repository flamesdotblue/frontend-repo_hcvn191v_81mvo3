import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E2E8F0] px-3 py-1 text-xs font-medium text-[#292D3E]">
            Lovable Project Management • Friendly, modern, and welcoming
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-[#292D3E]">
            Run projects with clarity and calm
          </h1>
          <p className="mt-3 text-[#475569]">
            Organize work across workspaces, keep teams aligned, and get smart suggestions from your AI copilot. A clean interface with soft shadows, rounded corners, and just the right amount of delight.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-[#2F80ED] px-5 py-2.5 text-white font-medium shadow hover:brightness-110 transition">
              Get Started
            </a>
            <a href="#learn-more" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[#292D3E] font-medium shadow border border-[#E2E8F0] hover:bg-[#F4F6FC] transition">
              Explore Demo
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-4 text-sm text-[#475569]">
            <li className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#56CC9D]"/>Fast onboarding</li>
            <li className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#FFD600]"/>AI suggestions</li>
            <li className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#FFB672]"/>Friendly UI</li>
          </ul>
        </div>
        <div className="relative h-[360px] md:h-[440px] rounded-3xl bg-gradient-to-br from-[#F4F6FC] to-white shadow-inner">
          <div className="absolute inset-0 rounded-3xl">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
