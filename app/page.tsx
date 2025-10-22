"use client";
import { useEffect } from "react";

export default function Home() {
  // --- Fade-in scroll reveal effect ---
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <div className="mx-auto max-w-5xl px-6 py-20 space-y-24">
        {/* HERO */}
     <div className="flex items-center gap-3">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 64"
  fill="url(#boltGradient)"
  className="h-10 w-5 glow-bolt"
>
  <title>Sidekick lightning</title>
  <defs>
    <linearGradient id="boltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#FFD84D" />
      <stop offset="55%" stopColor="#FFB300" />
      <stop offset="100%" stopColor="#E39900" />
    </linearGradient>
  </defs>
  <path
    d="M18 2 L4 36 H14 L8 62 L28 28 H18 Z"
    stroke="none"
    strokeWidth="0"
  />
</svg>



  <span className="text-2xl font-extrabold tracking-tight text-white">
    SIDEKICK
  </span>
</div>


        <section className="fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Meet Sidekick — <br />
            <span className="text-[#FFD84D]">Your AI Sales Platform</span>
          </h1>
          <p className="mt-5 text-lg text-gray-400 max-w-2xl leading-relaxed">
            Before. During. After the call. <br />
            Real-time insights, intelligent notes, and instant follow-ups — built for speed, focus, and precision.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-xl bg-[#FFD84D] px-6 py-3 font-semibold text-black shadow-[0_0_20px_#FFD84D66] hover:shadow-[0_0_35px_#FFD84D99] transition-all"
            >
              Join the Beta
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white hover:bg-gray-900 transition-all"
            >
              See in Action
            </a>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="fade-in grid gap-8 sm:grid-cols-3 text-gray-300">
          {[
            {
              title: "🕵️ Before the Call",
              desc: "Instant briefings on the buyer, their company, and recent activity.",
            },
            {
              title: "🎙️ During the Call",
              desc: "Live prompts and insights that keep you sharp while you speak.",
            },
            {
              title: "✉️ After the Call",
              desc: "Sidekick drafts your summary, next steps, and follow-up automatically.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-gradient-to-b from-[#111] to-[#000] border border-gray-800 p-6 shadow-[0_0_25px_rgba(255,216,77,0.05)] hover:shadow-[0_0_35px_rgba(255,216,77,0.15)] transition-all"
            >
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-gray-400">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* STORY */}
        <section className="fade-in">
          <div className="rounded-2xl bg-gradient-to-b from-[#0a0a0a] to-[#000] border border-gray-800 p-8 shadow-[0_0_40px_rgba(255,216,77,0.05)]">
            <p className="text-gray-300 text-lg leading-relaxed">
              Sidekick was created by sales operators and engineers obsessed with fixing the grind of selling. We are building a lightning-fast AI platform that helps reps stay focused, sound sharp, and move faster — no fluff, no friction, just performance.
            </p>
          </div>
        </section>

        {/* WAITLIST */}
        <section id="waitlist" className="fade-in">
          <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 64"
    fill="url(#boltGradient)"
    className="h-8 w-4 glow-bolt -translate-y-0.5"

  >
    <title>Sidekick lightning</title>
    <defs>
      <linearGradient id="boltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFD84D" />
        <stop offset="55%" stopColor="#FFB300" />
        <stop offset="100%" stopColor="#E39900" />
      </linearGradient>
    </defs>
    <path d="M18 2 L4 36 H14 L8 62 L28 28 H18 Z" />
  </svg>
  <span>Ready to meet your Sidekick?</span>
</h2>

          <p className="mt-3 text-gray-400 max-w-xl">
            Join the beta and be among the first to experience Follow-Up Intelligence.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-800 bg-black shadow-[0_0_30px_rgba(255,216,77,0.05)]">
            <iframe
              src="https://tally.so/embed/m6XXxN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="470"
              frameBorder="0"
              title="Sidekick Beta Waitlist"
            />
          </div>
          <p className="mt-3 text-xs text-gray-500">No spam. Just early access.</p>
        </section>

        {/* FOOTER */}
        <footer className="fade-in border-t border-gray-800 pt-6 text-sm text-gray-500">
          © 2025 Sidekick Technologies LLC. All rights reserved.
          <span className="ml-2 italic text-gray-600">Before. During. After.</span>
        </footer>
      </div>
    </main>
  );
}
