import React from 'react'

export default function StatCard({ label, value, note }) {
  return (
    <div className="paper-card p-5">
      <p className="section-label">{label}</p>
      <p className="mt-2 text-2xl font-black tracking-tight">{value}</p>
      {note && <p className="mt-1 text-xs text-black/50">{note}</p>}
    </div>
  )
}
