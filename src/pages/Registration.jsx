import React from 'react'
import { BadgeCheck, FileCheck2, IdCard, Phone, ShieldCheck, Upload, Clock3, ArrowLeft, CheckCircle2 } from 'lucide-react'

const normalizePhone = phone => String(phone || '').replace(/\D/g, '').slice(-10)

export default function Registration({ role, profile, verifiedPhones = {}, onSave, onChangeRole }) {
  const [form, setForm] = React.useState({ name:'', phone:'', city:'', idType:'Aadhaar / Govt ID', fileName:'' })
  const pending = profile?.status === 'pending'
  const phoneKey = normalizePhone(form.phone)
  const phoneAlreadyVerified = phoneKey.length === 10 && Boolean(verifiedPhones[phoneKey]?.verified)

  if (pending) {
    return <div className="min-h-screen bg-[#f4f7f1] px-3 py-6 sm:px-5 sm:py-12">
      <div className="mx-auto max-w-xl rounded-[24px] bg-white p-5 text-center shadow-sm sm:rounded-[32px] sm:p-8">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#fff3d8] text-[#9a6b17]"><Clock3 size={30}/></span>
        <h1 className="mt-6 text-3xl font-black">Verification in progress</h1>
        <p className="mt-3 text-sm leading-7 text-black/50">Your ID has been submitted. Verification may take up to 7 days. Buying or selling is unlocked after approval.</p>
        <div className="mt-6 rounded-2xl bg-[#f7f8f4] p-4 text-left text-sm">
          <b>{profile.name}</b>
          <p className="mt-1 text-black/45 capitalize">{role} account • {profile.city}</p>
          <p className="mt-2 flex items-center gap-2 text-xs text-black/40"><FileCheck2 size={14}/> {profile.fileName || 'Government ID uploaded'}</p>
        </div>
        <button onClick={() => onSave({...profile,status:'verified',verifiedOn:'10 Sep 2026'})} className="btn-primary mt-7 w-full !py-3.5"><BadgeCheck size={18}/> Demo: approve account</button>
        <p className="mt-3 text-[10px] leading-4 text-black/35">Prototype shortcut only. Once approved, this phone number is remembered as verified.</p>
        <button onClick={onChangeRole} className="mt-5 text-sm font-bold text-black/40">Choose another role</button>
      </div>
    </div>
  }

  const submit = e => {
    e.preventDefault()

    if (phoneAlreadyVerified) {
      onSave({
        ...form,
        role,
        status:'verified',
        verifiedOn: verifiedPhones[phoneKey]?.verifiedOn || 'Previously verified',
        verificationMethod:'Recognized verified phone'
      })
      return
    }

    onSave({...form, role, status:'pending', submittedOn:'10 Sep 2026'})
  }

  const demo = () => onSave({
    name: role==='farmer'?'Demo Farmer':'Demo Buyer',
    phone:'+91 9876543210',
    city:'Hisar, Haryana',
    idType:'Government ID',
    fileName:'verified-demo-id.pdf',
    role,
    status:'verified',
    verifiedOn:'10 Sep 2026'
  })

  return <div className="min-h-screen bg-[#f4f7f1] px-3 py-6 sm:px-5 sm:py-9">
    <div className="mx-auto max-w-2xl">
      <button onClick={onChangeRole} className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-black/45"><ArrowLeft size={16}/> Change role</button>
      <div className="rounded-[22px] bg-white p-4 shadow-sm sm:rounded-[32px] sm:p-8">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e7f2e4] text-[#2f6f3e]"><ShieldCheck size={24}/></span>
        <h1 className="mt-5 text-2xl font-black sm:text-3xl">{phoneAlreadyVerified ? `Welcome back, ${role}` : `Create your verified ${role} account`}</h1>
        <p className="mt-2 text-sm leading-6 text-black/50">
          {phoneAlreadyVerified
            ? 'This phone number is already linked to a verified ID. Enter your basic details to continue — no ID upload is needed again.'
            : 'We verify both sides before they can buy or sell. Verification may take up to 7 days.'}
        </p>

        <form onSubmit={submit} className="mt-7 grid gap-5 sm:grid-cols-2">
          <Field label={role==='farmer'?'Farmer / FPO name':'Buyer / business name'} value={form.name} onChange={v=>setForm({...form,name:v})}/>
          <div>
            <Field label="Phone number" value={form.phone} onChange={v=>setForm({...form,phone:v})} icon={<Phone/>}/>
            {phoneAlreadyVerified && (
              <p className="mt-2 flex items-center gap-1.5 text-xs font-bold text-[#2f6f3e]"><CheckCircle2 size={14}/> ID already verified for this number</p>
            )}
          </div>
          <Field label="City / district" value={form.city} onChange={v=>setForm({...form,city:v})}/>

          {!phoneAlreadyVerified && <>
            <label>
              <span className="field-label">ID type</span>
              <select className="input-field" value={form.idType} onChange={e=>setForm({...form,idType:e.target.value})}>
                <option>Aadhaar / Govt ID</option>
                <option>PAN / Business ID</option>
                <option>FPO Registration</option>
              </select>
            </label>

            <label className="sm:col-span-2">
              <span className="field-label">Upload ID document</span>
              <div className="relative rounded-2xl border border-dashed border-black/15 bg-[#fafbf8] p-6 text-center">
                <Upload className="mx-auto text-black/30"/>
                <p className="mt-2 text-sm font-bold">{form.fileName || 'Choose a document'}</p>
                <p className="mt-1 text-xs text-black/35">Prototype only — the file is not stored.</p>
                <input required type="file" accept="image/*,.pdf" onChange={e=>setForm({...form,fileName:e.target.files?.[0]?.name||''})} className="absolute inset-0 cursor-pointer opacity-0"/>
              </div>
            </label>
          </>}

          <button className="btn-primary sm:col-span-2 !py-3.5">
            {phoneAlreadyVerified ? <><BadgeCheck size={18}/> Continue as verified user</> : <><IdCard size={18}/> Submit for verification</>}
          </button>
        </form>

        {!phoneAlreadyVerified && <>
          <div className="my-6 flex items-center gap-3 text-xs text-black/30"><span className="h-px flex-1 bg-black/10"/>or for the demo<span className="h-px flex-1 bg-black/10"/></div>
          <button onClick={demo} className="btn-secondary w-full !py-3.5"><BadgeCheck size={18}/> Use verified demo account</button>
        </>}
      </div>
    </div>
  </div>
}

function Field({label,value,onChange,icon}){
  return <label>
    <span className="field-label">{label}</span>
    <div className="relative">
      {icon&&<span className="absolute left-3 top-3.5 text-black/25">{React.cloneElement(icon,{size:16})}</span>}
      <input required value={value} onChange={e=>onChange(e.target.value)} className={`input-field ${icon?'pl-10':''}`}/>
    </div>
  </label>
}
