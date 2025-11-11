"use client";

import { useEffect, useState } from "react";
import { Mail, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Lead {
  _id: string;
  email: string;
  createdAt: string;
}

interface LeadsTableProps {
  limit?: number;
}

export default function LeadsTable({ limit }: LeadsTableProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await fetch("/api/leads");
        const data = await res.json();
        setLeads(data.leads || []);
      } catch (error) {
        console.error("Error fetching leads:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLeads();
  }, []);

  const displayedLeads = limit
    ? leads.slice(-limit).reverse()
    : leads.slice().reverse();

  return (
    <Card className="border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Recent Leads</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {displayedLeads.length} leads
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="px-6 py-3 text-left">
                <span className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <Mail size={16} />
                  Email
                </span>
              </th>
              <th className="px-6 py-3 text-left">
                <span className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <Calendar size={16} />
                  Submitted At
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td
                  colSpan={2}
                  className="px-6 py-8 text-center text-muted-foreground"
                >
                  Loading leads...
                </td>
              </tr>
            ) : displayedLeads.length === 0 ? (
              <tr>
                <td
                  colSpan={2}
                  className="px-6 py-8 text-center text-muted-foreground"
                >
                  No leads yet
                </td>
              </tr>
            ) : (
              displayedLeads.map((lead) => (
                <tr
                  key={lead._id}
                  className="border-b border-border hover:bg-secondary/50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-foreground font-medium">
                    {lead.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {new Date(lead.createdAt).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
