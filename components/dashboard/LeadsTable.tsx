"use client";

import { useEffect, useState } from "react";

interface Lead {
  _id: string;
  email: string;
  createdAt: string;
}

interface LeadsTableProps {
  limit?: number; // optional, defaults to all
}

export default function LeadsTable({ limit }: LeadsTableProps) {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    async function fetchLeads() {
      const res = await fetch("/api/leads");
      const data = await res.json();
      setLeads(data.leads);
    }
    fetchLeads();
  }, []);

  const displayedLeads = limit
    ? leads.slice(-limit).reverse()
    : leads.reverse();

  return (
    <div className="overflow-x-auto rounded-lg border bg-white dark:bg-gray-800 p-4">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {displayedLeads.map((lead) => (
            <tr
              key={lead._id}
              className="border-b hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td className="px-4 py-2">{lead.email}</td>
              <td className="px-4 py-2">
                {new Date(lead.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
