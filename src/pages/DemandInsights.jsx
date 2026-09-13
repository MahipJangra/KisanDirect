import React from 'react'
import { ArrowLeft, BrainCircuit, TrendingUp, TrendingDown, Minus, MapPin, Sparkles } from 'lucide-react'

const forecast = [
  {crop:'Wheat', market:'Delhi NCR', demand:'High', change:'+12%', price:'₹29–31/kg', trend:'up'},
  {crop:'Tomato', market:'Delhi NCR', demand:'High', change:'+18%', price:'₹32–35/kg', trend:'up'},
  {crop:'Mustard', market:'Rohtak', demand:'Medium', change:'+3%', price:'₹60–63/kg', trend:'flat'},
  {crop:'Potato', market:'Panipat', demand:'Low', change:'-6%', price:'₹18–20/kg', trend:'down'}
]
export default function DemandInsights({setPage}){
  return <div className="mx-auto max-w-6xl px-3 py-5 sm:px-5 sm:py-8 lg:px-8">
    <button onClick={()=>setPage('home')} className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-black/45"><ArrowLeft size={16}/> Back</button>
    <div className="rounded-[22px] bg-[#193f29] p-5 text-white sm:rounded-[30px] sm:p-8"><div className="flex flex-wrap items-start justify-between gap-5"><div><p className="text-xs font-black uppercase tracking-[.18em] text-white/45">Prototype AI insight</p><h1 className="mt-3 text-2xl font-black sm:text-3xl">Demand forecast</h1><p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">A simple decision-support view that estimates near-term crop demand and indicative price ranges. In production this would use mandi prices, seasonality, order history and regional demand data.</p></div><span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-[#f0c967]"><BrainCircuit size={28}/></span></div></div>
    <div className="mt-6 grid gap-4 md:grid-cols-2">{forecast.map(x=><div key={x.crop} className="rounded-3xl bg-white p-5 shadow-sm"><div className="flex items-start justify-between"><div><p className="text-xs font-black uppercase tracking-wider text-black/35">{x.crop}</p><p className="mt-2 flex items-center gap-1 text-sm text-black/45"><MapPin size={14}/>{x.market}</p></div><span className={`rounded-full px-3 py-1 text-xs font-black ${x.demand==='High'?'bg-[#e8f5e6] text-[#2f6f3e]':x.demand==='Low'?'bg-red-50 text-red-600':'bg-[#fff5dc] text-[#996a19]'}`}>{x.demand} demand</span></div><div className="mt-5 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2"><div className="rounded-2xl bg-[#f7f8f4] p-4"><p className="text-[10px] uppercase tracking-wider text-black/35">Demand trend</p><div className="mt-2 flex items-center gap-2 font-black">{x.trend==='up'?<TrendingUp size={17}/>:x.trend==='down'?<TrendingDown size={17}/>:<Minus size={17}/>} {x.change}</div></div><div className="rounded-2xl bg-[#f7f8f4] p-4"><p className="text-[10px] uppercase tracking-wider text-black/35">Indicative range</p><b className="mt-2 block">{x.price}</b></div></div></div>)}</div>
    <div className="mt-6 flex gap-3 rounded-2xl border border-[#dce7d8] bg-[#f1f7ee] p-4 text-sm leading-6 text-[#315c3b]"><Sparkles size={18} className="mt-0.5 shrink-0"/><p><b>For SIH:</b> this demonstrates the AI demand-forecasting layer without complicating the shopping experience. The production model would be trained and validated using live historical datasets.</p></div>
  </div>
}
