import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { markets, priceHistory } from '../data/mockData'

export default function Markets({ setPage }) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
      <p className="section-label">Market intelligence</p><div className="mt-2 flex flex-wrap items-end justify-between gap-4"><div><h1 className="text-3xl font-black">Where should the crop go?</h1><p className="mt-1 text-sm text-black/50">Tomato prices and demand signals across nearby markets.</p></div><button onClick={() => setPage('recommend')} className="btn-primary">Run recommendation</button></div>
      <div className="mt-6 paper-card p-5"><div className="mb-3 flex justify-between"><div><p className="section-label">6-day price movement</p><p className="mt-1 font-bold">₹/kg</p></div><span className="text-xs text-black/40">Prototype data</span></div><div className="h-72"><ResponsiveContainer width="100%" height="100%"><AreaChart data={priceHistory}><XAxis dataKey="day" /><YAxis domain={[24,36]} /><Tooltip /><Area type="monotone" dataKey="azadpur" name="Azadpur" fill="#b85c3a" fillOpacity={0.15} stroke="#b85c3a" /><Area type="monotone" dataKey="karnal" name="Karnal" fill="#4c536f" fillOpacity={0.08} stroke="#4c536f" /><Area type="monotone" dataKey="jaipur" name="Jaipur" fill="#69715a" fillOpacity={0.08} stroke="#69715a" /></AreaChart></ResponsiveContainer></div></div>
      <div className="mt-6 overflow-x-auto paper-card"><table className="w-full min-w-[760px] text-left text-sm"><thead className="border-b border-black/10 text-xs uppercase tracking-wider text-black/40"><tr>{['Market','Price/kg','Demand','Distance','Wastage','Buyers','Trend'].map(x=><th className="px-5 py-4" key={x}>{x}</th>)}</tr></thead><tbody>{markets.map(m=><tr key={m.id} className="border-b border-black/5 last:border-0"><td className="px-5 py-4 font-bold">{m.name}<span className="ml-2 text-xs font-normal text-black/40">{m.city}</span></td><td className="px-5 py-4 font-black">₹{m.price}</td><td className="px-5 py-4">{m.demand}/100</td><td className="px-5 py-4">{m.distance} km</td><td className="px-5 py-4">{m.wastage}%</td><td className="px-5 py-4">{m.buyers}</td><td className="px-5 py-4 text-olive">+{m.trend}%</td></tr>)}</tbody></table></div>
    </div>
  )
}
