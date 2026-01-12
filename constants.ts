import { MonthlyData, QuarterlyData, TopPageInsight } from './types';

export const MONTHLY_DATA: MonthlyData[] = [
  {
    month: 'Jul',
    totalSessions: 16000,
    organicSessions: 12000,
    directSessions: 1400, // Avg baseline
    newUsers: 11000,
    topPages: ['Fazenda Boa Vista'],
  },
  {
    month: 'Ago',
    totalSessions: 17000,
    organicSessions: 13000,
    directSessions: 1400, // Avg baseline
    newUsers: 11000,
    topPages: ['Fazenda Boa Vista'],
  },
  {
    month: 'Set',
    totalSessions: 17000,
    organicSessions: 11500, // Estimated to fit Q3 trend
    directSessions: 1400, // Avg baseline
    newUsers: 11000,
    topPages: ['Fazenda Boa Vista'],
  },
  {
    month: 'Out',
    totalSessions: 18000,
    organicSessions: 10000,
    directSessions: 5600, // Spiked
    newUsers: 13000,
    topPages: ['Orlando (FL)'],
  },
  {
    month: 'Nov',
    totalSessions: 14000,
    organicSessions: 10000,
    directSessions: 1400, // Return to baseline
    newUsers: 10000, // Estimated based on "Oscillation"
    topPages: ['Angra dos Reis'],
  },
  {
    month: 'Dez',
    totalSessions: 17000,
    organicSessions: 12000,
    directSessions: 1400, // Return to baseline
    newUsers: 11000,
    topPages: ['Casa de Praia', 'Angra dos Reis'],
  },
];

export const QUARTERLY_STATS: QuarterlyData[] = [
  {
    name: '3º Trimestre (Jul-Set)',
    totalSessions: 50000,
    avgSessionsPerMonth: 16666,
    description: 'Estabilidade com foco em imóveis de Campo.'
  },
  {
    name: '4º Trimestre (Out-Dez)',
    totalSessions: 49000,
    avgSessionsPerMonth: 16333,
    description: 'Oscilação com pico em Outubro e mudança para Litoral.'
  }
];

export const PAGE_INSIGHTS: TopPageInsight[] = [
  {
    period: 'Julho a Setembro (Q3)',
    focus: 'Campo e Internacional',
    pages: [
      { name: 'Home', details: 'Página Principal' },
      { name: 'Fazenda Boa Vista', details: 'Destaque constante (Porto Feliz)', highlight: true },
      { name: 'Casa de Praia (ID 184)', details: 'Interesse inicial' },
      { name: 'New York City', details: 'Imóveis internacionais' },
    ]
  },
  {
    period: 'Outubro a Dezembro (Q4)',
    focus: 'Verão e Litoral',
    pages: [
      { name: 'Casa de Praia (ID 184)', details: 'Top #1 em Dezembro (1.816 acessos)', highlight: true },
      { name: 'Angra dos Reis', details: 'Entrou forte em Dezembro (1.083 acessos)', highlight: true },
      { name: 'Orlando (FL)', details: 'Interesse em alta em Outubro' },
      { name: 'Home', details: 'Página Principal' },
    ]
  }
];