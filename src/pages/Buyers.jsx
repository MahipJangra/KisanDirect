import React from 'react'
import { Search, ArrowRight, BadgeCheck } from 'lucide-react'
import { buyers } from '../data/mockData'

export default function Buyers({ setPage }) {
  const [q,setQ] = React.useState('')
  const filtered = buyers.filter(b => `${b.name} ${b.type}`.toLowerCase().includes(q.toLowerCase()))
  return <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8"><p className="section-label">Direct buyer network</p><div className="mt-2 flex flex-wrap items-end justify-between gap-4"><div><h1 className="text-3xl font-black">Buyer matching</h1><p className="mt-1 text-sm text-black/50">Potential buyers for your selected tomato lot.</p></div><button onClick={()=>setPage('logistics')} className="btn-primary">Plan transport <ArrowRight size={16}/></button></div><div className="relative mt-6 max-w-md"><Search size={17} className="absolute left-3 top-3.5 text-black/35"/><input className="input-field pl-10" placeholder="Search buyer" value={q} onChange={e=>setQ(e.target.value)}/></div><div className="mt-5 grid gap-4 md:grid-cols-2">{filtered.map(b=><div className="paper-card p-5" key={b.id}><div className="flex justify-between gap-4"><div><div className="flex items-center gap-2"><h2 className="font-black">{b.name}</h2><BadgeCheck size={16} className="text-olive"/></div><p className="mt-1 text-xs text-black/45">{b.type} • {b.market} • {b.distance} km</p></div><span className="rounded-full bg-olive/10 px-2.5 py-1 text-xs font-bold text-olive">{b.match}% match</span></div><div className="mt-5 grid grid-cols-3 gap-2 text-xs"><Metric l="Required" v={`${b.required.toLocaleString()} kg`} /><Metric l="Offer" v={`₹${b.offered}/kg`} /><Metric l="Crop" v={b.crop}/></div></div>)}</div></div>
}
function Metric({l,v}) {return <div className="rounded-xl bg-paper p-3"><p className="text-[10px] uppercase tracking-wider text-black/40">{l}</p><p className="mt-1 font-bold">{v}</p></div>}
