'use client';

import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, Send, ShieldCheck, Building2, PhoneCall, ArrowRight, Sparkles } from 'lucide-react';

export default function BookDemoSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    goal: 'Social Media Automation',
    preferredTime: 'Morning (10:00 AM - 1:00 PM IST)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book-demo" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 shadow-xl shadow-zinc-950/5 dark:shadow-none relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/15 blur-[100px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left: Value Proposition */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/80 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enterprise Consultation &amp; Live Walkthrough</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Schedule a 1-on-1 VIP Strategy Session
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Connect directly with our engineering team for a personalized 15-minute system demonstration. We will review your outreach architecture, configure festival autopilots, and map out a bespoke scaling strategy for your brand.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-sm text-zinc-700 dark:text-zinc-300">
                  <strong className="text-zinc-900 dark:text-white">Custom Architecture Review:</strong> Tailored setup for D2C Brands, Agencies, or Enterprise Teams.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-sm text-zinc-700 dark:text-zinc-300">
                  <strong className="text-zinc-900 dark:text-white">Live Platform Demonstration:</strong> Social Studio, WhatsApp Cloud API &amp; Telemetry Queues.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-sm text-zinc-700 dark:text-zinc-300">
                  <strong className="text-zinc-900 dark:text-white">Developer MCP Integration:</strong> Direct setup assistance for Cursor IDE and Claude Desktop.
                </div>
              </div>
            </div>

            {/* Corporate Summary Box */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1.5 mt-4">
              <div className="flex items-center gap-2 font-semibold text-zinc-800 dark:text-zinc-200">
                <Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Siegfried Outreach Platform</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                <div><span className="text-zinc-400 dark:text-zinc-500">Support:</span> <span className="text-zinc-700 dark:text-zinc-300 font-medium">support@siegfriedoutreach.com</span></div>
                <div><span className="text-zinc-400 dark:text-zinc-500">Security:</span> <span className="text-zinc-700 dark:text-zinc-300 font-medium">FIDO2 Passkeys &amp; WebAuthn</span></div>
                <div><span className="text-zinc-400 dark:text-zinc-500">SLA:</span> <span className="text-emerald-600 dark:text-emerald-400 font-semibold">&lt; 15 Min Response Guarantee</span></div>
                <div><span className="text-zinc-400 dark:text-zinc-500">Availability:</span> <span className="text-zinc-700 dark:text-zinc-300 font-medium">Global 24/7 Cloud</span></div>
              </div>
            </div>
          </div>

          {/* Right: Booking Card Form */}
          <div className="lg:col-span-6">
            <div className="bg-zinc-50/70 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 rounded-xl shadow-xs">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Consultation Request Received</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto">
                    Thank you, <span className="text-zinc-900 dark:text-white font-semibold">{formData.name}</span>. A senior specialist will reach out to <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{formData.email}</span> shortly.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://siegfriedoutreach.com"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
                    >
                      Open Siegfried Platform ➔
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      Reserve 15-Minute Strategy Slot
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-200 dark:border-emerald-500/20">
                      Free Consultation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rohit Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-750 rounded-lg text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="rohit@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-750 rounded-lg text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mb-1">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-750 rounded-lg text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mb-1">Organization / Brand</label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Corp / D2C Brand"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-750 rounded-lg text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mb-1">Primary Focus Area</label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-750 rounded-lg text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                    >
                      <option value="Social Media Automation">Multi-Platform Social Media Automation (10+ Networks)</option>
                      <option value="Indian Festivals Autopilot">Indian Festivals 45+ Autopilot &amp; Creative Scheduler</option>
                      <option value="WhatsApp Broadcasts">WhatsApp Cloud API &amp; Telegram Bulk Marketing</option>
                      <option value="AI Agent & MCP">Developer Model Context Protocol (MCP) Integration</option>
                      <option value="Custom Enterprise Plan">Custom Enterprise Multi-Tenant Workspace</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mb-1">Preferred Time Window</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-750 rounded-lg text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM IST)">Morning (10:00 AM - 1:00 PM IST)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM IST)">Afternoon (1:00 PM - 5:00 PM IST)</option>
                      <option value="Evening (5:00 PM - 8:00 PM IST)">Evening (5:00 PM - 8:00 PM IST)</option>
                      <option value="Instant Callback">Instant WhatsApp Callback (Within 15 Mins)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Confirm Strategy Session Request
                  </button>

                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 text-center flex items-center justify-center gap-1.5 pt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    No credit card required. Strictly confidential consultation.
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
