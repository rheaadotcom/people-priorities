"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExclamationTriangleIcon,
  ClockIcon,
  CpuChipIcon,
  CheckCircleIcon,
  BellIcon,
  FunnelIcon,
  CheckIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

type AlertSeverity = "critical" | "high" | "ai" | "success" | "info";

interface Alert {
  id: string;
  severity: AlertSeverity;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const initialAlerts: Alert[] = [
  {
    id: "1",
    severity: "critical",
    title: "Critical: Water shortage in Sector 7B escalating",
    description: "847 complaints in 48 hours. Immediate intervention required.",
    time: "2 min ago",
    read: false,
  },
  {
    id: "2",
    severity: "high",
    title: "High: Road accident spike on NH-48 service road",
    description: "Accident reports up 67% YoY. AI recommends immediate inspection.",
    time: "15 min ago",
    read: false,
  },
  {
    id: "3",
    severity: "ai",
    title: "AI Monthly Constituency Analysis Complete",
    description: "42 new insights available. 12 high-priority action items.",
    time: "1 hr ago",
    read: false,
  },
  {
    id: "4",
    severity: "success",
    title: "Project Approved: Street Lighting Phase 2",
    description: "₹4.2 Cr project approved by district administration.",
    time: "3 hr ago",
    read: true,
  },
  {
    id: "5",
    severity: "high",
    title: "Scheme Deadline: PM Awas Yojana closes in 7 days",
    description: "Only 340 of 1,200 eligible families have applied so far.",
    time: "6 hr ago",
    read: true,
  },
  {
    id: "6",
    severity: "ai",
    title: "Vaccination coverage improved 12% — Block B",
    description: "AI detected significant improvement in health metrics.",
    time: "8 hr ago",
    read: true,
  },
  {
    id: "7",
    severity: "info",
    title: "Ward 4 Sanitation Project — 80% Complete",
    description: "On-track for completion by end of month.",
    time: "1 day ago",
    read: true,
  },
  {
    id: "8",
    severity: "critical",
    title: "Electricity outage: 3 wards affected",
    description: "Wards 6, 7, 9 reporting sustained outage. DISCOM notified.",
    time: "1 day ago",
    read: true,
  },
  {
    id: "9",
    severity: "success",
    title: "Resolution rate hit 83% — record high",
    description: "Best resolution rate in the last 6 months. Great progress!",
    time: "2 days ago",
    read: true,
  },
];

const severityConfig: Record<AlertSeverity, {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  dot: string;
  label: string;
  labelBg: string;
  labelText: string;
}> = {
  critical: {
    icon: ExclamationTriangleIcon,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    dot: "bg-red-500",
    label: "Critical",
    labelBg: "bg-red-50",
    labelText: "text-red-600",
  },
  high: {
    icon: ClockIcon,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    dot: "bg-amber-400",
    label: "High",
    labelBg: "bg-amber-50",
    labelText: "text-amber-600",
  },
  ai: {
    icon: CpuChipIcon,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    dot: "bg-indigo-400",
    label: "AI Insight",
    labelBg: "bg-indigo-50",
    labelText: "text-indigo-600",
  },
  success: {
    icon: CheckCircleIcon,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    dot: "bg-emerald-500",
    label: "Success",
    labelBg: "bg-emerald-50",
    labelText: "text-emerald-600",
  },
  info: {
    icon: BellIcon,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-400",
    dot: "bg-blue-400",
    label: "Info",
    labelBg: "bg-blue-50",
    labelText: "text-blue-600",
  },
};

type Filter = "all" | "unread" | AlertSeverity;

export default function AlertsView() {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);
  const [filter, setFilter] = useState<Filter>("all");

  const unreadCount = alerts.filter((a) => !a.read).length;

  const filtered = alerts.filter((a) => {
    if (filter === "all") return true;
    if (filter === "unread") return !a.read;
    return a.severity === filter;
  });

  const markAllRead = () =>
    setAlerts((prev) => prev.map((a) => ({ ...a, read: true })));

  const markRead = (id: string) =>
    setAlerts((prev) => prev.map((a) => (a.id === id ? { ...a, read: true } : a)));

  const dismiss = (id: string) =>
    setAlerts((prev) => prev.filter((a) => a.id !== id));

  const filterTabs: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "unread", label: `Unread${unreadCount > 0 ? ` (${unreadCount})` : ""}` },
    { key: "critical", label: "Critical" },
    { key: "high", label: "High" },
    { key: "ai", label: "AI Insights" },
    { key: "success", label: "Success" },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-[#111827] tracking-tight">
            Alerts &amp; Notifications
          </h1>
          <p className="text-[14px] text-[#6B7280] mt-0.5">
            {unreadCount > 0
              ? `${unreadCount} unread alert${unreadCount > 1 ? "s" : ""} require your attention`
              : "All caught up — no unread alerts"}
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E5E7EB] bg-white text-[13px] font-semibold text-[#374151] hover:bg-[#F9FAFB] transition shadow-sm"
          >
            <CheckIcon className="h-4 w-4 text-emerald-500" />
            Mark all read
          </button>
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        <FunnelIcon className="h-4 w-4 text-[#9CA3AF] flex-shrink-0" />
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all ${
              filter === tab.key
                ? "bg-[#4F46E5] text-white shadow-sm"
                : "bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#4F46E5] hover:text-[#4F46E5]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Alerts list */}
      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="h-14 w-14 rounded-2xl bg-[#F3F4F6] flex items-center justify-center mb-4">
                <BellIcon className="h-7 w-7 text-[#9CA3AF]" />
              </div>
              <p className="text-[15px] font-semibold text-[#374151]">No alerts here</p>
              <p className="text-[13px] text-[#9CA3AF] mt-1">Try a different filter</p>
            </motion.div>
          ) : (
            filtered.map((alert, idx) => {
              const config = severityConfig[alert.severity];
              const Icon = config.icon;
              return (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 40, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                  onClick={() => markRead(alert.id)}
                  className={`relative flex items-start gap-4 px-5 py-4 rounded-2xl border cursor-pointer transition-all group ${
                    alert.read
                      ? "bg-white border-[#E5E7EB] hover:border-[#C7D2FE] hover:shadow-sm"
                      : "bg-white border-[#C7D2FE] shadow-sm ring-1 ring-[#EEF2FF]"
                  }`}
                >
                  {/* Unread dot */}
                  {!alert.read && (
                    <span className={`absolute left-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full ${config.dot}`} />
                  )}

                  {/* Icon */}
                  <div className={`flex items-center justify-center h-10 w-10 rounded-xl flex-shrink-0 ${config.iconBg}`}>
                    <Icon className={`h-5 w-5 ${config.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <p className={`text-[14px] leading-snug ${alert.read ? "font-medium text-[#374151]" : "font-bold text-[#111827]"}`}>
                        {alert.title}
                      </p>
                      <span className="text-[12px] text-[#9CA3AF] whitespace-nowrap flex-shrink-0 mt-0.5">
                        {alert.time}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#6B7280] mt-0.5 leading-relaxed">
                      {alert.description}
                    </p>
                    <div className="mt-2">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${config.labelBg} ${config.labelText}`}>
                        {config.label}
                      </span>
                    </div>
                  </div>

                  {/* Dismiss button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); dismiss(alert.id); }}
                    className="opacity-0 group-hover:opacity-100 flex-shrink-0 h-8 w-8 rounded-xl flex items-center justify-center text-[#9CA3AF] hover:bg-red-50 hover:text-red-500 transition-all"
                    title="Dismiss"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
