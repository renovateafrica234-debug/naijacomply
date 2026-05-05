// app/page.js
"use client"
import Nav        from '../components/Nav';
import Hero       from '../components/Hero';
import MCPGrid    from '../components/MCPGrid';
import EInvoicing from '../components/EInvoicing';
import Calculator from '../components/Calculator';

// Placeholder components for sections you build later
function AIBrain()   { return null; }
function Dashboard() { return null; }
function Pricing()   { return null; }
function Footer()    { return null; }

export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <MCPGrid />
        <EInvoicing />
        <Calculator />
        <AIBrain />
        <Dashboard />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
