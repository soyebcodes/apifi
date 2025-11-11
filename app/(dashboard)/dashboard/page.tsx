import KPICards from "@/components/dashboard/KPICards";
import LeadsChart from "@/components/dashboard/LeadsChart";
import LeadsTable from "@/components/dashboard/LeadsTable";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-2">
                Welcome back! Here&apos;s your performance overview.
              </p>
            </div>

            {/* KPI Cards */}
            <KPICards />

            {/* Chart and Table */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <LeadsChart />
              </div>
              <div className="lg:col-span-1">
                {/* Quick stats */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">
                    QUICK STATS
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-2xl font-bold text-foreground">92%</p>
                      <p className="text-xs text-muted-foreground">
                        Conversion Rate
                      </p>
                    </div>
                    <div className="h-px bg-border" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">1.2k</p>
                      <p className="text-xs text-muted-foreground">
                        Total Visits
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leads Table */}
            <LeadsTable />
          </div>
        </div>
      </main>
    </div>
  );
}
