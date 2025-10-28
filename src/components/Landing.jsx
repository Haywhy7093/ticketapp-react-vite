import React from 'react'
export default function Landing({navigate}){
  return (
    <main className="container">
     <section className="hero">
    <div className="hero-inner">
      <div className="hero-body">
        <h1>TicketApp — Manage issues with ease</h1>
        <p className="lead">A friendly ticket management app. Built for the Stage 2 frontend task.</p>
        <div className="hero-cta">
          <button onClick={() => navigate('/auth/login')} className="btn">Login</button>
          <button onClick={() => navigate('/auth/register')} className="btn btn-outline">Get Started</button>

        </div>
      </div>
      <div className="hero-deco">
        <div className="circle small" aria-hidden></div>
        <div className="circle large" aria-hidden></div>
      </div>
    </div>

    <svg className="hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
      <path d="M0,40 C200,120 400,0 720,40 C1040,80 1240,10 1440,60 L1440 120 L0 120 Z"></path>
    </svg>

    <div className="features container">
      <div className="card">Responsive layout with hero wave</div>
      <div className="card">Authentication (localStorage)</div>
      <div className="card">Ticket CRUD with inline validation</div>
    </div>
  </section>
    </main>
  )
}
