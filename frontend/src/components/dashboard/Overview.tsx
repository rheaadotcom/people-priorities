import React from 'react';
import KPICard from './KPICard';
import AISummaryCard from './AISummaryCard';
import ComplaintTable from './ComplaintTable';
import RecommendationCard from './RecommendationCard';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import PieChart from '../charts/PieChart';
import HeatmapPlaceholder from '../heatmap/HeatmapPlaceholder';
import { kpiData, complaints, recommendations, chartData } from '../../utils/mockData';

const complaintData = complaints.map((c) => ({
    id: c.id,
    title: c.title,
    category: c.category as any,
    status: c.status as any,
    priority: c.priority as any,
    date: c.date,
  }));

export default function Overview() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, idx) => (
          <KPICard key={idx} title={kpi.title} value={kpi.value} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BarChart data={chartData} />
        <LineChart data={chartData} />
        <PieChart data={chartData} />
        <HeatmapPlaceholder />
      </div>

      {/* AI Summary */}
      <AISummaryCard />

      {/* Complaint Table */}
      <ComplaintTable data={complaints} />

      {/* Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((rec) => (
          <RecommendationCard key={rec.id} text={rec.title} />
        ))}
      </div>
    </div>
  );
}
