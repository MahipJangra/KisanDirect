import React from 'react'
import { ArrowLeft, MapPin, PackageOpen, Plus, Eye, Pencil, Trash2, X } from 'lucide-react'

export default function MyListings({ listings, setPage, openProduct, editListing, deleteListing }) {
  const myListings = listings.filter(item => item.seller === 'My Farm' || String(item.id).startsWith('user-'))
  const [confirmDelete, setConfirmDelete] = React.useState(null)

  const remove = () => {
    if (!confirmDelete) return
    deleteListing(confirmDelete.id)
    setConfirmDelete(null)
  }

  return (
    <div className="mx-auto max-w-7xl px-3 py-5 sm:px-5 sm:py-8 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <button onClick={() => setPage('home')} className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-black/45">
            <ArrowLeft size={16}/> Back
          </button>
          <p className="eyebrow">Farmer dashboard</p>
          <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">My Listings</h1>
          <p className="mt-2 text-sm text-black/45">Manage the crops you have uploaded for buyers.</p>
        </div>
        <button onClick={() => setPage('sell')} className="btn-primary"><Plus size={18}/> Add crop</button>
      </div>

      {myListings.length === 0 ? (
        <div className="mt-10 rounded-[30px] border border-dashed border-black/10 bg-white px-6 py-14 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#edf5e9] text-[#2f6f3e]"><PackageOpen size={26}/></span>
          <h2 className="mt-5 text-xl font-black">No crops listed yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-black/45">Add your first crop and it will appear here as well as in the marketplace.</p>
          <button onClick={() => setPage('sell')} className="btn-primary mt-6"><Plus size={18}/> Add your first crop</button>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {myListings.map(item => (
            <article key={item.id} className="overflow-hidden rounded-[26px] border border-black/5 bg-white shadow-sm">
              <div className="crop-visual relative aspect-[4/3] min-h-0 overflow-hidden">
                {item.image?<img src={item.image} alt={item.crop} className="absolute inset-0 h-full w-full object-cover"/>:<span className="text-6xl">{item.emoji}</span>}
                <span className="relative z-10 ml-auto self-start rounded-full bg-white/90 px-3 py-1 text-[11px] font-black text-[#2f6f3e] shadow-sm">Live</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-black">{item.crop}</h2>
                    <p className="mt-1 flex items-center gap-1 text-xs text-black/40"><MapPin size={12}/>{item.location}</p>
                  </div>
                  <div className="text-right"><div className="text-lg font-black">₹{item.price}/kg</div><div className="mt-1 text-[11px] text-black/35">{item.grade}</div></div>
                </div>

                <div className="mt-5 rounded-2xl bg-[#f7f9f5] px-4 py-3">
                  <div className="flex items-center justify-between text-sm"><span className="text-black/45">Available quantity</span><b>{item.quantity}</b></div>
                </div>

                <button onClick={() => openProduct(item)} className="btn-secondary mt-4 w-full"><Eye size={17}/> View listing</button>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <button onClick={() => editListing(item)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#2f6f3e]/15 bg-[#f2f7ef] px-4 py-3 text-sm font-black text-[#2f6f3e] transition hover:bg-[#e7f1e3]">
                    <Pencil size={16}/> Edit
                  </button>
                  <button onClick={() => setConfirmDelete(item)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-black text-red-600 transition hover:bg-red-100">
                    <Trash2 size={16}/> Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {confirmDelete && (
        <div className="fixed inset-0 z-50 grid place-items-end overflow-y-auto bg-black/35 px-3 py-3 backdrop-blur-sm sm:place-items-center sm:px-5">
          <div className="w-full max-w-md rounded-[24px] bg-white p-5 shadow-2xl sm:rounded-[28px] sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-black">Delete this listing?</h2>
                <p className="mt-2 text-sm leading-6 text-black/50">
                  {confirmDelete.crop} will be removed from My Listings and the marketplace.
                </p>
              </div>
              <button onClick={() => setConfirmDelete(null)} className="grid h-9 w-9 place-items-center rounded-full bg-black/5 text-black/50"><X size={17}/></button>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2">
              <button onClick={() => setConfirmDelete(null)} className="btn-secondary">Cancel</button>
              <button onClick={remove} className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-black text-white hover:bg-red-700">
                <Trash2 size={16}/> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
