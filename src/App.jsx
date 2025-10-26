import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardOverview from './components/DashboardOverview';
import AIAssistant from './components/AIAssistant';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F6FC] text-[#1F2937]">
      <Navbar />

      {/* Hero with Spline */}
      <Hero />

      {/* Content */}
      <DashboardOverview />

      {/* Floating AI widget */}
      <AIAssistant />

      {/* Footer */}
      <footer className="mt-8 border-t border-[#E2E8F0] bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-[#64748B] flex flex-col md:flex-row items-center justify-between">
          <p>
            © {new Date().getFullYear()} FlowSpark — Built for clarity and calm.
          </p>
          <div className="mt-2 md:mt-0 flex items-center gap-4">
            <a className="hover:text-[#2F80ED]" href="#">Privacy</a>
            <a className="hover:text-[#2F80ED]" href="#">Terms</a>
            <a className="hover:text-[#2F80ED]" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
