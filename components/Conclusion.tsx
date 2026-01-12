import React from 'react';
import { TrendingUp, Anchor, Sun } from 'lucide-react';

export const Conclusion: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-500/20 rounded-lg text-amber-500">
                    <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-slate-100">Mudança de Comportamento</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
                Houve uma migração clara de interesse. O semestre iniciou com foco em imóveis de campo (Fazenda Boa Vista) e encerrou com domínio total do <span className="text-amber-400 font-medium">Litoral (Angra e Casa de Praia)</span>, acompanhando a sazonalidade do verão.
            </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-700/50 rounded-lg text-slate-200">
                    <Anchor className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-slate-100">Força da Marca 2026</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
                A recuperação dos acessos em Dezembro e a retomada do tráfego orgânico (12k) posicionam a imobiliária com força para o início de 2026. O pico de novos usuários no Q4 sugere uma base renovada de leads.
            </p>
        </div>
    </div>
  );
};