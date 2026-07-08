// src/app/alerts/page.tsx
import DashboardLayout from "@/components/layout/DashboardLayout";
import AlertsView from "@/components/alerts/AlertsView";

export const metadata = {
  title: "Alerts & Notifications | People Priority",
  description: "Real-time alerts and AI-generated notifications for your constituency.",
};

export default function AlertsPage() {
  return (
    <DashboardLayout>
      <AlertsView />
    </DashboardLayout>
  );
}
