"use client";

import { useEffect, useState } from "react";

interface Lead {
  _id: string;
  createdAt: string;
}

export default function KPICards() {
  const [totalLeads, setTotalLeads] = useState(0);

  useEffect(() => {
    async function fetchLeads() {
      const res = await fetch("/api/leads");
      const data = await res.json();
      setTotalLeads(data.leads.length);
    }
    fetchLeads();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300">
          Total Leads
        </h3>
        <p className="text-2xl font-bold">{totalLeads}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300">
          Today’s Leads
        </h3>
        <p className="text-2xl font-bold">
          {/* Optional: filter today’s leads */}
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300">
          Growth
        </h3>
        <p className="text-2xl font-bold">↑ {/* calculate growth */}</p>
      </div>
    </div>
  );
}
