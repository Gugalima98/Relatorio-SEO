import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine 
} from 'recharts';
import { QUARTERLY_STATS, MONTHLY_DATA } from '../../constants';

export const VolumeComparison: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Quarterly Summary */}
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
        <h3 className="text-xl font-medium text-amber-500 mb-4 font-serif">Volume Trimestral</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={QUARTERLY_STATS} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f1f5f9' }}
                itemStyle={{ color: '#f1f5f9' }}
              />
              <Bar dataKey="totalSessions" name="Sessões" fill="#fbbf24" radius={[4, 4, 0, 0]}>
                {QUARTERLY_STATS.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#94a3b8' : '#fbbf24'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-col space-y-2">
            <div className="flex justify-between items-center text-sm border-b border-slate-700 pb-2">
                <span className="text-slate-400">3º Trimestre</span>
                <span className="font-bold text-slate-200">50.000 sessões</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-slate-700 pb-2">
                <span className="text-slate-400">4º Trimestre</span>
                <span className="font-bold text-amber-500">49.000 sessões</span>
            </div>
            <p className="text-xs text-slate-500 mt-2 italic">Estabilidade mantida entre os períodos.</p>
        </div>
      </div>

      {/* Monthly Trend */}
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
        <h3 className="text-xl font-medium text-amber-500 mb-4 font-serif">Evolução Mensal</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MONTHLY_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[0, 20000]} />
              <Tooltip 
                 contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f1f5f9' }}
                 cursor={{fill: '#334155', opacity: 0.4}}
              />
              <ReferenceLine y={16500} stroke="#fbbf24" strokeDasharray="3 3" label={{ position: 'right', value: 'Média', fill: '#fbbf24', fontSize: 10 }} />
              <Bar dataKey="totalSessions" name="Sessões" fill="#64748b" radius={[4, 4, 0, 0]}>
                 {MONTHLY_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.month === 'Out' ? '#fbbf24' : '#cbd5e1'} />
                  ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
         <div className="mt-4 text-sm text-slate-300">
            <p>O pico semestral ocorreu em <span className="text-amber-500 font-bold">Outubro (18k)</span>, apesar de uma leve queda em Novembro, a recuperação foi imediata em Dezembro.</p>
        </div>
      </div>
    </div>
  );
};