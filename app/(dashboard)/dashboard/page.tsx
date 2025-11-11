import KPICards from "@/components/dashboard/KPICards";
import LeadsChart from "@/components/dashboard/LeadsChart";
import LeadsTable from "@/components/dashboard/LeadsTable";

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      {/* KPIs */}
      <KPICards />

      {/* Leads Growth Chart */}
      <LeadsChart />

      {/* Top 5 Leads */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Leads</h2>
        <LeadsTable limit={5} />
      </div>
    </div>
  );
}
