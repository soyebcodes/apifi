"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";

interface Lead {
  _id: string;
  createdAt: string;
}

interface ChartData {
  date: string;
  count: number;
}

export default function LeadsChart() {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    async function fetchLeads() {
      const res = await fetch("/api/leads");
      const { leads } = await res.json();

      const grouped: Record<string, number> = {};
      leads.forEach((lead: Lead) => {
        const date = new Date(lead.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        grouped[date] = (grouped[date] || 0) + 1;
      });

      const chartData: ChartData[] = Object.entries(grouped)
        .map(([date, count]) => ({ date, count }))
        .slice(-7);
      setData(chartData);
    }

    fetchLeads();
  }, []);

  return (
    <Card className="border border-border">
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground">
            Leads Growth
          </h3>
          <p className="text-sm text-muted-foreground mt-1">Last 7 days</p>
        </div>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-border)"
              />
              <XAxis dataKey="date" stroke="var(--color-muted-foreground)" />
              <YAxis
                allowDecimals={false}
                stroke="var(--color-muted-foreground)"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius)",
                }}
                labelStyle={{ color: "var(--color-foreground)" }}
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke="var(--color-primary)"
                strokeWidth={2}
                dot={{ fill: "var(--color-primary)", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}
