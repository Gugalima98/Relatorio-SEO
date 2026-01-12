import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { MONTHLY_DATA } from '../../constants';

export const TrafficSourceChart: React.FC = () => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 w-full">
      <h3 className="text-xl font-medium text-amber-500 mb-6 font-serif">Origem do Tráfego: Orgânico vs Direto</h3>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MONTHLY_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorDirect" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f8fafc" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f8fafc" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <Tooltip 
                 contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f1f5f9' }}
            />
            <Legend verticalAlign="top" height={36}/>
            <Area 
                type="monotone" 
                dataKey="organicSessions" 
                name="Busca Orgânica (Google)" 
                stroke="#fbbf24" 
                fillOpacity={1} 
                fill="url(#colorOrganic)" 
            />
            <Area 
                type="monotone" 
                dataKey="directSessions" 
                name="Acesso Direto" 
                stroke="#f8fafc" 
                fillOpacity={1} 
                fill="url(#colorDirect)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-amber-500">
            <h4 className="text-slate-100 font-bold mb-1">Busca Orgânica</h4>
            <p className="text-slate-400 text-sm">
                Recuperação forte em Dezembro (12k) após queda em Outubro/Novembro. Representa a consistência da marca no longo prazo.
            </p>
        </div>
        <div className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-slate-200">
            <h4 className="text-slate-100 font-bold mb-1">Acesso Direto</h4>
            <p className="text-slate-400 text-sm">
                Salto atípico em Outubro (5,6k vs média de 1,4k). Indica ações de branding ou compartilhamento direto (dark social) eficazes neste mês.
            </p>
        </div>
      </div>
    </div>
  );
};