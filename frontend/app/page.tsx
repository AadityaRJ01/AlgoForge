import React from "react";
import { 
  Cpu, 
  Terminal, 
  Database, 
  Zap, 
  ShieldCheck, 
  Play, 
  Layers,
  ArrowRight,
  Code2
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090707] text-gray-100 flex flex-col font-sans selection:bg-brand-500 selection:text-black">
      
      {/* Top Navbar */}
      <header className="border-b border-stone-800 bg-[#0c0a09]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-brand-600 to-brand-400 p-2 rounded-xl text-black shadow-md shadow-brand-500/20">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-stone-400 bg-clip-text text-transparent">
              Algo<span className="text-brand-400">Forge</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#docs" className="hover:text-white transition-colors">API docs</a>
          </nav>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              API Connected
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 border-b border-stone-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-950/20 via-transparent to-transparent -z-10" />
          
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-brand-500/5 text-brand-300 border border-brand-500/10 mb-6">
              <Zap className="w-3.5 h-3.5" />
              Initial Platform Scaffolding Active
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
              The AI-Powered Arena for <br />
              <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-indigo-400 bg-clip-text text-transparent">
                Competitive Programmers
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-stone-400 text-lg md:text-xl mb-10 leading-relaxed">
              Compile code in milliseconds. Execute heavy evaluation suites asynchronously with Docker-orchestrated sandbox pipelines and receive deep AI mentoring.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="http://localhost:8000/docs" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-stone-200 transition-all shadow-lg shadow-white/5 inline-flex items-center justify-center gap-2"
              >
                Explore API Docs
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#architecture" 
                className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 text-stone-200 hover:text-white font-semibold rounded-xl border border-stone-800 hover:border-stone-700 transition-all inline-flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                Scaffold Structure
              </a>
            </div>
          </div>
        </section>

        {/* Features / Architecture Section */}
        <section id="features" className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Orchestrated Ecosystem Services</h2>
            <p className="text-stone-400 max-w-xl mx-auto">
              Our root Docker Compose setup links five robust services together to power instant code evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#0c0a09]/50 border border-stone-800/80 rounded-2xl p-6 hover:border-brand-500/25 transition-all group">
              <div className="bg-brand-500/10 text-brand-400 p-3 rounded-xl w-fit mb-6">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">FastAPI Backend</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Runs on port 8000. Serves as the central controller for submissions, routing tasks to workers and delivering responses via RESTful endpoints.
              </p>
              <div className="text-xs text-stone-500 font-mono">Location: /backend</div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0c0a09]/50 border border-stone-800/80 rounded-2xl p-6 hover:border-brand-500/25 transition-all group">
              <div className="bg-brand-500/10 text-brand-400 p-3 rounded-xl w-fit mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">Next.js Web Frontend</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Runs on port 3000. Uses standard App Router with Tailwind CSS config, Lucide React, and styled components for a flawless interface.
              </p>
              <div className="text-xs text-stone-500 font-mono">Location: /frontend</div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0c0a09]/50 border border-stone-800/80 rounded-2xl p-6 hover:border-brand-500/25 transition-all group">
              <div className="bg-brand-500/10 text-brand-400 p-3 rounded-xl w-fit mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">Celery Sandbox Worker</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Evaluates heavy untrusted user code asynchronously. Completely separated from the primary API server to avoid blocking requests.
              </p>
              <div className="text-xs text-stone-500 font-mono">Location: docker-compose service</div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0c0a09]/50 border border-stone-800/80 rounded-2xl p-6 hover:border-brand-500/25 transition-all group">
              <div className="bg-brand-500/10 text-brand-400 p-3 rounded-xl w-fit mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">Redis Message Broker</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Binds to port 6379. Handles instant messaging communication between FastAPI processes and background Celery task executors.
              </p>
              <div className="text-xs text-stone-500 font-mono">Image: redis:alpine</div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#0c0a09]/50 border border-stone-800/80 rounded-2xl p-6 hover:border-brand-500/25 transition-all group">
              <div className="bg-brand-500/10 text-brand-400 p-3 rounded-xl w-fit mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">PostgreSQL Database</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Binds to port 5432. Stores system records, competitive programming challenges, user scores, and compiler outputs.
              </p>
              <div className="text-xs text-stone-500 font-mono">Image: postgres:15-alpine</div>
            </div>

            {/* Card 6 */}
            <div className="bg-[#0c0a09]/50 border border-stone-800/80 rounded-2xl p-6 hover:border-brand-500/25 transition-all group">
              <div className="bg-brand-500/10 text-brand-400 p-3 rounded-xl w-fit mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">Secure Sandbox Design</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Structured for isolation. Restricts access keys, blocks outbound worker networking, and enforces severe time-limit margins.
              </p>
              <div className="text-xs text-stone-500 font-mono">Framework: Docker + gVisor ready</div>
            </div>

          </div>
        </section>

        {/* Code Mockup Section */}
        <section id="architecture" className="bg-[#0c0a09] py-20 border-t border-stone-900">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Clean, Extensible Project Scaffold</h2>
              <p className="text-stone-400 mb-6 leading-relaxed">
                AlgoForge's layout keeps concerns strictly decoupled. The frontend uses Next.js app directory standards, and the backend organizes router actions, database services, and task workers separately.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2" />
                  <p className="text-stone-300 text-sm">
                    <strong>Router Decoupling:</strong> API paths reside inside independent route files linked dynamically via the root API router.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2" />
                  <p className="text-stone-300 text-sm">
                    <strong>Service Logic:</strong> External calls, AI requests, and calculations live inside the services tier.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2" />
                  <p className="text-stone-300 text-sm">
                    <strong>Worker Independence:</strong> The background queues can be scaled independently inside Docker containers.
                  </p>
                </div>
              </div>
            </div>

            {/* Folder Layout Mockup */}
            <div className="bg-[#090707] border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-[#0c0a09] px-4 py-3 border-b border-stone-850 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-stone-700" />
                  <span className="w-3 h-3 rounded-full bg-stone-700" />
                  <span className="w-3 h-3 rounded-full bg-stone-700" />
                </div>
                <span className="text-xs text-stone-500 font-mono">algoforge-scaffold-tree</span>
                <div className="w-10" />
              </div>
              <div className="p-6 font-mono text-xs text-stone-300 leading-relaxed overflow-x-auto">
                <div>📁 AlgoForge/</div>
                <div className="pl-4 text-stone-500">├── 📁 backend/</div>
                <div className="pl-8 text-brand-300">├── 📁 app/</div>
                <div className="pl-12 text-stone-400">├── 📁 routes/</div>
                <div className="pl-12 text-stone-400">├── 📁 services/</div>
                <div className="pl-12 text-stone-400">├── 📁 workers/</div>
                <div className="pl-12">├── main.py</div>
                <div className="pl-12">├── config.py</div>
                <div className="pl-8">├── Dockerfile</div>
                <div className="pl-8">└── requirements.txt</div>
                <div className="pl-4 text-stone-500">├── 📁 frontend/</div>
                <div className="pl-8 text-brand-300">├── 📁 app/</div>
                <div className="pl-12">├── layout.tsx</div>
                <div className="pl-12">├── page.tsx</div>
                <div className="pl-12">└── globals.css</div>
                <div className="pl-8">├── package.json</div>
                <div className="pl-8">├── next.config.js</div>
                <div className="pl-8">├── tailwind.config.js</div>
                <div className="pl-8">└── Dockerfile</div>
                <div className="pl-4 text-stone-300">├── docker-compose.yml</div>
                <div className="pl-4 text-stone-500">└── .gitignore</div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-900 bg-[#090707] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-stone-500 text-sm">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-stone-600" />
            <span>© 2026 AlgoForge Platform. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="http://localhost:8000/docs" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">API Docs</a>
            <a href="http://localhost:8000/redoc" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">ReDoc</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
