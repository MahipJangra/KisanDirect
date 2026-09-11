import React from 'react'
import { ArrowLeft, CheckCircle2, ImagePlus, Sprout } from 'lucide-react'

const emptyForm = {
  crop:'Wheat',
  quantity:1000,
  price:28,
  location:'Hisar, Haryana',
  grade:'Grade A',
  description:'Fresh crop, ready for bulk sale.',
  image:''
}

export default function SellCrop({ listings, setListings, setPage, editingListing, setEditingListing }) {
  const [form,setForm] = React.useState(() => editingListing ? {
    crop: editingListing.crop,
    quantity: editingListing.quantityKg,
    price: editingListing.price,
    location: editingListing.location,
    grade: editingListing.grade,
    description: editingListing.description || '',
    image: editingListing.image || ''
  } : emptyForm)

  const [done,setDone] = React.useState(false)
  const isEditing = Boolean(editingListing)

  React.useEffect(() => {
    if (editingListing) {
      setForm({
        crop: editingListing.crop,
        quantity: editingListing.quantityKg,
        price: editingListing.price,
        location: editingListing.location,
        grade: editingListing.grade,
        description: editingListing.description || '',
        image: editingListing.image || ''
      })
    } else {
      setForm(emptyForm)
    }
    setDone(false)
  }, [editingListing])

  const change=(k,v)=>setForm(current=>({...current,[k]:v}))

  const handleImage = (file) => {
    if (!file) return
    if (!file.type.startsWith('image/')) {
      alert('Please choose an image file.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const maxWidth = 1200
        const scale = Math.min(1, maxWidth / img.width)
        const canvas = document.createElement('canvas')
        canvas.width = Math.round(img.width * scale)
        canvas.height = Math.round(img.height * scale)
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        change('image', canvas.toDataURL('image/jpeg', 0.78))
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  }

  const submit=e=>{
    e.preventDefault()
    const icons={Wheat:'🌾',Rice:'🍚',Tomato:'🍅',Potato:'🥔',Onion:'🧅',Mustard:'🌼'}
    const data = {
      crop:form.crop,
      quantity:`${Number(form.quantity).toLocaleString()} kg`,
      quantityKg:Number(form.quantity),
      price:Number(form.price),
      location:form.location,
      grade:form.grade,
      seller:'My Farm',
      verified:true,
      emoji:icons[form.crop]||'🌱',
      description:form.description,
      image:form.image || ''
    }

    if (isEditing) {
      setListings(current => current.map(item => item.id === editingListing.id ? {...item, ...data} : item))
    } else {
      setListings(current => [{id:`user-${Date.now()}`,...data}, ...current])
    }

    setDone(true)
  }

  const leave = (pageName) => {
    setEditingListing(null)
    setPage(pageName)
  }

  if(done)return (
    <div className="mx-auto max-w-xl px-5 py-16 text-center">
      <div className="rounded-[32px] bg-white p-8 shadow-sm">
        <CheckCircle2 size={54} className="mx-auto text-[#3b7a48]"/>
        <h1 className="mt-5 text-2xl font-black sm:text-3xl">{isEditing ? 'Listing updated' : 'Your crop is live'}</h1>
        <p className="mt-3 text-sm leading-6 text-black/50">
          {isEditing ? 'Your changes are now visible to buyers in the marketplace.' : 'Buyers can now find it in the marketplace and place an order.'}
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <button onClick={()=>leave('listings')} className="btn-primary">View my listings</button>
          <button onClick={()=>{setEditingListing(null);setDone(false);setForm(emptyForm)}} className="btn-secondary">{isEditing ? 'Add another crop' : 'Add another crop'}</button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 sm:px-5 sm:py-8 lg:px-8">
      <button onClick={()=>leave('listings')} className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-black/45">
        <ArrowLeft size={16}/> Back
      </button>
      <div className="rounded-[22px] border border-black/5 bg-white p-4 sm:rounded-[30px] sm:p-8">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e6f0e1] text-[#2f6f3e]"><Sprout/></span>
        <h1 className="mt-5 text-2xl font-black sm:text-3xl">{isEditing ? 'Edit crop listing' : 'Add a crop for sale'}</h1>
        <p className="mt-2 text-sm text-black/45">
          {isEditing ? 'Update the details buyers will see in the marketplace.' : 'Keep it simple. Buyers only need the important details.'}
        </p>

        <form onSubmit={submit} className="mt-7 grid gap-5 sm:grid-cols-2">
          <label>
            <span className="field-label">Crop</span>
            <select className="input-field" value={form.crop} onChange={e=>change('crop',e.target.value)}>
              {['Wheat','Rice','Tomato','Potato','Onion','Mustard','Other'].map(x=><option key={x}>{x}</option>)}
            </select>
          </label>
          <Field label="Location" value={form.location} onChange={v=>change('location',v)}/>
          <Field label="Available quantity (kg)" type="number" value={form.quantity} onChange={v=>change('quantity',v)}/>
          <Field label="Price (₹/kg)" type="number" value={form.price} onChange={v=>change('price',v)}/>
          <label>
            <span className="field-label">Quality</span>
            <select className="input-field" value={form.grade} onChange={e=>change('grade',e.target.value)}>
              <option>Grade A</option><option>Grade B</option><option>Premium</option><option>Organic</option><option>Standard</option>
            </select>
          </label>
          <div>
            <span className="field-label">Product photo</span>
            <input id="crop-photo" type="file" accept="image/*" className="hidden" onChange={e=>handleImage(e.target.files?.[0])}/>
            <label htmlFor="crop-photo" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-black/15 bg-[#fafbf8] px-4 py-3 text-sm font-bold text-black/45 hover:border-[#3b7a48]/40 hover:text-[#2f6f3e]">
              <ImagePlus size={17}/> {form.image ? 'Change photo' : 'Add photo'}
            </label>
            {form.image && <div className="mt-3 overflow-hidden rounded-2xl border border-black/5 bg-[#f6f7f2]"><img src={form.image} alt="Crop preview" className="h-36 w-full object-cover"/><div className="flex items-center justify-between px-3 py-2"><span className="text-xs font-bold text-[#2f6f3e]">Photo ready</span><button type="button" onClick={()=>change('image','')} className="text-xs font-bold text-red-500">Remove</button></div></div>}
          </div>
          <label className="sm:col-span-2">
            <span className="field-label">Short description</span>
            <textarea className="input-field min-h-24 resize-none" value={form.description} onChange={e=>change('description',e.target.value)}/>
          </label>
          <button className="btn-primary sm:col-span-2 sm:w-max">{isEditing ? 'Save changes' : 'Publish crop'}</button>
        </form>
      </div>
    </div>
  )
}

function Field({label,value,onChange,type='text'}){
  return <label><span className="field-label">{label}</span><input required className="input-field" type={type} value={value} onChange={e=>onChange(e.target.value)}/></label>
}
