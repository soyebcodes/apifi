import LeadsTable from "@/components/dashboard/LeadsTable";
import LeadsChart from "@/components/dashboard/LeadsChart";

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      {/* Leads Chart */}
      <LeadsChart />

      {/* Leads Table */}
      <LeadsTable />
    </div>
  );
}
