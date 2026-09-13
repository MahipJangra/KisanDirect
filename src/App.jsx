import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import SellCrop from './pages/SellCrop'
import MyListings from './pages/MyListings'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Chat from './pages/Chat'
import Registration from './pages/Registration'
import DemandInsights from './pages/DemandInsights'
import { cropListings as demoListings, demoOrders } from './data/mockData'
import { Sprout, ShoppingBasket, ArrowRight } from 'lucide-react'
import { LanguageToggle } from './i18n/LanguageProvider'

function useStoredState(key, initialValue) {
  const [value, setValue] = React.useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved ? JSON.parse(saved) : initialValue
    } catch { return initialValue }
  })
  React.useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)) } catch {}
  }, [key, value])
  return [value, setValue]
}

function RoleGate({ onChoose }) {
  return (
    <div className="min-h-screen bg-[#f4f7f1] px-3 py-3 text-[#18311f] sm:grid sm:place-items-center sm:px-5 sm:py-8">
      <LanguageToggle floating />
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[22px] sm:rounded-[32px] border border-black/5 bg-white shadow-[0_24px_80px_rgba(35,64,45,.12)]">
        <div className="grid lg:grid-cols-[.9fr_1.1fr]">
          <div className="bg-[#1f5a34] p-5 text-white sm:p-10 lg:p-12">
            <div className="flex items-center gap-3 text-xl font-black"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10"><Sprout size={22}/></span>KisanDirect</div>
            <p className="mt-8 text-xs font-bold sm:mt-16 uppercase tracking-[.2em] text-white/55">Direct crop marketplace</p>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-[-.04em] sm:text-5xl">Farm to buyer, without the unnecessary layers.</h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">Verified farmers list crops, buyers order directly, and both sides can negotiate the price when needed.</p>
          </div>
          <div className="p-5 sm:p-10 lg:p-12">
            <p className="text-sm font-bold text-[#6a776e]">Welcome to KisanDirect</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">How do you want to continue?</h2>
            <p className="mt-2 text-sm text-black/45">Choose your role. Registration and verification comes next.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <button onClick={() => onChoose('farmer')} className="group rounded-2xl border-2 sm:rounded-3xl border-[#dfe8df] bg-[#f3f8f1] p-6 text-left transition hover:-translate-y-1 hover:border-[#6d9d73] hover:shadow-lg">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#dcebd9] text-[#2f6f3e]"><Sprout size={24}/></span>
                <h3 className="mt-6 text-xl font-black">Farmer / FPO</h3>
                <p className="mt-2 text-sm leading-6 text-black/50">List crops, receive orders, manage prices and arrange delivery.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2f6f3e]">Start selling <ArrowRight size={16}/></span>
              </button>
              <button onClick={() => onChoose('buyer')} className="group rounded-2xl border-2 sm:rounded-3xl border-[#eee5d4] bg-[#fffaf0] p-6 text-left transition hover:-translate-y-1 hover:border-[#d9a84e] hover:shadow-lg">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f7e7bd] text-[#96681a]"><ShoppingBasket size={24}/></span>
                <h3 className="mt-6 text-xl font-black">Buyer</h3>
                <p className="mt-2 text-sm leading-6 text-black/50">Search crops, compare verified sellers, negotiate and place orders.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#96681a]">Start buying <ArrowRight size={16}/></span>
              </button>
            </div>
            <p className="mt-8 text-xs text-black/35">SIH 2026 MVP • Prototype data and simulated verification</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [role, setRole] = React.useState(() => localStorage.getItem('kisan-role') || '')
  const [profiles, setProfiles] = useStoredState('kisan-profiles', {})
  const [verifiedPhones, setVerifiedPhones] = useStoredState('kisan-verified-phones', {})
  const profile = profiles[role]
  const [page, setPageState] = React.useState(() => window.history.state?.page || 'home')

  const setPage = React.useCallback((nextPage, { replace = false } = {}) => {
    setPageState(currentPage => {
      if (nextPage === currentPage) return currentPage
      const state = { ...(window.history.state || {}), page: nextPage }
      if (replace) window.history.replaceState(state, '', window.location.href)
      else window.history.pushState(state, '', window.location.href)
      return nextPage
    })
  }, [])

  React.useEffect(() => {
    const initialPage = window.history.state?.page || 'home'
    window.history.replaceState({ ...(window.history.state || {}), page: initialPage }, '', window.location.href)
    const handlePopState = event => setPageState(event.state?.page || 'home')
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const [listings, setListings] = useStoredState('kisan-listings', demoListings)
  const [orders, setOrders] = useStoredState('kisan-orders', demoOrders)
  const [selectedProduct, setSelectedProduct] = React.useState(null)
  const [cart, setCart] = React.useState([])
  const [chatProduct, setChatProduct] = React.useState(null)
  const [editingListing, setEditingListing] = React.useState(null)

  const chooseRole = nextRole => {
    localStorage.setItem('kisan-role', nextRole)
    setRole(nextRole)
    setPageState('home')
    window.history.replaceState({ ...(window.history.state || {}), page: 'home' }, '', window.location.href)
  }

  const normalizePhone = phone => String(phone || '').replace(/\D/g, '').slice(-10)

  const saveProfile = data => {
    setProfiles(current => ({ ...current, [role]: data }))
    const phoneKey = normalizePhone(data?.phone)
    if (data?.status === 'verified' && phoneKey) {
      setVerifiedPhones(current => ({
        ...current,
        [phoneKey]: {
          verified: true,
          verifiedOn: data.verifiedOn || '10 Sep 2026'
        }
      }))
    }
  }

  const logout = () => {
    // End the session and remove entered profile details, but keep the
    // verified-phone registry so the same ID does not need verification again.
    setProfiles(current => {
      const next = { ...current }
      delete next[role]
      return next
    })
    localStorage.removeItem('kisan-role')
    setRole('')
    setCart([])
    setSelectedProduct(null)
    setChatProduct(null)
    setEditingListing(null)
    setPageState('home')
    window.history.replaceState({ ...(window.history.state || {}), page: 'home' }, '', window.location.href)
  }
  const openProduct = product => { setSelectedProduct(product); setPage('product') }
  const openChat = product => { setChatProduct(product); setPage('chat') }

  const addToCart = (product, qty = 100) => {
    setCart(current => {
      const found = current.find(x => x.id === product.id)
      if (found) return current.map(x => x.id === product.id ? { ...x, orderQty: Math.min(x.quantityKg, x.orderQty + Number(qty)) } : x)
      return [...current, { ...product, orderQty: Math.min(product.quantityKg, Number(qty)) }]
    })
    setPage('cart')
  }

  const placeOrder = (items, deliveryAddress) => {
    const stamp = Date.now().toString().slice(-7)
    const created = items.map((item, index) => ({
      ...item,
      orderId: `KD${stamp}${index + 1}`,
      buyer: profile?.name || 'Verified Buyer',
      buyerRole: role,
      deliveryAddress,
      deliveryCharge: null,
      status: 'Awaiting farmer review',
      placedOn: '10 Sep 2026'
    }))
    setOrders(current => [...created, ...current])
    setCart([])
    setPage('orders')
  }

  const updateOrder = (orderId, changes) => setOrders(current => current.map(order => order.orderId === orderId ? { ...order, ...changes } : order))
  const editListing = product => { setEditingListing(product); setPage('sell') }
  const deleteListing = productId => {
    setListings(current => current.filter(item => item.id !== productId))
    if (selectedProduct?.id === productId) setSelectedProduct(null)
  }

  if (!role) return <RoleGate onChoose={chooseRole} />
  if (!profile || profile.status !== 'verified') {
    return <>
      <LanguageToggle floating />
      <Registration role={role} profile={profile} verifiedPhones={verifiedPhones} onSave={saveProfile} onChangeRole={() => { localStorage.removeItem('kisan-role'); setRole('') }} />
    </>
  }

  const pages = {
    home: <Home role={role} listings={listings} setPage={setPage} openProduct={openProduct} />,
    marketplace: <Marketplace role={role} listings={listings} setPage={setPage} openProduct={openProduct} openChat={openChat} />,
    sell: <SellCrop listings={listings} setListings={setListings} setPage={setPage} editingListing={editingListing} setEditingListing={setEditingListing} />,
    listings: <MyListings listings={listings} setPage={setPage} openProduct={openProduct} editListing={editListing} deleteListing={deleteListing} />,
    product: <ProductDetails product={selectedProduct} role={role} setPage={setPage} addToCart={addToCart} openChat={openChat} />,
    cart: <Cart cart={cart} setCart={setCart} setPage={setPage} placeOrder={placeOrder} />,
    orders: <Orders role={role} orders={orders} setPage={setPage} updateOrder={updateOrder} />,
    chat: <Chat product={chatProduct || selectedProduct} role={role} setPage={setPage} />,
    demand: <DemandInsights setPage={setPage} listings={listings} />
  }

  return (
    <div className="min-h-screen bg-[#f6f8f4] text-[#17251c]">
      <Header page={page} setPage={setPage} role={role} setRole={chooseRole} cartCount={cart.length} profile={profile} resetRole={logout} />
      <main>{pages[page] || pages.home}</main>
      <footer className="mt-12 border-t border-black/5 bg-white px-5 py-7 text-xs text-black/40"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3"><span className="font-bold text-[#315c3b]">KisanDirect</span><span>Direct crop marketplace • Logistics support • AI demand & route insights</span></div></footer>
    </div>
  )
}
