// src/utils/mockData.ts
import { ComplaintStatus, ComplaintCategory, PriorityLevel } from '../types/dashboard';

export const kpiData = [
  { title: "Total Complaints", value: 1245, trend: "up", trendValue: "+5%" },
  { title: "Open", value: 342, trend: "down", trendValue: "-2%" },
  { title: "Resolved", value: 903, trend: "up", trendValue: "+8%" },
  { title: "Avg. Resolution Time", value: "2.3d", trend: "down", trendValue: "-10%" },
];

export const complaints = [
  { id: "1", title: "Pothole on Main St", category: ComplaintCategory.Road, status: ComplaintStatus.Open, priority: PriorityLevel.High, date: "2024-05-12" },
  { id: "2", title: "Water leakage", category: ComplaintCategory.Water, status: ComplaintStatus.InProgress, priority: PriorityLevel.Medium, date: "2024-05-14" },
  { id: "3", title: "Street light not working", category: ComplaintCategory.Electricity, status: ComplaintStatus.Resolved, priority: PriorityLevel.Low, date: "2024-05-10" },
];

export const recentComplaints = complaints;

export const recommendations = [
  { id: 1, title: "Upgrade drainage system", description: "Improve capacity in flood-prone zones.", impact: "High" },
  { id: 2, title: "Increase healthcare staff", description: "Reduce patient waiting times.", impact: "Medium" },
];

export const chartData = [
  { name: "Jan", complaints: 40 },
  { name: "Feb", complaints: 55 },
  { name: "Mar", complaints: 30 },
  { name: "Apr", complaints: 70 },
  { name: "May", complaints: 45 },
];

export const aiSummary = "Based on recent data, road-related complaints have increased by 15% this month. Water leakages are being resolved faster, showing a 10% improvement in average resolution time. Consider allocating more resources to road maintenance to address the growing backlog.";
