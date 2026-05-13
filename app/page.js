"use client"
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import AgentGrid from '../components/AgentGrid';
import MCPGrid from '../components/MCPGrid';
import EInvoicing from '../components/EInvoicing';
import Calculator from '../components/Calculator';
import AIBrain from '../components/AIBrain';
import Dashboard from '../components/Dashboard';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import BrainChat from '../components/BrainChat';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <AgentGrid />
      <MCPGrid />
      <EInvoicing />
      <Calculator />
      <AIBrain />
      <Dashboard />
      <Pricing />
      <Footer />
      <BrainChat />
    </>
  );
}
