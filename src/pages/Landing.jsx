// src/pages/Landing.jsx
import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pitch-bg overflow-x-hidden">

      {/* Ambient glow blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-grass-500/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-grass-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-grass-400/5 blur-3xl" />
      </div>

      {/* ── Nav ── */}
      <nav className="relative z-10 border-b border-grass-500/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-grass-500/15 border border-grass-500/25 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-grass-400" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="12" cy="12" rx="10" ry="7" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <span className="font-display font-bold tracking-wider text-white uppercase">Scout Sleeve</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="btn-primary px-5 py-2 text-sm"
          >
            Scout Login →
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        {/* Hackathon badge */}
        <div className="inline-flex items-center gap-2 bg-grass-500/10 border border-grass-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-grass-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold text-grass-400 tracking-widest uppercase">Hackathon Project 2026</span>
        </div>

        <h1 className="font-display font-black text-6xl sm:text-8xl uppercase tracking-tight text-white leading-none mb-4">
          Scout
          <span className="text-grass-400"> Sleeve</span>
        </h1>
        <p className="font-display text-xl sm:text-2xl text-grass-400/60 uppercase tracking-widest mb-6">
          Biomechanical Intelligence for Football
        </p>
        <p className="text-grass-300/60 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          A wearable IoT sleeve + real-time web dashboard that detects injury risk,
          scores athletes objectively, and discovers hidden talent — anywhere in the world.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => navigate('/login')}
            className="btn-primary px-8 py-3.5 text-base"
          >
            Open Scout Dashboard →
          </button>
          <a href="#how" className="btn-ghost px-6 py-3 text-base border border-grass-500/20 rounded-lg">
            Learn More ↓
          </a>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="relative z-10 border-y border-grass-500/10 bg-pitch-900/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '0–100',  label: 'Efficiency Score' },
            { value: 'Live',   label: 'Real-time Updates' },
            { value: '4',      label: 'Biomechanical Metrics' },
            { value: '∞',      label: 'Athletes Tracked' },
          ].map(s => (
            <div key={s.label}>
              <div className="font-display font-black text-4xl text-grass-400">{s.value}</div>
              <div className="text-xs font-mono text-grass-400/40 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem ── */}
      <section id="how" className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-danger-500/10 border border-danger-500/20 rounded-full px-3 py-1 text-xs font-mono text-danger-400 uppercase tracking-widest mb-4">
              The Problem
            </div>
            <h2 className="font-display font-bold text-4xl uppercase tracking-wide text-white mb-6">
              Talent scouting is<br/>
              <span className="text-danger-400">blind to biomechanics</span>
            </h2>
            <div className="space-y-4 text-grass-300/60 leading-relaxed">
              <p>
                Scouts can judge speed, skill, and game intelligence — but they <strong className="text-white/80">cannot see what's happening inside a player's knees and joints</strong> during a match.
              </p>
              <p>
                A talented 16-year-old with poor movement mechanics could suffer a serious ACL injury within a year, turning a promising recruitment into a costly mistake.
              </p>
              <p>
                Worse — <strong className="text-white/80">gifted athletes in rural areas and local clubs are never seen at all</strong>, simply because no scout ever visits their ground.
              </p>
            </div>
          </div>

          {/* Problem cards */}
          <div className="space-y-3">
            {[
              { icon: '👁️', title: 'Subjective Observation',    desc: 'Scouting decisions based on gut feeling, not objective data.' },
              { icon: '🦵', title: 'Hidden Injury Risk',         desc: 'Dangerous movement patterns invisible to the human eye.' },
              { icon: '📍', title: 'Geographic Bias',            desc: 'Talent in small towns and rural areas goes completely unnoticed.' },
              { icon: '💸', title: 'Costly Recruitment Errors',  desc: 'Clubs invest in players who break down within their first season.' },
            ].map(p => (
              <div key={p.title} className="panel px-5 py-4 flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <div>
                  <div className="font-semibold text-white text-sm">{p.title}</div>
                  <div className="text-xs text-grass-400/50 mt-0.5">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="relative z-10 border-t border-grass-500/10 bg-pitch-900/30">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <div className="inline-block bg-grass-500/10 border border-grass-500/20 rounded-full px-3 py-1 text-xs font-mono text-grass-400 uppercase tracking-widest mb-4">
              Our Solution
            </div>
            <h2 className="font-display font-bold text-4xl uppercase tracking-wide text-white">
              How Scout Sleeve Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: '01',
                icon: '🦾',
                title: 'Athlete Wears the Sleeve',
                desc: 'The IoT wearable captures valgus angle, G-force, and rotational velocity on every jump and cut — in real time.',
              },
              {
                step: '02',
                icon: '☁️',
                title: 'Data Streams to Firebase',
                desc: 'Each movement event uploads instantly to the cloud with an AI-generated efficiency score and risk classification.',
              },
              {
                step: '03',
                icon: '📊',
                title: 'Scouts See It Live',
                desc: 'The Scout Dashboard shows a live leaderboard, trend charts, and risk alerts — updated the moment a player moves.',
              },
            ].map(s => (
              <div key={s.step} className="panel p-7 relative overflow-hidden">
                <div className="absolute top-4 right-4 font-display font-black text-5xl text-grass-500/08">{s.step}</div>
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white mb-2">{s.title}</h3>
                <p className="text-sm text-grass-400/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className="panel p-8">
            <h3 className="font-display font-bold text-center text-xl uppercase tracking-widest text-grass-400 mb-8">
              4 Biomechanical Metrics — 1 Unified Score
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: '📐', name: 'Valgus Angle',       unit: 'degrees',  desc: 'Knee inward collapse', good: '< 10°', danger: '> 15°' },
                { icon: '⬆️', name: 'Peak Vertical G',    unit: 'G-force',  desc: 'Landing impact',        good: '≤ 4G',  danger: '> 5.5G' },
                { icon: '↔️', name: 'Peak Lateral G',     unit: 'G-force',  desc: 'Side cut force',        good: '≤ 2G',  danger: '> 3G' },
                { icon: '🔄', name: 'Rotational Velocity', unit: 'rad/s',   desc: 'Knee twist speed',      good: '≤ 2.5', danger: '> 3.5' },
              ].map(m => (
                <div key={m.name} className="bg-pitch-800/50 rounded-xl p-4 border border-grass-500/10 text-center">
                  <div className="text-3xl mb-2">{m.icon}</div>
                  <div className="font-display font-bold text-sm uppercase tracking-wide text-white mb-1">{m.name}</div>
                  <div className="text-[10px] font-mono text-grass-400/40 mb-3">{m.unit} · {m.desc}</div>
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-grass-400">✓ {m.good}</span>
                    <span className="text-danger-400">✗ {m.danger}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="relative z-10 border-t border-grass-500/10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl uppercase tracking-wide text-white mb-3">
            Who Benefits
          </h2>
          <p className="text-grass-400/50 max-w-xl mx-auto">Scout Sleeve democratises talent discovery — making world-class biomechanical analysis available to every athlete, everywhere.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '🔭', title: 'Scouts',           desc: 'Objective rankings replace subjective observation. Filter, compare, and shortlist athletes in seconds.' },
            { icon: '🏟️', title: 'Clubs & Academies', desc: 'Reduce costly recruitment errors by screening for injury risk before signing players.' },
            { icon: '🌍', title: 'Rural Talent',      desc: 'A player training in a village ground appears on the same leaderboard as academy players worldwide.' },
            { icon: '🏃', title: 'Athletes',          desc: 'Real-time feedback on every movement helps players correct their technique and reduce injury risk.' },
          ].map(b => (
            <div key={b.title} className="panel p-6 text-center">
              <div className="text-4xl mb-3">{b.icon}</div>
              <div className="font-display font-bold text-base uppercase tracking-wide text-white mb-2">{b.title}</div>
              <div className="text-xs text-grass-400/50 leading-relaxed">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 border-t border-grass-500/10 bg-pitch-900/40">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display font-black text-5xl uppercase tracking-tight text-white mb-3">
            Every Movement<br/>
            <span className="text-grass-400">Tells a Story</span>
          </h2>
          <p className="text-grass-400/50 mb-8">Ready to read it?</p>
          <button
            onClick={() => navigate('/login')}
            className="btn-primary px-10 py-4 text-lg"
          >
            Open Scout Dashboard →
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-grass-500/10 text-center py-6">
        <p className="text-xs font-mono text-grass-500/25">
          Scout Sleeve — Biomechanical Intelligence Platform · Hackathon 2026
        </p>
      </footer>
    </div>
  )
}
