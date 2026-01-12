import React from 'react';
import { Section } from './components/Section';
import { VolumeComparison } from './components/Charts/VolumeComparison';
import { UserAcquisitionChart } from './components/Charts/UserAcquisitionChart';
import { TrafficSourceChart } from './components/Charts/TrafficSourceChart';
import { TopPages } from './components/TopPages';
import { Conclusion } from './components/Conclusion';
import { ArrowDown } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-amber-500/30">
      
      {/* Hero Header */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950 z-0 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl animate-fade-in-up">
          <p className="text-amber-500 font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4">Relatório de Acessos</p>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-50 mb-6 leading-tight">
            Luxury Properties
          </h1>
          <div className="h-px w-24 bg-slate-700 mx-auto mb-6"></div>
          <h2 className="text-xl md:text-2xl text-slate-300 font-light mb-2">
            Análise Comparativa: 3º vs 4º Trimestre
          </h2>
          <p className="text-slate-500">Julho a Dezembro de 2025</p>
        </div>

        <div className="absolute bottom-10 animate-bounce text-slate-600">
          <ArrowDown className="w-6 h-6" />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 bg-slate-950">
        
        {/* Slide 2: Volume */}
        <Section 
          title="Volume de Acessos" 
          subtitle="Estabilidade mantida no semestre com pico sazonal em Outubro."
        >
          <VolumeComparison />
        </Section>

        {/* Slide 3: New Users */}
        <Section 
          title="Novos Usuários" 
          subtitle="Atração de novos clientes e alcance da marca."
        >
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="md:col-span-1 flex flex-col justify-center space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                   No 4º trimestre, tivemos um alcance maior de novas pessoas, atingindo um pico de <strong className="text-amber-500">13.000</strong> novos visitantes em Outubro.
                </p>
                <div className="p-4 border-l-2 border-slate-700 bg-slate-900/50">
                    <p className="text-slate-400 text-sm italic">"Isso mostra que o site atraiu um público novo para a imobiliária no final de 2025."</p>
                </div>
             </div>
             <div className="md:col-span-2">
                <UserAcquisitionChart />
             </div>
           </div>
        </Section>

        {/* Slide 4: Traffic Sources */}
        <Section 
          title="Origem do Tráfego" 
          subtitle="Análise dos canais de aquisição: Busca Orgânica vs Direto."
        >
          <TrafficSourceChart />
        </Section>

        {/* Slide 5 & 6: Top Pages */}
        <Section 
          title="Interesse do Consumidor" 
          subtitle="O que os clientes buscaram em cada trimestre."
        >
          <TopPages />
        </Section>

        {/* Slide 7: Conclusion */}
        <Section 
          title="Conclusão do Semestre" 
          subtitle="Principais aprendizados e posicionamento para 2026."
          className="pb-24 border-b-0"
        >
          <Conclusion />
        </Section>

      </main>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2025 Luxury Properties Analytics. Dados confidenciais.</p>
      </footer>
    </div>
  );
};

export default App;