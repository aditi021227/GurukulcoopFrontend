import React from "react";

export default function StatCard({ value, label }) {
  return (
    <div className="bg-white/10 rounded-lg p-3 text-center">
      <div className="font-bold">{value}</div>
      <div className="text-xs text-white/80">{label}</div>
    </div>
  );
}
