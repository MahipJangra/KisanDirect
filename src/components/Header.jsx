import React from 'react'
import { Sprout, Menu, X, ChevronDown, ShoppingCart, BadgeCheck, LogOut } from 'lucide-react'
import { LanguageToggle } from '../i18n/LanguageProvider'

export default function Header({ page, setPage, role, setRole, resetRole, cartCount=0, profile }) {
  const [open, setOpen] = React.useState(false)
  const [roleOpen, setRoleOpen] = React.useState(false)
  const farmerNav = [['home','Home'], ['marketplace','Marketplace'], ['sell','Sell Crop'], ['listings','My Listings'], ['orders','Orders'], ['demand','AI Demand']]
  const buyerNav = [['home','Home'], ['marketplace','Shop'], ['orders','My Orders']]
  const navItems = role === 'farmer' ? farmerNav : buyerNav
  const go = id => { setPage(id); setOpen(false) }
  return <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2.5 sm:gap-4 sm:px-5 sm:py-3 lg:px-8">
      <button onClick={()=>go('home')} className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#e4f0df] text-[#2d6d3a] sm:h-9 sm:w-9"><Sprout size={19}/></span><span className="truncate text-base font-black tracking-tight sm:text-lg">KisanDirect</span></button>
      <nav className="ml-5 hidden flex-1 items-center gap-1 lg:flex">{navItems.map(([id,label])=><button key={id} onClick={()=>go(id)} className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${page===id?'bg-[#edf5e9] text-[#286038]':'text-black/50 hover:bg-black/[.035] hover:text-black/80'}`}>{label}</button>)}</nav>
      <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
        <LanguageToggle />
        {role==='buyer' && <button onClick={()=>go('cart')} className="relative grid h-9 w-9 place-items-center rounded-xl border border-black/10 bg-white sm:h-10 sm:w-10"><ShoppingCart size={18}/>{cartCount>0&&<span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#2f6f3e] px-1 text-[10px] font-black text-white">{cartCount}</span>}</button>}
        <div className="relative hidden sm:block"><button onClick={()=>setRoleOpen(v=>!v)} className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-bold capitalize"><BadgeCheck size={16} className="text-[#2f6f3e]"/>{profile?.name||role}<ChevronDown size={14}/></button>{roleOpen&&<div className="absolute right-0 mt-2 w-52 rounded-2xl border border-black/10 bg-white p-2 shadow-xl"><p className="px-3 py-2 text-xs text-black/40">Verified {role} account</p><button onClick={()=>{setRole('farmer');setRoleOpen(false)}} className="w-full rounded-xl px-3 py-2 text-left text-sm font-semibold hover:bg-[#f2f6ef]">Farmer view</button><button onClick={()=>{setRole('buyer');setRoleOpen(false)}} className="w-full rounded-xl px-3 py-2 text-left text-sm font-semibold hover:bg-[#fff8e9]">Buyer view</button><button
  onClick={() => { resetRole(); setRoleOpen(false) }}
  className="mt-1 flex w-full items-center gap-2 border-t border-black/5 px-3 pt-3 pb-2 text-left text-sm font-bold text-red-600 hover:text-red-700"
>
  <LogOut size={15}/> Logout
</button></div>}</div>
        <button onClick={()=>setOpen(!open)} className="rounded-xl border border-black/10 p-2 lg:hidden">{open?<X size={20}/>:<Menu size={20}/>}</button>
      </div>
    </div>
    {open&&<div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-black/5 bg-white px-3 py-3 sm:px-5 lg:hidden">{navItems.map(([id,label])=><button key={id} onClick={()=>go(id)} className="block w-full rounded-xl px-3 py-3 text-left text-sm font-semibold hover:bg-black/[.035]">{label}</button>)}{role==='buyer'&&<button onClick={()=>go('cart')} className="block w-full rounded-xl px-3 py-3 text-left text-sm font-semibold hover:bg-black/[.035]">Cart ({cartCount})</button>}<div className="mt-2 grid grid-cols-2 gap-2 border-t border-black/5 pt-3"><button onClick={()=>setRole('farmer')} className="rounded-xl bg-[#edf5e9] px-3 py-2 text-sm font-bold">Farmer</button><button onClick={()=>setRole('buyer')} className="rounded-xl bg-[#fff5df] px-3 py-2 text-sm font-bold">Buyer</button></div><button onClick={()=>{resetRole();setOpen(false)}} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-3 py-3 text-sm font-black text-red-600"><LogOut size={16}/> Logout</button></div>}
  </header>
}
