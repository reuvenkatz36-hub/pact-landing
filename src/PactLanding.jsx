import React, { useState } from 'react';

export default function PactLanding() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const response = await fetch('https://formspree.io/f/xaqkqnkl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Try again.');
      }
    } catch (err) {
      setError('Network error. Try again.');
    }
    setSubmitting(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Bebas+Neue&display=swap');

        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #FFF8F3; }
        .font-app     { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .font-jp      { font-family: 'Hiragino Kaku Gothic Pro', 'Yu Gothic', sans-serif; }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.3); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pop-in {
          0%   { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 184, 0, 0.4); }
          50%      { box-shadow: 0 0 0 12px rgba(255, 184, 0, 0); }
        }

        .pulse-dot   { animation: pulse-dot 1.6s ease-in-out infinite; }
        .float-slow  { animation: float-slow 5s ease-in-out infinite; }
        .pop-in      { animation: pop-in 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .glow-pulse  { animation: glow-pulse 2s ease-in-out infinite; }
        .pop-1 { animation-delay: 0.05s; } .pop-2 { animation-delay: 0.15s; }
        .pop-3 { animation-delay: 0.25s; } .pop-4 { animation-delay: 0.35s; }
        .pop-5 { animation-delay: 0.45s; } .pop-6 { animation-delay: 0.55s; }

        .shimmer-cta {
          background: linear-gradient(90deg, #FF006E 0%, #FF4D9D 40%, #FF80B8 50%, #FF4D9D 60%, #FF006E 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        .tap { transition: all 0.15s ease-out; cursor: pointer; }
        .tap:hover { transform: translateY(-2px); }
        .tap:active { transform: scale(0.97); }

        .gradient-text {
          background: linear-gradient(135deg, #FF6B47 0%, #EC4899 60%, #7C7AFF 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .gold-text {
          background: linear-gradient(135deg, #FFB800 0%, #FF6B47 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center !important; }
          .hero-grid h1 { font-size: 52px !important; }
          .hero-form { justify-content: center !important; }
          .founding-card { margin: 24px auto 0 !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .h1-problem { font-size: 32px !important; }
          .h1-final { font-size: 48px !important; }
        }
      `}</style>

      <div className="font-app" style={{ background: '#FFF8F3', minHeight: '100vh', position: 'relative' }}>
        {/* Decorative blurs */}
        <div style={{
          position: 'absolute', top: '5%', right: '5%', width: '500px', height: '500px',
          background: 'radial-gradient(closest-side, rgba(236,72,153,0.18), transparent)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '0%', width: '400px', height: '400px',
          background: 'radial-gradient(closest-side, rgba(255,107,71,0.15), transparent)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />

        {/* Nav */}
        <nav style={{
          position: 'relative', maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px',
        }} className="pop-in pop-1">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '26px', fontWeight: 800, color: '#0F101A', letterSpacing: '-0.02em' }}>pact</span>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6B47' }} className="pulse-dot" />
          </div>
          <a href="#signup" className="tap" style={{
            padding: '10px 20px', borderRadius: '999px', fontSize: '13px',
            fontWeight: 800, color: 'white', background: '#0F101A', textDecoration: 'none',
          }}>
            Claim spot →
          </a>
        </nav>

        {/* Hero */}
        <section style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 96px' }}>
          <div className="hero-grid" style={{
            display: 'grid', gridTemplateColumns: '1.1fr 1fr', alignItems: 'center', gap: '48px',
          }}>
            <div>
              {/* Founding 50 badge */}
              <div className="pop-in pop-1 glow-pulse" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '8px 14px', borderRadius: '999px',
                background: 'linear-gradient(135deg, #FFB800 0%, #FF6B47 100%)',
                boxShadow: '0 4px 16px rgba(255, 184, 0, 0.35)',
              }}>
                <span style={{ fontSize: '14px' }}>🏆</span>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.14em', color: 'white', textTransform: 'uppercase' }}>
                  First 50 · Founding members
                </span>
              </div>

              <h1 className="pop-in pop-2" style={{
                fontWeight: 800, color: '#0F101A', letterSpacing: '-0.025em',
                lineHeight: 0.95, marginTop: '20px', fontSize: '76px',
              }}>
                From group chat<br />
                to <span className="gradient-text">plane tickets.</span>
              </h1>

              <p className="pop-in pop-3" style={{
                fontSize: '18px', color: '#6B6D7A', marginTop: '24px',
                lineHeight: 1.4, fontWeight: 500, maxWidth: '480px',
              }}>
                Your group chat has said "we should travel" 47 times.
                You've gone zero. <span style={{ color: '#0F101A', fontWeight: 700 }}>Pact closes the loop.</span>
              </p>

              {/* Founding 50 perks card */}
              <div className="pop-in pop-3 founding-card" style={{
                marginTop: '24px', maxWidth: '480px',
                padding: '16px 18px', borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(255,184,0,0.08) 0%, rgba(255,107,71,0.06) 100%)',
                border: '1px solid rgba(255, 184, 0, 0.3)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px' }}>✨</span>
                  <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' }} className="gold-text">
                    What the first 50 get
                  </span>
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#0F101A', lineHeight: 1.55 }}>
                  🏆 <strong>Founding Member badge</strong> — permanent in-app status. <span style={{ color: '#6B6D7A', fontWeight: 500 }}>Can't be bought. Only earned.</span><br />
                  ✨ <strong>Lifetime free access</strong> — never pay a cent, forever.
                </div>
              </div>

              <div className="pop-in pop-4" id="signup" style={{ marginTop: '24px' }}>
                {!submitted ? (
                  <>
                    <div className="hero-form" style={{
                      display: 'flex', gap: '8px', maxWidth: '440px', padding: '6px',
                      borderRadius: '16px', background: 'white',
                      border: '1px solid #EEEEF1',
                      boxShadow: '0 4px 24px rgba(15,16,26,0.06)',
                    }}>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        disabled={submitting}
                        style={{
                          flex: 1, padding: '10px 12px', fontSize: '14px',
                          fontWeight: 500, color: '#0F101A', background: 'transparent',
                          outline: 'none', border: 'none', fontFamily: 'inherit',
                        }}
                      />
                      <button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="shimmer-cta tap"
                        style={{
                          padding: '10px 20px', borderRadius: '12px', fontSize: '13px',
                          fontWeight: 800, color: 'white', border: 'none', whiteSpace: 'nowrap',
                          boxShadow: '0 4px 16px rgba(255,0,110,0.35)', fontFamily: 'inherit',
                          opacity: submitting ? 0.7 : 1,
                        }}
                      >
                        {submitting ? '...' : 'Claim my spot'}
                      </button>
                    </div>
                    {error && (
                      <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: 600, color: '#FF006E' }}>
                        {error}
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
                      <div style={{ display: 'flex' }}>
                        {['#FF6B47', '#7C7AFF', '#00D26A', '#EC4899'].map((c, i) => (
                          <div key={i} style={{
                            width: '24px', height: '24px', borderRadius: '50%',
                            background: c, border: '2px solid #FFF8F3', marginLeft: i === 0 ? 0 : '-8px',
                          }} />
                        ))}
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#6B6D7A' }}>
                        Spots fill once we hit <span style={{ color: '#0F101A' }}>50</span> · no spam
                      </span>
                    </div>
                  </>
                ) : (
                  <div style={{
                    maxWidth: '440px', padding: '16px', borderRadius: '16px',
                    display: 'flex', alignItems: 'center', gap: '12px',
                    background: 'linear-gradient(135deg, #FFB800 0%, #FF6B47 100%)',
                    boxShadow: '0 8px 24px rgba(255,184,0,0.3)',
                  }}>
                    <div style={{ fontSize: '28px' }}>🏆</div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: 'white' }}>You're a Founding Member.</div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.95)' }}>
                        Lifetime access locked in. We'll send you the app on Nov 14.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Phone mockup */}
            <div className="pop-in pop-5" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div className="float-slow" style={{ position: 'relative', width: '300px', height: '610px' }}>
                <div style={{
                  position: 'absolute', inset: '-48px', pointerEvents: 'none',
                  background: 'radial-gradient(closest-side, rgba(236,72,153,0.30), rgba(124,122,255,0.15) 60%, transparent)',
                  filter: 'blur(20px)',
                }} />
                <div style={{
                  position: 'relative', width: '100%', height: '100%',
                  borderRadius: '40px', overflow: 'hidden', background: '#FFF8F3',
                  border: '8px solid #0F101A',
                  boxShadow: '0 40px 100px -20px rgba(15,16,26,0.4)',
                  transform: 'rotate(-3deg)',
                }}>
                  <div style={{ padding: '16px', height: '100%', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                        <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F101A' }}>pact</span>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FF6B47' }} />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 8px', borderRadius: '999px', background: '#FFF1E6' }}>
                        <span style={{ fontSize: '10px' }}>🔥</span>
                        <span style={{ fontSize: '9px', fontWeight: 800, color: '#FF6B47' }}>23</span>
                      </div>
                    </div>

                    <div style={{
                      position: 'relative', borderRadius: '18px', overflow: 'hidden', padding: '12px',
                      background: 'linear-gradient(135deg, #FF6B47 0%, #EC4899 60%, #7C7AFF 110%)',
                      height: '130px',
                    }}>
                      <div style={{ position: 'absolute', top: '8px', right: '12px', fontSize: '18px' }}>🗼</div>
                      <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase' }}>
                        Live Pact
                      </div>
                      <div style={{ fontSize: '26px', fontWeight: 800, color: 'white', lineHeight: 1, marginTop: '4px' }}>
                        Tokyo<br />Pact
                      </div>
                      <div style={{ fontSize: '10px', fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginTop: '8px' }}>
                        47 days · Sept 14
                      </div>
                    </div>

                    <div style={{ marginTop: '12px' }}>
                      <div style={{ fontSize: '10px', fontWeight: 800, color: '#0F101A', marginBottom: '6px' }}>The Squad</div>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {[
                          { c: '#FF6B47', i: 'R', p: 78 },
                          { c: '#7C7AFF', i: 'M', p: 61 },
                          { c: '#00D26A', i: 'E', p: 53 },
                          { c: '#EC4899', i: 'Y', p: 45 },
                          { c: '#FFB800', i: 'R', p: 28 },
                        ].map((m, idx) => (
                          <div key={idx} style={{ position: 'relative', width: '34px', height: '34px' }}>
                            <svg viewBox="0 0 40 40" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)', position: 'absolute', inset: 0 }}>
                              <circle cx="20" cy="20" r="17" fill="none" stroke="rgba(15,16,26,0.08)" strokeWidth="3" />
                              <circle cx="20" cy="20" r="17" fill="none" stroke={m.c} strokeWidth="3" strokeLinecap="round"
                                strokeDasharray={`${(m.p / 100) * 107} 107`} />
                            </svg>
                            <div style={{
                              position: 'absolute', inset: '4px', borderRadius: '50%',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              color: 'white', fontWeight: 800, fontSize: '11px', background: m.c,
                            }}>{m.i}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: '12px', borderRadius: '14px', padding: '12px', background: '#0F101A' }}>
                      <div style={{ fontSize: '8px', fontWeight: 800, color: '#00D26A', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                        Squad Pot
                      </div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '2px' }}>
                        <span style={{ fontSize: '24px', fontWeight: 800, color: 'white' }}>$4,247</span>
                        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', fontWeight: 700 }}>/ $8,000</span>
                      </div>
                      <div style={{ marginTop: '6px', height: '4px', borderRadius: '999px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                        <div style={{ height: '100%', borderRadius: '999px', width: '53%', background: '#00D26A' }} />
                      </div>
                    </div>

                    <div style={{
                      marginTop: '10px', borderRadius: '14px', padding: '10px',
                      display: 'flex', alignItems: 'center', gap: '8px',
                      background: 'linear-gradient(135deg, #FFF1E6, #FFE4F0)',
                      border: '1px solid #FFD9C2',
                    }}>
                      <div style={{ fontSize: '14px' }}>⚡</div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#0F101A', lineHeight: 1.2 }}>
                        Roni's at 28%. Send her a meme bestie 💀
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
          <div className="pop-in pop-1" style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', color: '#FF6B47', textTransform: 'uppercase' }}>
            The problem
          </div>
          <div className="pop-in pop-2 h1-problem" style={{
            fontWeight: 800, color: '#0F101A', letterSpacing: '-0.02em',
            lineHeight: 1.05, marginTop: '12px', fontSize: '44px',
          }}>
            You and your friends have spent <span className="gradient-text">3 years</span> talking
            about that trip. Group chats die. Plans collapse. <span className="gradient-text">Someone always flakes.</span>
          </div>
          <div className="pop-in pop-3" style={{
            fontSize: '16px', color: '#6B6D7A', marginTop: '24px',
            fontWeight: 500, lineHeight: 1.4, maxWidth: '600px', margin: '24px auto 0',
          }}>
            Pact is the accountability layer your group chat needs. Plan the trip, save together,
            see exactly who's keeping their word — and finally book the damn flights.
          </div>
        </section>

        {/* How it works */}
        <section style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', color: '#FF6B47', textTransform: 'uppercase' }}>
              How it works
            </div>
            <div style={{ fontWeight: 800, color: '#0F101A', letterSpacing: '-0.02em', marginTop: '8px', fontSize: '40px' }}>
              Three steps. One trip.
            </div>
          </div>

          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { num: '01', emoji: '🤝', title: 'Make the Pact', desc: 'Pick the destination, dates, and your crew. AI builds a trip plan around your vibes.', color: '#FF6B47', bg: '#FFF1E6' },
              { num: '02', emoji: '💸', title: 'Save together', desc: 'Everyone logs weekly saves. Squad Pot grows. Streaks build. Slackers get nudged.', color: '#00D26A', bg: '#E6F9F0' },
              { num: '03', emoji: '✈', title: 'Send it', desc: 'Hit the goal, book the flights, post the countdown. The trip you talked about is real.', color: '#EC4899', bg: '#FFE4F0' },
            ].map((step, i) => (
              <div key={i} className="pop-in" style={{
                borderRadius: '24px', padding: '24px', background: step.bg,
                border: `1px solid ${step.color}30`, animationDelay: `${0.15 + i * 0.1}s`,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '28px', background: 'rgba(255,255,255,0.7)',
                  }}>
                    {step.emoji}
                  </div>
                  <span className="font-display" style={{ fontSize: '40px', lineHeight: 1, color: step.color, opacity: 0.45 }}>
                    {step.num}
                  </span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F101A', letterSpacing: '-0.02em' }}>
                  {step.title}
                </div>
                <div style={{ fontSize: '13.5px', color: 'rgba(15,16,26,0.65)', marginTop: '8px', fontWeight: 500, lineHeight: 1.4 }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA with Founding 50 emphasis */}
        <section style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '96px 24px', textAlign: 'center' }}>
          {/* Trophy badge */}
          <div className="pop-in pop-1" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 16px', borderRadius: '999px',
            background: 'linear-gradient(135deg, #FFB800 0%, #FF6B47 100%)',
            boxShadow: '0 8px 24px rgba(255,184,0,0.3)', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '16px' }}>🏆</span>
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.14em', color: 'white', textTransform: 'uppercase' }}>
              First 50 only · Lifetime free
            </span>
          </div>

          <div className="pop-in pop-1 h1-final" style={{
            fontWeight: 800, color: '#0F101A', letterSpacing: '-0.025em', lineHeight: 0.95, fontSize: '64px',
          }}>
            Be a<br />
            <span className="gold-text">Founding Member.</span>
          </div>
          <div className="pop-in pop-2" style={{
            fontSize: '16px', color: '#6B6D7A', marginTop: '20px',
            fontWeight: 500, maxWidth: '520px', margin: '20px auto 0',
          }}>
            The first 50 to claim a spot get a permanent Founding Member badge in the app
            <strong style={{ color: '#0F101A' }}> (un-buyable, only earned)</strong> + lifetime free access.
            Once we hit 50 — gone forever.
          </div>

          {!submitted && (
            <div className="pop-in pop-3" style={{ marginTop: '32px', maxWidth: '440px', margin: '32px auto 0' }}>
              <div style={{
                display: 'flex', gap: '8px', padding: '6px', borderRadius: '16px',
                background: 'white', border: '1px solid #EEEEF1',
                boxShadow: '0 4px 24px rgba(15,16,26,0.06)',
              }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  disabled={submitting}
                  style={{
                    flex: 1, padding: '10px 12px', fontSize: '14px',
                    fontWeight: 500, color: '#0F101A', background: 'transparent',
                    outline: 'none', border: 'none', fontFamily: 'inherit',
                  }}
                />
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="shimmer-cta tap"
                  style={{
                    padding: '10px 20px', borderRadius: '12px', fontSize: '13px',
                    fontWeight: 800, color: 'white', border: 'none', whiteSpace: 'nowrap',
                    boxShadow: '0 4px 16px rgba(255,0,110,0.35)', fontFamily: 'inherit',
                    opacity: submitting ? 0.7 : 1,
                  }}
                >
                  {submitting ? '...' : 'Claim my spot'}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer style={{
          position: 'relative', maxWidth: '1200px', margin: '0 auto',
          padding: '40px 24px', borderTop: '1px solid rgba(15,16,26,0.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#0F101A', letterSpacing: '-0.02em' }}>pact</span>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FF6B47' }} />
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#9B9DA8' }}>
              Make the trip happen. · Launching Nov 14, 2026
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
