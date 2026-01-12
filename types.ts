export interface MonthlyData {
  month: string;
  totalSessions: number;
  organicSessions: number;
  directSessions: number; // Estimated or specific where data provided
  newUsers: number;
  topPages: string[];
}

export interface QuarterlyData {
  name: string;
  totalSessions: number;
  avgSessionsPerMonth: number;
  description: string;
}

export interface TopPageInsight {
  period: string;
  focus: string;
  pages: { name: string; details?: string; highlight?: boolean }[];
}