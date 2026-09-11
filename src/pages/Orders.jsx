import React from 'react'
import { PackageCheck, ShoppingBag, Truck, Route, MapPin, CheckCircle2, Clock3, IndianRupee, XCircle } from 'lucide-react'

const routeFor = o => {
  const from = o.location?.split(',')[0] || 'Farm'
  const to = o.deliveryAddress?.split(',')[0] || 'Buyer'
  const km = from.toLowerCase().includes('hisar') ? 170 : from.toLowerCase().includes('karnal') ? 125 : 145
  return {label:`${from} → ${to}`, km, time:`${Math.floor(km/55)}h ${Math.round((km/55%1)*60)}m`}
}

export default function Orders({role,orders,setPage,updateOrder}){
  const [deliveryFor,setDeliveryFor]=React.useState(null)
  const [charge,setCharge]=React.useState('')
  const relevant=role==='farmer'?orders.filter(o=>o.seller==='My Farm'||o.demoForFarmer):orders.filter(o=>!o.demoForFarmer)

  const addDelivery = () => {
    if(!deliveryFor||!Number(charge))return
    updateOrder(deliveryFor.orderId,{deliveryCharge:Number(charge),status:'Delivery charge added'})
    setDeliveryFor(null);setCharge('')
  }

  if(!relevant.length)return <div className="mx-auto max-w-2xl px-5 py-16 text-center"><ShoppingBag size={50} className="mx-auto text-black/20"/><h1 className="mt-4 text-3xl font-black">No orders yet</h1><p className="mt-2 text-sm text-black/45">{role==='buyer'?'Your placed orders will appear here.':'Orders placed on your crop listings will appear here.'}</p><button onClick={()=>setPage(role==='buyer'?'marketplace':'sell')} className="btn-primary mt-6">{role==='buyer'?'Start shopping':'Add a crop'}</button></div>

  return <div className="mx-auto max-w-6xl px-3 py-5 sm:px-5 sm:py-8 lg:px-8"><p className="eyebrow">Orders</p><h1 className="mt-2 text-2xl font-black sm:text-3xl">{role==='buyer'?'My orders':'Orders received'}</h1><p className="mt-2 text-sm text-black/45">{role==='farmer'?'Review orders, arrange transport and send the delivery charge to the buyer.':'Track farmer confirmation, delivery charges and order status.'}</p><div className="mt-6 space-y-4">{relevant.map(o=>{const final=Number(o.orderQty)*Number(o.price)+(Number(o.deliveryCharge)||0);const route=routeFor(o);return <div key={o.orderId} className="rounded-3xl bg-white p-5 shadow-sm"><div className="flex flex-wrap items-start gap-4"><div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#eef5e9] text-3xl">{o.emoji||'🌾'}</div><div className="min-w-0 flex-1 basis-[220px]"><div className="flex flex-wrap items-center gap-2"><h2 className="text-lg font-black">{o.crop}</h2><Status s={o.status}/></div><p className="mt-1 text-xs text-black/40">Order #{o.orderId} • {o.placedOn}</p><p className="mt-2 text-sm"><b>{o.orderQty} kg</b> × ₹{o.price}/kg</p><p className="mt-2 flex items-center gap-1 text-xs text-black/40"><MapPin size={13}/>{o.deliveryAddress||'Delivery address pending'}</p></div><div className="w-full text-left sm:w-auto sm:text-right"><p className="text-xs text-black/40">Crop value</p><b className="text-xl">₹{(o.orderQty*o.price).toLocaleString()}</b>{o.deliveryCharge!=null&&<><p className="mt-2 text-xs text-black/40">Delivery ₹{Number(o.deliveryCharge).toLocaleString()}</p><p className="mt-1 text-sm font-black text-[#2f6f3e]">Final ₹{final.toLocaleString()}</p></>}</div></div>

          {o.deliveryCharge!=null&&<div className="mt-5 grid gap-3 rounded-2xl bg-[#f5f8f2] p-4 sm:grid-cols-[1fr_auto]"><div><p className="flex items-center gap-2 text-sm font-black"><Route size={16} className="text-[#2f6f3e]"/> AI route suggestion</p><p className="mt-1 text-xs text-black/45">{route.label} • approx. {route.km} km • {route.time}</p><p className="mt-1 text-[10px] text-black/30">Prototype route estimate. Production version would use live map/traffic data.</p></div><div className="self-center rounded-xl bg-white px-3 py-2 text-xs font-bold text-[#2f6f3e]">Optimized route</div></div>}

          <div className="mt-5 flex flex-wrap gap-3">
            {role==='farmer'&&o.status==='Awaiting farmer review'&&<><button onClick={()=>setDeliveryFor(o)} className="btn-primary"><Truck size={17}/> Accept & add delivery</button><button onClick={()=>updateOrder(o.orderId,{status:'Rejected by farmer'})} className="btn-secondary"><XCircle size={17}/> Reject</button></>}
            {role==='farmer'&&o.status==='Delivery charge added'&&<span className="inline-flex items-center gap-2 rounded-xl bg-[#fff6df] px-4 py-2.5 text-sm font-bold text-[#946719]"><Clock3 size={16}/> Waiting for buyer confirmation</span>}
            {role==='buyer'&&o.status==='Delivery charge added'&&<><button onClick={()=>updateOrder(o.orderId,{status:'Confirmed'})} className="btn-primary"><CheckCircle2 size={17}/> Confirm ₹{final.toLocaleString()}</button><button onClick={()=>updateOrder(o.orderId,{status:'Cancelled by buyer'})} className="btn-secondary">Cancel order</button></>}
            {role==='farmer'&&o.status==='Confirmed'&&<button onClick={()=>updateOrder(o.orderId,{status:'Dispatched'})} className="btn-primary"><Truck size={17}/> Mark dispatched</button>}
            {role==='buyer'&&o.status==='Dispatched'&&<button onClick={()=>updateOrder(o.orderId,{status:'Delivered'})} className="btn-primary"><PackageCheck size={17}/> Mark received</button>}
          </div>
        </div>})}</div>

    {deliveryFor&&<div className="fixed inset-0 z-50 grid place-items-end overflow-y-auto bg-black/35 px-3 py-3 backdrop-blur-sm sm:place-items-center sm:px-5"><div className="w-full max-w-md rounded-[24px] bg-white p-5 shadow-2xl sm:rounded-[28px] sm:p-6"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf4e7] text-[#2f6f3e]"><Truck size={21}/></span><h2 className="mt-4 text-2xl font-black">Arrange delivery</h2><p className="mt-2 text-sm leading-6 text-black/50">After checking transport availability, enter the delivery amount. The buyer must confirm the final total.</p><label className="mt-5 block"><span className="field-label">Delivery charge (₹)</span><div className="relative"><IndianRupee className="absolute left-3 top-3.5 text-black/25" size={16}/><input autoFocus type="number" min="1" value={charge} onChange={e=>setCharge(e.target.value)} className="input-field pl-10" placeholder="e.g. 9000"/></div></label><div className="mt-6 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2"><button onClick={()=>setDeliveryFor(null)} className="btn-secondary">Cancel</button><button onClick={addDelivery} className="btn-primary">Send to buyer</button></div></div></div>}
  </div>
}
function Status({s}){const good=['Confirmed','Dispatched','Delivered'].includes(s);const bad=s.includes('Rejected')||s.includes('Cancelled');return <span className={`rounded-full px-2.5 py-1 text-[10px] font-black ${bad?'bg-red-50 text-red-600':good?'bg-[#e9f5e7] text-[#2f6f3e]':'bg-[#fff4d9] text-[#936617]'}`}>{s}</span>}
