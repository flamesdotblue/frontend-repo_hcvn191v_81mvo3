import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import DashboardOverview from './components/DashboardOverview';
import ProjectsPage from './components/ProjectsPage';
import CalendarPage from './components/CalendarPage';
import TeamPage from './components/TeamPage';
import AIAssistant from './components/AIAssistant';

export default function App() {
  const [route, setRoute] = useState('dashboard');

  useEffect(() => {
    const parse = () => {
      const hash = window.location.hash.replace('#/', '') || 'dashboard';
      setRoute(hash);
    };
    window.addEventListener('hashchange', parse);
    parse();
    return () => window.removeEventListener('hashchange', parse);
  }, []);

  const renderPage = () => {
    switch (route) {
      case 'dashboard':
        return (
          <>
            <Hero />
            <DashboardOverview />
          </>
        );
      case 'projects':
        return (
          <main className="mx-auto max-w-7xl px-4 py-8">
            <ProjectsPage />
          </main>
        );
      case 'calendar':
        return (
          <main className="mx-auto max-w-7xl px-4 py-8">
            <CalendarPage />
          </main>
        );
      case 'team':
        return (
          <main className="mx-auto max-w-7xl px-4 py-8">
            <TeamPage />
          </main>
        );
      case 'settings':
        return (
          <main className="mx-auto max-w-7xl px-4 py-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#292D3E]">Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4">
                  <h3 className="font-semibold text-[#292D3E]">Profile</h3>
                  <p className="text-sm text-[#64748B] mt-1">Manage your name, photo, and email.</p>
                </div>
                <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4">
                  <h3 className="font-semibold text-[#292D3E]">Notifications</h3>
                  <p className="text-sm text-[#64748B] mt-1">Choose email and push preferences.</p>
                </div>
                <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4">
                  <h3 className="font-semibold text-[#292D3E]">Workspace</h3>
                  <p className="text-sm text-[#64748B] mt-1">Invite members, manage roles and billing.</p>
                </div>
                <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4">
                  <h3 className="font-semibold text-[#292D3E]">AI Assistant</h3>
                  <p className="text-sm text-[#64748B] mt-1">Connect your AI provider and set usage limits.</p>
                </div>
              </div>
            </div>
          </main>
        );
      default:
        return (
          <main className="mx-auto max-w-7xl px-4 py-8">
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-10 text-center">
              <h2 className="text-2xl font-bold text-[#292D3E]">Page not found</h2>
              <p className="mt-2 text-[#64748B]">The page you’re looking for doesn’t exist. Try Dashboard.</p>
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F6FC] text-[#1F2937]">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex gap-6">
          <Sidebar route={route} />
          <div className="flex-1 min-w-0">
            {renderPage()}
          </div>
        </div>
      </div>

      <AIAssistant />

      <footer className="mt-8 border-t border-[#E2E8F0] bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-[#64748B] flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} FlowSpark — Built for clarity and calm.</p>
          <div className="mt-2 md:mt-0 flex items-center gap-4">
            <a className="hover:text-[#2F80ED]" href="#/settings">Privacy</a>
            <a className="hover:text-[#2F80ED]" href="#/settings">Terms</a>
            <a className="hover:text-[#2F80ED]" href="#/settings">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
