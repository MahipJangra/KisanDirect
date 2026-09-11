import React from 'react'
import { ArrowRight, TrendingUp, Package, Truck, IndianRupee } from 'lucide-react'
import StatCard from '../components/StatCard'

export default function Dashboard({ setPage, farmer, setFarmer }) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="section-label">Farmer workspace</p><h1 className="mt-2 text-3xl font-black tracking-tight">Good morning, Ramesh.</h1><p className="mt-1 text-sm text-black/50">Let's find the best route for your next harvest.</p></div>
        <button onClick={() => setPage('recommend')} className="btn-primary">Analyze my crop <ArrowRight size={16} /></button>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Current crop" value={farmer.crop} note={`${farmer.quantity.toLocaleString()} kg available`} />
        <StatCard label="Best observed price" value="₹34/kg" note="Jaipur • prototype data" />
        <StatCard label="Demand signal" value="High" note="87/100 weighted signal" />
        <StatCard label="Potential gain" value="+₹16.2k" note="vs estimated traditional chain" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="paper-card p-6">
          <div className="flex items-center justify-between"><div><p className="section-label">Demo scenario</p><h2 className="mt-1 text-xl font-black">Your tomato lot</h2></div><Package className="text-terracotta" /></div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Field label="Crop" value={farmer.crop} onChange={v => setFarmer({...farmer, crop:v})} />
            <Field label="Quantity (kg)" value={farmer.quantity} onChange={v => setFarmer({...farmer, quantity:Number(v)||0})} type="number" />
            <Field label="Location" value={farmer.location} onChange={v => setFarmer({...farmer, location:v})} />
            <Field label="Harvest date" value={farmer.harvest} onChange={v => setFarmer({...farmer, harvest:v})} />
          </div>
        </div>

        <div className="paper-card p-6">
          <p className="section-label">What KisanDirect checks</p>
          <div className="mt-5 space-y-4">
            <Mini icon={<TrendingUp />} title="Price + demand" text="Current market signal and expected demand." />
            <Mini icon={<Truck />} title="Transport" text="Distance and estimated movement cost." />
            <Mini icon={<IndianRupee />} title="Realization" text="Net value after transport and wastage." />
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({label, value, onChange, type='text'}) {
  return <label className="block"><span className="mb-1.5 block text-xs font-bold text-black/55">{label}</span><input className="input-field" type={type} value={value} onChange={e => onChange(e.target.value)} /></label>
}
function Mini({icon,title,text}) { return <div className="flex gap-3"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sand">{React.cloneElement(icon,{size:17})}</div><div><p className="font-bold">{title}</p><p className="mt-0.5 text-xs leading-5 text-black/50">{text}</p></div></div> }
