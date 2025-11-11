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

      // Group leads by date
      const grouped: Record<string, number> = {};
      leads.forEach((lead: Lead) => {
        const date = new Date(lead.createdAt).toLocaleDateString();
        grouped[date] = (grouped[date] || 0) + 1;
      });

      const chartData: ChartData[] = Object.entries(grouped).map(
        ([date, count]) => ({ date, count })
      );
      setData(chartData);
    }

    fetchLeads();
  }, []);

  return (
    <div className="w-full h-64 bg-white dark:bg-gray-800 p-4 rounded-lg border">
      <h3 className="text-lg font-semibold mb-2">Leads Growth</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#4f46e5"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
