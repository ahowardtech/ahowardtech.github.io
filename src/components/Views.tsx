/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CONSULTANTS, COMPETENCIES } from '../constants';
import { Shield, Zap, TrendingUp, Workflow, Rocket, History, Mail, MapPin } from 'lucide-react';

export function HomeView({ onNavigate }: { onNavigate: (v: string) => void }) {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 mb-8 bg-brand-surface-light/50 px-4 py-1.5 border border-brand-accent/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-agent-pulse" />
            <span className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em]">
              Autonomous Efficiency Engaged
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tight">
            Expert-Led, <span className="cyan-gradient-text">Agent-Driven</span><br />
            Enterprise Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between high-level IT strategy and the agentic future. Our senior consultants deploy bespoke AI workflows to secure your infrastructure and automate complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('contact')}
              className="bg-brand-accent text-brand-bg px-10 py-5 font-black text-sm tracking-[0.2em] uppercase hover:brightness-110 transition-all shadow-[0_0_20px_rgba(100,255,218,0.2)]"
            >
              Deploy Strategy
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('methodology')}
              className="bg-transparent text-white px-10 py-5 font-black text-sm tracking-[0.2em] uppercase border border-white/20 hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all"
            >
              View Methodology
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Core Architecture Section */}
      <section className="px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider">Core Architecture</h2>
          <div className="w-24 h-1 bg-brand-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 glass-card p-12 flex flex-col justify-end min-h-[450px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
              <Zap className="w-64 h-64 text-brand-accent" />
            </div>
            <h3 className="text-3xl font-bold text-brand-accent mb-6 uppercase tracking-tight">Agentic Workflow Integration</h3>
            <p className="text-brand-text-secondary text-lg max-w-xl leading-relaxed">
              Traditional automation is static. Our "Sovereign Agents" adapt to real-time enterprise data, executing complex multi-step processes across your legacy and cloud infrastructure with surgical precision.
            </p>
          </div>

          <div className="md:col-span-4 glass-card p-10 flex flex-col items-start gap-8">
            <div className="w-14 h-14 flex items-center justify-center bg-brand-surface ring-1 ring-brand-accent/20">
              <Shield className="text-brand-accent w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Hardened Security</h3>
            <p className="text-brand-text-secondary leading-relaxed">
              Zero-trust architectures designed for the age of autonomous compute. Every agent action is logged, audited, and confined to precise cryptographic boundaries.
            </p>
          </div>

          <div className="md:col-span-4 glass-card p-10 flex flex-col items-start gap-8">
            <div className="w-14 h-14 flex items-center justify-center bg-brand-surface ring-1 ring-brand-accent/20">
              <TrendingUp className="text-brand-accent w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Strategic Oversight</h3>
            <p className="text-brand-text-secondary leading-relaxed">
              Humans remain at the helm. Our dashboard provides real-time telemetry into agent decision-making, ensuring total alignment with corporate governance.
            </p>
          </div>

          <div className="md:col-span-8 glass-card p-12 relative overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByv_P_vAEvE6BCUkwqrfWDAODCXQLS8JDWFVlCHBx1y1Jx96PGKz-dAmRUJeQMNUIX2q8poZ_rlMedNWgwrlAnH9a5DwPAWSFiVzb_iZouZ9SAKJo1EXFLDfKN4nGenF_sBlzfR2KR-repIbODEV5rdY577K5zVTv-BKtvBsHFKpK2GnEp0be3sAErsPG5QhblbtLnDUMPxrTPvM-6Ib9Bxo8hDmgigERnTD0be0T-tBxtU2XpEpg7-s8ijcfIE8xm2KFz7LmnMpws" 
              alt="Data Center"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="relative z-10 flex flex-col h-full justify-center">
              <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Enterprise Resilience</h3>
              <p className="text-brand-text-secondary text-lg max-w-md leading-relaxed">
                Scale without increasing operational headcount. Our methodologies allow systems to self-heal and optimize under the guidance of senior-level engineering principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section className="bg-brand-surface-light/20 py-32 px-8 border-y border-brand-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tight">The Sovereign Council</h2>
              <p className="text-brand-text-secondary text-lg leading-relaxed">
                Four world-class architects specializing in the intersection of AI orchestration, infrastructure security, and enterprise transformation.
              </p>
            </div>
            <div className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] border-b border-brand-accent pb-2">
              Senior Leadership
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CONSULTANTS.map((c) => (
              <motion.div 
                key={c.id} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-brand-surface">
                  <img 
                    src={c.image} 
                    alt={c.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-60" />
                </div>
                <h4 className="text-xl font-bold text-white mb-1 uppercase">{c.name}</h4>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">{c.role}</p>
                <p className="text-brand-text-secondary text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {c.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 pb-32">
        <div className="max-w-4xl mx-auto glass-card p-16 text-center border-t-2 border-brand-accent relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-accent/5 blur-[80px]" />
          <h2 className="text-4xl font-bold text-white mb-8 leading-tight uppercase">Initialize Your Sovereign Strategy</h2>
          <p className="text-lg text-brand-text-secondary mb-12 max-w-2xl mx-auto">
            Join the vanguard of enterprises leveraging agentic workflows for unprecedented operational clarity.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('contact')}
            className="bg-brand-accent text-brand-bg px-12 py-6 font-black text-md tracking-[0.2em] uppercase hover:brightness-110 transition-all"
          >
            Request Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
}

export function MethodologyView() {
  const steps = [
    { num: '01', title: 'Orchestration', desc: 'Senior experts architect the solution blueprints and decompose requirements into precise agentic tasks.', icon: Workflow },
    { num: '02', title: 'Generation', desc: 'Parallel agent chains execute development tasks in synchronous environments at 10x velocity.', icon: Zap },
    { num: '03', title: 'Validation', desc: 'Automated testing agents and human audits verify every line against performance protocols.', icon: Shield },
    { num: '04', title: 'Deployment', desc: 'Seamless integration into your production environment with fully documented, sovereign ownership.', icon: Rocket }
  ];

  function RocketIcon(props: any) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-4 5-4"/>
        <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 4-5 4-5"/>
      </svg>
    )
  }

  return (
    <div className="pt-20 space-y-32">
      <section className="max-w-7xl mx-auto px-8 text-center mt-32">
        <div className="inline-flex items-center gap-2 mb-8 bg-brand-surface-light/50 px-4 py-1.5 border border-brand-accent/20 rounded-full">
          <span className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em]">The Agentic Edge</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-10 max-w-5xl mx-auto leading-tight">
          4 Senior Experts. <span className="text-brand-accent">100+ Agents.</span><br />
          Unlimited Precision.
        </h1>
        <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto leading-relaxed">
          We've replaced the bloat of traditional junior-heavy teams with a proprietary orchestration layer where elite consultants lead a tireless agentic workforce.
        </p>
      </section>

      {/* Orchestration Core */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 glass-card p-12">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">The Orchestration Core</h2>
            <p className="text-brand-text-secondary text-lg mb-10 leading-relaxed max-w-xl">
              Four world-class architects don't just write code; they design the system prompts, define constraints, and audit the output of 24/7 AI labor.
            </p>
            <div className="flex gap-4">
              {CONSULTANTS.map(c => (
                <img key={c.id} src={c.image} className="w-16 h-16 rounded-lg object-cover grayscale hover:grayscale-0 transition-all border border-brand-accent/20" alt={c.name} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative overflow-hidden rounded-sm min-h-[300px]">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQhLVo-mhxxwB61kdf6M2arMn1TrOLw9CyACRtFHIigOZpXy8PzuS3FW8GybTbEBNq_WxzOtgPHKup7WqQIh8_ze-rmCUuffQ8ZGVerFe_hSRx4kfzxUZLVyd1LUIfdijAIVc1P6MB9bmbMfBbFyzKb84uXTIroj8i8WNFbJ0X1XR4OBrrzG5hOoUhMQntqKi_1mIWcdbq9qHHOwXYIBtANaqltWqHpfRhX8mOcq3PmtT7LMASt3NuKDlcrKQAy1BdCGjsmYDjbi1m" alt="Analysis" className="absolute inset-0 w-full h-full object-cover brightness-50" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <div className="text-6xl font-black text-brand-accent mb-2">98%</div>
                <div className="text-xs uppercase font-bold tracking-widest text-white">Code Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="bg-brand-surface py-32 border-y border-brand-accent/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-widest">The Process</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((s) => (
              <div key={s.num} className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-brand-accent/10">{s.num}</span>
                  <s.icon className="text-brand-accent w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase">{s.title}</h3>
                <p className="text-sm text-brand-text-secondary leading-relaxed uppercase tracking-tighter">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Shift Table */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <h2 className="text-4xl font-bold text-white mb-20 text-center uppercase tracking-widest">The Shift</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse glass-card overflow-hidden">
            <thead>
              <tr className="border-b border-brand-accent/10">
                <th className="p-8 text-xs font-black uppercase tracking-[0.2em] text-brand-text-secondary">Dimension</th>
                <th className="p-8 text-xs font-black uppercase tracking-[0.2em] text-brand-text-secondary">Traditional Dev Shop</th>
                <th className="p-8 text-xs font-black uppercase tracking-[0.3em] text-brand-accent bg-brand-accent/5">The Sovereign Edge</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-accent/5">
                <td className="p-8 font-bold text-lg text-white uppercase tracking-tight">Team Dynamics</td>
                <td className="p-8 text-brand-text-secondary opacity-70">2 Seniors + 12 Juniors (High overhead)</td>
                <td className="p-8 text-white font-medium bg-brand-accent/5">4 Seniors + Infinite Agent Workers</td>
              </tr>
              <tr className="border-b border-brand-accent/5">
                <td className="p-8 font-bold text-lg text-white uppercase tracking-tight">Reliability</td>
                <td className="p-8 text-brand-text-secondary opacity-70">Varies; manual peer reviews</td>
                <td className="p-8 text-white font-medium bg-brand-accent/5">Deterministic prompts; multi-agent validation</td>
              </tr>
              <tr>
                <td className="p-8 font-bold text-lg text-white uppercase tracking-tight">Velocity</td>
                <td className="p-8 text-brand-text-secondary opacity-70">Bi-weekly sprint cycles</td>
                <td className="p-8 text-white font-medium bg-brand-accent/5">Daily feature production cycles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export function ContactView() {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-8">
      <div className="mt-32 mb-20">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-brand-accent animate-agent-pulse" />
          <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.3em]">Available for Q4 Engagements</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
          Architecting the next generation of <span className="cyan-gradient-text">agentic intelligence.</span>
        </h1>
        <p className="text-xl text-brand-text-secondary max-w-2xl leading-relaxed">
          Connect with our lead consultants to define your project scope, security parameters, and deployment roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-32">
        <div className="lg:col-span-8">
          <section className="glass-card p-12">
            <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-tight">Project Inquiry</h2>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-secondary">Lead Contact</label>
                  <input type="text" placeholder="Full Name" className="w-full bg-transparent border-0 border-b border-brand-accent/20 focus:border-brand-accent focus:ring-0 transition-colors py-4 text-white" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-secondary">Enterprise Email</label>
                  <input type="email" placeholder="name@company.com" className="w-full bg-transparent border-0 border-b border-brand-accent/20 focus:border-brand-accent focus:ring-0 transition-colors py-4 text-white" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-secondary mb-3 inline-block">Service Track</label>
                  <select className="w-full bg-transparent border-0 border-b border-brand-accent/20 focus:border-brand-accent focus:ring-0 text-white py-4 appearance-none">
                    <option>Cyber-Security Audit</option>
                    <option>Agentic AI Integration</option>
                    <option>Cloud Infrastructure</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-secondary mb-3 inline-block">Target Budget</label>
                  <select className="w-full bg-transparent border-0 border-b border-brand-accent/20 focus:border-brand-accent focus:ring-0 text-white py-4 appearance-none">
                    <option>$50k - $100k</option>
                    <option>$100k - $500k</option>
                    <option>$500k+</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-secondary mb-3 inline-block">Timeline</label>
                  <select className="w-full bg-transparent border-0 border-b border-brand-accent/20 focus:border-brand-accent focus:ring-0 text-white py-4 appearance-none">
                    <option>Next 30 Days</option>
                    <option>Next 3 Months</option>
                    <option>Strategic Partnership</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-secondary">Technical Requirements</label>
                  <textarea placeholder="Briefly describe the challenge..." rows={4} className="w-full bg-transparent border-0 border-b border-brand-accent/20 focus:border-brand-accent focus:ring-0 transition-colors py-4 text-white resize-none" />
              </div>

              <div className="flex justify-end pt-8">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-accent text-brand-bg px-12 py-5 font-black uppercase tracking-[0.2em] text-xs"
                >
                  Initialize Inquiry
                </motion.button>
              </div>
            </form>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <div className="glass-card p-10 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-text-secondary">Contact Nodes</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-brand-accent/10 p-3 ring-1 ring-brand-accent/20 rounded-sm">
                  <Workflow className="text-brand-accent w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold uppercase tracking-tight">HQ - Berlin Hub</p>
                  <p className="text-xs text-brand-text-secondary">Torstraße 112, 10119 Berlin</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-brand-accent/10 p-3 ring-1 ring-brand-accent/20 rounded-sm">
                  <Shield className="text-brand-accent w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold uppercase tracking-tight">Encrypted Comms</p>
                  <p className="text-xs text-brand-text-secondary">Signal: +49 176 000 0000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-sm h-64">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBomdLKUIckBGFzjhkZSVZXVO1It_iefADxHWzhL0UlI9HbIllfo6uWGBRKhkilQo59l9HRaAvOSAkHMw5yjzAvFWcu2WerNJpzJj3HM_TrMTbdernn2v88RLlqydy00hBgunSRLatynLjvt9o4mtaff6sXWAnCGq_6L-tlyVuXoBwCvbvDtjHBbPX8mSGkyf4A4s3BCAMtLnyWgHLSAVBgCf4l1C04r6PYlIyfsgfMyPhYQl0ObQpRJYNP5v_jvL4yxwOxA3aJUIFh" alt="Berlin Office" className="w-full h-full object-cover filter brightness-50 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-black text-2xl tracking-tighter uppercase">Berlin Hub</p>
              <p className="text-brand-accent text-[10px] font-bold uppercase tracking-widest">Office_01</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesView() {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-8">
      <section className="py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center lg:mt-24">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.3em] font-black text-brand-accent text-xs">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            Agentic Intelligence Enabled
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.95] tracking-tighter">
            Enterprise Solutions<br />
            <span className="text-brand-accent">Engineered at Scale</span>
          </h1>
          <p className="text-xl text-brand-text-secondary leading-relaxed max-w-2xl mb-12">
            We deploy autonomous coding agents and senior architects to deliver high-performance enterprise applications with mathematical precision.
          </p>
          <div className="flex gap-6">
            <button className="bg-brand-accent text-brand-bg px-10 py-5 font-black uppercase text-xs tracking-widest">Explore Capability</button>
            <button className="border border-brand-accent/40 text-brand-accent px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-brand-accent/5">Technical Specs</button>
          </div>
        </div>
        <div className="lg:col-span-5 h-[500px]">
          <div className="glass-card h-full p-4">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB46hAeRx9bNeRVM6lI_alsCNBf2SlM6Xia2mPNTBmXQu36_fklZ6FeAapKsJsh_L32p0n2OkO-3kX5AiguIdU6gRJOpWHO8eG8WRlfADKVD3GRszoJzuviCAJ5vnvwuC7YvDEP5Zp9XqzNgwMr5lXs3P3FNiI7tIZ0GiLPE-gifdWa7gKrGNX15-_BXqw7HymqKA6jB0cGVCpNyU0Cz-3wxZ05XIXLfN0OAKwjJWJxZ1YHK1XjB-JbRNRHu90o06SEk0xwtgrDgT9J" className="w-full h-full object-cover grayscale brightness-75" alt="Infrastructure" />
          </div>
        </div>
      </section>

      <section className="pb-32">
        <h2 className="text-3xl font-black text-white mb-20 uppercase tracking-[0.2em] text-center">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPETENCIES.map(item => {
            const Icon = item.id === 'app-dev' ? Rocket : item.id === 'legacy' ? History : Workflow;
            return (
              <div key={item.id} className="glass-card p-10 flex flex-col justify-between min-h-[450px] group">
                <div>
                  <Icon className="text-brand-accent w-10 h-10 mb-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-brand-text-secondary leading-relaxed mb-10">{item.description}</p>
                </div>
                <ul className="space-y-4 pt-10 border-t border-white/5">
                  {item.tags.map(tag => (
                    <li key={tag} className="text-[10px] font-black uppercase tracking-widest text-brand-accent opacity-60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
