'use client';

import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, Send, Sparkles, Building2, Mail, ShieldCheck, PhoneCall, UserCheck } from 'lucide-react';

export default function BookDemoSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    goal: 'Social Media Automation',
    preferredTime: 'Morning (10:00 AM - 1:00 PM IST)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book-demo" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Container with modern dark glassmorphism styling */}
      <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-indigo-500/30 p-8 sm:p-12 shadow-2xl shadow-indigo-500/10 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Demo Value Props & Company Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Free 1-on-1 VIP Strategy Consultation (15-Min)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Get a Personalized{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                1-on-1 Live Demo
              </span>{' '}
              &amp; Growth Blueprint
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Book a live 15-minute video strategy call with our senior outreach engineers. We will show you exactly how to automate your social studio, launch WhatsApp marketing broadcasts, and scale your brand sales 100x.
            </p>

            {/* Checklist of what is included */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-200">
                  <span className="font-semibold text-white">Live Feature Walkthrough:</span> See Social Studio, Indian Festivals Autopilot &amp; Campaign Hub live.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-200">
                  <span className="font-semibold text-white">Custom ROI Blueprint:</span> Tailored strategy for D2C Brands, Digital Agencies, or B2B SaaS.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-200">
                  <span className="font-semibold text-white">MCP &amp; Agent Setup:</span> Connect Cursor IDE / Claude Desktop MCP tools to your workspace.
                </div>
              </div>
            </div>

            {/* Verified Company Details Card */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 space-y-2 mt-6">
              <div className="flex items-center gap-2 font-semibold text-slate-200">
                <Building2 className="w-4 h-4 text-indigo-400" />
                <span>Siegfried Outreach Platform (Corporate Info)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                <div><span className="text-slate-500">Official Portal:</span> <a href="https://siegfriedoutreach.com" className="text-indigo-400 hover:underline">siegfriedoutreach.com</a></div>
                <div><span className="text-slate-500">Support Email:</span> <span className="text-slate-300">support@siegfriedoutreach.com</span></div>
                <div><span className="text-slate-500">Security Standard:</span> <span className="text-slate-300">FIDO2 Passkeys &amp; SOC2 Compliant</span></div>
                <div><span className="text-slate-500">Response SLA:</span> <span className="text-emerald-400">&lt; 15 Mins Guaranteed</span></div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-950/80 backdrop-blur-xl border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Demo Request Received! (अनुरोध प्राप्त हुआ)</h3>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our growth specialist will contact you at <span className="text-indigo-400 font-semibold">{formData.email}</span> within 15 minutes to confirm your meeting slot.
                  </p>
                  <div className="pt-4">
                    <a
                      href="https://siegfriedoutreach.com"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
                    >
                      Visit Platform App ➔
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      Request Free 1-on-1 Meeting (मीटिंग बुक करें)
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                      100% Free
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-300 mb-1">Your Full Name (नाम) *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Rohit Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-300 mb-1">Work / Personal Email (ईमेल) *</label>
                      <input
                        type="email"
                        required
                        placeholder="rohit@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-300 mb-1">Phone / WhatsApp Number (फोन नंबर) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-300 mb-1">Company / Brand Name</label>
                      <input
                        type="text"
                        placeholder="e.g., D2C Brand / Agency"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1">Primary Growth Goal (मुख्य उद्देश्य)</label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Social Media Automation">Multi-Platform Social Media Automation (10+ Networks)</option>
                      <option value="Indian Festivals Autopilot">Indian Festivals 45+ Autopilot &amp; Creative Scheduler</option>
                      <option value="WhatsApp Broadcasts">WhatsApp Cloud API &amp; Telegram Bulk Marketing</option>
                      <option value="AI Agent & MCP">Developer Model Context Protocol (MCP) Integration</option>
                      <option value="Custom Enterprise Plan">Custom Enterprise Multi-Tenant Workspace Plan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1">Preferred Meeting Time Slot</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM IST)">Morning (10:00 AM - 1:00 PM IST)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM IST)">Afternoon (1:00 PM - 5:00 PM IST)</option>
                      <option value="Evening (5:00 PM - 8:00 PM IST)">Evening (5:00 PM - 8:00 PM IST)</option>
                      <option value="Instant WhatsApp Callback">Instant WhatsApp Callback (Within 10 Mins)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    Confirm Free VIP Strategy Call (मीटिंग बुक करें)
                  </button>

                  <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Zero credit card required. 100% confidential strategy session.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
