import React from 'react'
import { CheckCircle2, ArrowRight, Calculator } from 'lucide-react'
import { markets } from '../data/mockData'
import { calculateRecommendation } from '../utils/recommendation'

export default function Recommend({ farmer, setPage, recommendation, setRecommendation }) {
  const [quantity, setQuantity] = React.useState(farmer.quantity)
  const results = markets.map(m => calculateRecommendation(m, quantity)).sort((a,b)=>b.score-a.score)
  const best = results[0]

  const run = () => setRecommendation(best)

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
      <p className="section-label">Decision engine</p><h1 className="mt-2 text-3xl font-black">Best market recommendation</h1><p className="mt-1 max-w-2xl text-sm leading-6 text-black/50">The MVP scores markets using price, demand, transport, wastage and buyer availability. It does not simply select the highest price.</p>
      <div className="mt-7 grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
        <div className="paper-card p-6"><div className="flex items-center gap-2"><Calculator size={18}/><p className="font-bold">Scenario inputs</p></div><label className="mt-6 block"><span className="mb-2 block text-xs font-bold text-black/55">Quantity (kg)</span><input className="input-field" type="number" value={quantity} onChange={e=>setQuantity(Number(e.target.value)||0)} /></label><div className="mt-5 rounded-xl bg-paper p-4 text-sm"><div className="flex justify-between"><span className="text-black/50">Crop</span><b>{farmer.crop}</b></div><div className="mt-2 flex justify-between"><span className="text-black/50">Origin</span><b>{farmer.location}</b></div></div><button onClick={run} className="btn-primary mt-5 w-full">Analyze markets <ArrowRight size={16}/></button></div>
        <div className="space-y-3">{results.map((r,i)=><div key={r.id} className={`paper-card p-5 ${i===0?'border-terracotta/40':''}`}><div className="flex flex-wrap items-start justify-between gap-4"><div><div className="flex items-center gap-2">{i===0 && <CheckCircle2 size={17} className="text-olive"/>}<h2 className="font-black">{r.name}</h2>{i===0 && <span className="rounded-full bg-olive/10 px-2 py-1 text-[10px] font-bold text-olive">RECOMMENDED</span>}</div><p className="mt-1 text-xs text-black/45">{r.city} • {r.distance} km • demand {r.demand}/100</p></div><div className="text-right"><p className="text-xl font-black">₹{Math.round(r.realization).toLocaleString()}</p><p className="text-xs text-black/40">estimated net realization</p></div></div><div className="mt-4 grid grid-cols-4 gap-2 text-xs"><Metric label="Price" value={`₹${r.price}`} /><Metric label="Transport" value={`₹${Math.round(r.transport).toLocaleString()}`} /><Metric label="Wastage" value={`₹${Math.round(r.wastageCost).toLocaleString()}`} /><Metric label="Score" value={`${r.score}`} /></div>{i===0 && <button onClick={()=>setPage('buyers')} className="mt-4 btn-secondary w-full">Continue to buyer matching <ArrowRight size={15}/></button>}</div>)}</div>
      </div>
      <p className="mt-5 text-xs text-black/40">Prototype calculation: gross value − transport − expected wastage − handling. Weights: price 40%, demand 25%, transport 20%, wastage 10%, buyer availability 5%.</p>
    </div>
  )
}
function Metric({label,value}) { return <div className="rounded-lg bg-paper p-3"><p className="text-[10px] uppercase tracking-wider text-black/40">{label}</p><p className="mt-1 font-bold">{value}</p></div> }
