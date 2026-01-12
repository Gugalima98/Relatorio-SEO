import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, id, className = "" }) => {
  return (
    <section id={id} className={`py-12 md:py-20 border-b border-slate-800 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl text-slate-100 font-serif mb-2">{title}</h2>
          {subtitle && <p className="text-slate-400 text-lg md:text-xl font-light">{subtitle}</p>}
        </div>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
};