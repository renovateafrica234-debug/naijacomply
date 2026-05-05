// app/layout.js
import './globals.css';

export const metadata = {
  title: 'NaijaComply - AI-Powered Business Compliance for Nigeria',
  description: 'Automate CAC annual returns, FIRS e-invoicing, penalty calculations and regulatory compliance. Powered by Nvidia AI. Built for Nigerian businesses.',
  keywords: 'CAC compliance, FIRS e-invoice, Nigeria business registration, annual returns, tax compliance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
