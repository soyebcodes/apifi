"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Users, Zap } from "lucide-react";

interface Lead {
  _id: string;
  createdAt: string;
}

export default function KPICards() {
  const [totalLeads, setTotalLeads] = useState(0);
  const [todayLeads, setTodayLeads] = useState(0);

  useEffect(() => {
    async function fetchLeads() {
      const res = await fetch("/api/leads");
      const data = await res.json();
      const leads = data.leads || [];
      setTotalLeads(leads.length);

      const today = new Date().toDateString();
      const todayCount = leads.filter(
        (lead: Lead) => new Date(lead.createdAt).toDateString() === today
      ).length;
      setTodayLeads(todayCount);
    }
    fetchLeads();
  }, []);

  const cards = [
    {
      title: "Total Leads",
      value: totalLeads,
      icon: Users,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Today's Leads",
      value: todayLeads,
      icon: Zap,
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Growth",
      value: totalLeads > 0 ? "+12%" : "0%",
      icon: TrendingUp,
      color: "bg-chart-2/10 text-chart-2",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
          >
            <div
              className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
            >
              <Icon size={24} />
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              {card.title}
            </p>
            <p className="text-3xl font-bold text-foreground">{card.value}</p>
          </div>
        );
      })}
    </div>
  );
}
