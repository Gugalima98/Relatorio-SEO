import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';
import { MONTHLY_DATA } from '../../constants';

export const UserAcquisitionChart: React.FC = () => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 w-full h-full">
       <h3 className="text-xl font-medium text-amber-500 mb-2 font-serif">Novos Usuários (Alcance)</h3>
       <p className="text-slate-400 text-sm mb-6">Capacidade de atração de clientes que nunca visitaram o site antes.</p>

       <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={MONTHLY_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="month" stroke="#94a3b8" padding={{ left: 20, right: 20 }} />
                <YAxis stroke="#94a3b8" domain={[8000, 15000]} />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f1f5f9' }}
                />
                <ReferenceLine y={11000} stroke="#475569" strokeDasharray="3 3" label={{ value: 'Média Q3', fill: '#64748b', fontSize: 12 }} />
                <Line 
                    type="monotone" 
                    dataKey="newUsers" 
                    name="Novos Usuários"
                    stroke="#fbbf24" 
                    strokeWidth={3}
                    dot={{ r: 6, fill: '#fbbf24', strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
       </div>
       <div className="mt-4 flex items-center justify-between text-sm">
            <div className="text-center">
                <span className="block text-slate-500 text-xs">Média Q3</span>
                <span className="font-semibold text-slate-200">11.000</span>
            </div>
            <div className="text-center">
                <span className="block text-amber-500 font-bold text-xs">Pico (Out)</span>
                <span className="font-bold text-amber-400 text-lg">13.000</span>
            </div>
            <div className="text-center">
                <span className="block text-slate-500 text-xs">Fechamento (Dez)</span>
                <span className="font-semibold text-slate-200">11.000</span>
            </div>
       </div>
    </div>
  );
};