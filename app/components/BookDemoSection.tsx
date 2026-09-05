'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Building2, 
  PhoneCall, 
  ArrowRight, 
  Sparkles,
  MessageCircle,
  Award,
  TrendingUp,
  Briefcase
} from 'lucide-react';

export default function BookDemoSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    goal: '100x Business Growth Strategy',
    preferredTime: 'Morning (10:00 AM - 1:00 PM IST)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book-demo" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-zinc-950/5 dark:shadow-none relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Founder Photo & Profile Credentials */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/80 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Founder Consultation &bull; 100% Free 1-on-1 Call</span>
            </div>

            {/* Founder Card with High-Res Photo */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-950/70 border border-zinc-200/80 dark:border-zinc-800">
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-3 ring-indigo-500/30 shadow-lg relative">
                  <Image
                    src="/images/sonu-saini-founder.jpg"
                    alt="Sonu Saini - Founder & Chief Architect, Siegfried Outreach"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white text-[11px] shadow-sm font-bold" title="Available for 1-on-1 Consultation">
                  ✓
                </span>
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Sonu Saini
                  </h3>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                    Founder &amp; Chief Architect
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Siegfried Outreach Platform &bull; Growth &amp; AI Engineering
                </p>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed pt-1">
                  &ldquo;I personally invite you to a 15-minute 1-on-1 strategy session. We will break down your sales bottlenecks and architect an automated outreach engine for 100x scale.&rdquo;
                </p>
              </div>
            </div>

            {/* Value Propositions */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <strong className="text-zinc-900 dark:text-white">Custom 100x Growth Blueprint:</strong> Direct review of your D2C brand, agency clients, or B2B sales pipeline.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <strong className="text-zinc-900 dark:text-white">Live Platform Demonstration:</strong> Social Studio, Indian Festival Autopilot, and WhatsApp Cloud broadcasts configured live.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <strong className="text-zinc-900 dark:text-white">Developer MCP &amp; Agent Setup:</strong> Connect Cursor IDE, Claude Desktop, or custom Python agents with our guidance.
                </div>
              </div>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-[11px] text-zinc-500 dark:text-zinc-400">
              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 text-center">
                <div className="font-bold text-zinc-900 dark:text-white text-sm">15 Mins</div>
                <div>Pure Strategy Call</div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 text-center">
                <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">100% Free</div>
                <div>No Sales Pitch</div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 text-center col-span-2 sm:col-span-1">
                <div className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">Direct WhatsApp</div>
                <div>Instant Callback</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-6">
            <div className="bg-zinc-50/90 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 rounded-2xl shadow-sm">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                    Strategy Session Confirmed!
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-zinc-900 dark:text-white">{formData.name}</strong>. Sonu Saini and our growth team will connect with you at <strong className="text-indigo-600 dark:text-indigo-400">{formData.phone || formData.email}</strong> within 15 minutes.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://siegfriedoutreach.com"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      Open Siegfried Outreach Platform ➔
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        Book Free 1-on-1 Growth Consultation
                      </h3>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                        Select your preferred slot with Founder Sonu Saini
                      </p>
                    </div>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-200 dark:border-emerald-500/20 shrink-0">
                      VIP Access
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Your Full Name (नाम) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-750 rounded-lg text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Business / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-750 rounded-lg text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        WhatsApp / Phone (फोन) *
                      </label>
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
                      <label className="block text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Brand / Organization Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. D2C Fashion / Marketing Agency"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-750 rounded-lg text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Primary Business Growth Goal
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-750 rounded-lg text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                    >
                      <option value="100x Business Growth Strategy">100x Business Growth &amp; Omni-Channel Strategy</option>
                      <option value="Social Media Automation">Multi-Platform Social Media Automation (10+ Networks)</option>
                      <option value="Indian Festivals Autopilot">45+ Indian Festivals Autopilot &amp; Festive Sales</option>
                      <option value="WhatsApp Broadcasts">WhatsApp Cloud API &amp; Telegram Bulk Marketing</option>
                      <option value="Paid Ads Management">Meta, Google &amp; TikTok Ads Scaling</option>
                      <option value="Developer MCP Integration">Developer Model Context Protocol (MCP) Setup</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Preferred Meeting Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-750 rounded-lg text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM IST)">Morning Slot (10:00 AM - 1:00 PM IST)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM IST)">Afternoon Slot (1:00 PM - 5:00 PM IST)</option>
                      <option value="Evening (5:00 PM - 8:00 PM IST)">Evening Slot (5:00 PM - 8:00 PM IST)</option>
                      <option value="Instant WhatsApp Callback">⚡ Instant WhatsApp Callback (Within 15 Mins)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-500/20 transition-all active:scale-95 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Book Free 1-on-1 Consultation with Sonu Saini
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-[10px] text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 100% Confidential
                    </span>
                    <span>&bull;</span>
                    <span>No Credit Card Required</span>
                    <span>&bull;</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1">
                      <PhoneCall className="w-3 h-3" /> Direct 1-on-1 Access
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
