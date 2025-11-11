import LeadsChart from "@/components/dashboard/LeadsChart";
import LeadsTable from "@/components/dashboard/LeadsTable";

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Leads</h1>
      <LeadsChart />
      <LeadsTable />
    </div>
  );
}
