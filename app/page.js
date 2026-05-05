// app/page.js
"use client"
import Nav        from '../components/Nav';
import Hero       from '../components/Hero';
import MCPGrid    from '../components/MCPGrid';
import EInvoicing from '../components/EInvoicing';
import Calculator from '../components/Calculator';
import AIBrain    from '../components/AIBrain';
import Dashboard  from '../components/Dashboard';
import Pricing    from '../components/Pricing';
import Footer     from '../components/Footer';

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
