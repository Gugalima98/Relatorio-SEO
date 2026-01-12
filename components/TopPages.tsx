import React from 'react';
import { PAGE_INSIGHTS } from '../constants';
import { ArrowRight, MapPin, Home, Globe } from 'lucide-react';

const IconMap: Record<string, React.ReactNode> = {
  'Home': <Home className="w-4 h-4" />,
  'Fazenda Boa Vista': <MapPin className="w-4 h-4" />,
  'Angra dos Reis': <MapPin className="w-4 h-4" />,
  'Casa de Praia (ID 184)': <Home className="w-4 h-4" />,
  'New York City': <Globe className="w-4 h-4" />,
  'Orlando (FL)': <Globe className="w-4 h-4" />,
};

export const TopPages: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PAGE_INSIGHTS.map((quarter, idx) => (
        <div key={idx} className="bg-slate-800/30 rounded-xl overflow-hidden border border-slate-700 flex flex-col">
          <div className="p-6 bg-slate-800/80 border-b border-slate-700">
            <h3 className="text-lg font-serif text-slate-100">{quarter.period}</h3>
            <div className="flex items-center gap-2 mt-2">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Perfil:</span>
                <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-500 text-xs rounded-full font-medium border border-amber-500/20">
                {quarter.focus}
                </span>
            </div>
          </div>
          <div className="p-6 flex-1">
            <ul className="space-y-4">
              {quarter.pages.map((page, pIdx) => (
                <li key={pIdx} className="flex items-start group">
                  <span className={`mt-1 mr-3 p-1.5 rounded-full ${page.highlight ? 'bg-amber-500 text-slate-900' : 'bg-slate-700 text-slate-400'}`}>
                    {IconMap[page.name] || <ArrowRight className="w-4 h-4"/>}
                  </span>
                  <div>
                    <span className={`block font-medium ${page.highlight ? 'text-amber-400' : 'text-slate-200'}`}>
                      {page.name}
                    </span>
                    {page.details && (
                      <span className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                        {page.details}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};