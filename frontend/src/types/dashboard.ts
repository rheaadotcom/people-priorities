// Types for the MP Dashboard and Citizen Portal
// -------------------------------------------------
// This file defines production‑ready TypeScript interfaces and enums
// used across the frontend. It is deliberately independent of any UI
// implementation so it can be shared with a future backend.

import type { ComponentType, SVGProps } from 'react';

/**
 * Enum representing the possible statuses of a complaint.
 */
export enum ComplaintStatus {
  Open = 'Open',
  InProgress = 'In Progress',
  Resolved = 'Resolved',
}

/**
 * Enum for complaint categories.
 */
export enum ComplaintCategory {
  Road = 'Road',
  Healthcare = 'Healthcare',
  Education = 'Education',
  Water = 'Water',
  Electricity = 'Electricity',
  Drainage = "Drainage",
  Employment = "Employment",
  Others = "Others",
}

/**
 * Enum for priority levels.
 */
export enum PriorityLevel {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Critical = 'Critical',
}

/**
 * Interface describing a single complaint record.
 */
export interface Complaint {
  /** Unique identifier for the complaint */
  id: string;
  /** Short title supplied by the citizen */
  title: string;
  /** Detailed description of the issue */
  description?: string;
  /** Current workflow status */
  status: ComplaintStatus;
  /** Category the complaint belongs to */
  category: ComplaintCategory;
  /** Priority chosen by the citizen */
  priority: PriorityLevel;
  /** ISO‑8601 date string when the complaint was created */
  date: string;
  /** Optional URL to an attached image */
  imageUrl?: string;
  /** Optional URL to an attached voice recording */
  voiceUrl?: string;
  /** Geographic coordinates of the incident */
  location?: { lat: number; lng: number };
}

/**
 * Reusable icon type for KPI cards and other UI elements.
 * It expects a React component that renders an SVG.
 */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Interface for a Key Performance Indicator card.
 */
export interface KPI {
  /** Title displayed on the card */
  title: string;
  /** Numeric or formatted value shown prominently */
  value: number | string;
  /** Optional SVG icon component */
  icon?: IconComponent;
  /** Tailwind background color class (e.g., "bg-primary-600") */
  bgColor?: string;
}

/**
 * Interface for a recommendation displayed on the dashboard.
 */
export interface Recommendation {
  /** Unique id for the recommendation */
  id: string;
  /** Human‑readable recommendation text */
  text: string;
}

/**
 * Data point used in charts (line, bar, area, etc.).
 */
export interface ChartDataPoint {
  /** Category or label for the X‑axis */
  name: string;
  /** Numeric value for the Y‑axis */
  value: number;
}

/**
 * Interface describing a category entry (used in the multi‑step form).
 */
export interface CategoryData {
  /** Enum value from ComplaintCategory */
  category: ComplaintCategory;
  /** Human readable label */
  label: string;
  /** Optional icon component for visual selection */
  icon?: IconComponent;
}

/**
 * Summary information produced by the AI placeholder on the dashboard.
 */
export interface AISummary {
  /** Short title for the summary */
  title: string;
  /** Full paragraph text */
  content: string;
}

/**
 * Aggregated statistics displayed on the dashboard header.
 */
export interface DashboardStats {
  /** Total number of active complaints */
  totalComplaints: number;
  /** Number of complaints resolved in the last period */
  resolvedLastWeek: number;
  /** Average priority score (1‑4) */
  averagePriority: number;
}

/**
 * Point used in a heatmap visualization.
 */
export interface HeatmapPoint {
  /** Latitude coordinate */
  lat: number;
  /** Longitude coordinate */
  lng: number;
  /** Intensity of the point (e.g., number of complaints) */
  weight: number;
}

/**
 * Interface representing trend data for time‑series charts.
 */
export interface TrendData {
  /** Date or time bucket label */
  period: string;
  /** Value for the given period */
  value: number;
}
