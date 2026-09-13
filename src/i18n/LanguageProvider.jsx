import React from 'react'
import { Languages } from 'lucide-react'

const LanguageContext = React.createContext(null)

const hi = {
  'Home':'होम','Marketplace':'बाज़ार','Shop':'खरीदें','Sell Crop':'फसल बेचें','My Listings':'मेरी फसलें','Orders':'ऑर्डर','My Orders':'मेरे ऑर्डर','AI Demand':'AI मांग',
  'Farmer':'किसान','Buyer':'खरीदार','Farmer / FPO':'किसान / FPO','Farmer view':'किसान दृश्य','Buyer view':'खरीदार दृश्य','Logout':'लॉगआउट','Cart':'कार्ट',
  'Direct crop marketplace':'सीधा फसल बाज़ार','Welcome to KisanDirect':'KisanDirect में आपका स्वागत है','How do you want to continue?':'आप कैसे आगे बढ़ना चाहते हैं?','Choose your role. Registration and verification comes next.':'अपनी भूमिका चुनें। इसके बाद पंजीकरण और सत्यापन होगा।',
  'Farm to buyer, without the unnecessary layers.':'खेत से खरीदार तक, बिना अनावश्यक बिचौलियों के।','Verified farmers list crops, buyers order directly, and both sides can negotiate the price when needed.':'सत्यापित किसान फसल सूचीबद्ध करते हैं, खरीदार सीधे ऑर्डर करते हैं और जरूरत पर दोनों पक्ष कीमत पर बातचीत कर सकते हैं।',
  'List crops, receive orders, manage prices and arrange delivery.':'फसल सूचीबद्ध करें, ऑर्डर प्राप्त करें, कीमत संभालें और डिलीवरी की व्यवस्था करें।','Search crops, compare verified sellers, negotiate and place orders.':'फसल खोजें, सत्यापित विक्रेताओं की तुलना करें, बातचीत करें और ऑर्डर दें।','Start selling':'बेचना शुरू करें','Start buying':'खरीदना शुरू करें',
  'SIH 2026 MVP • Prototype data and simulated verification':'SIH 2026 MVP • प्रोटोटाइप डेटा और सिम्युलेटेड सत्यापन',
  'Direct crop marketplace • Logistics support • AI demand & route insights':'सीधा फसल बाज़ार • लॉजिस्टिक्स सहायता • AI मांग और मार्ग सुझाव',
  'Search':'खोजें','Search by crop, seller or location.':'फसल, विक्रेता या स्थान से खोजें।','Browse crops':'फसलें देखें','Browse crops and add the quantity you need.':'फसलें देखें और अपनी जरूरत की मात्रा जोड़ें।','No crops found':'कोई फसल नहीं मिली','Try another crop or location.':'दूसरी फसल या स्थान खोजें।',
  'Crop':'फसल','Quality':'गुणवत्ता','Quantity (kg)':'मात्रा (किग्रा)','Quantity kg':'मात्रा किग्रा','Price per kg':'प्रति किग्रा कीमत','Location':'स्थान','Available':'उपलब्ध','Available quantity':'उपलब्ध मात्रा','per kg':'प्रति किग्रा','Grade A':'ग्रेड A','Grade B':'ग्रेड B','Premium':'प्रीमियम','Organic':'जैविक','Standard':'मानक',
  'Add a crop':'फसल जोड़ें','Add crop':'फसल जोड़ें','Add your first crop':'अपनी पहली फसल जोड़ें','Product photo':'फसल की फोटो','Photo ready':'फोटो तैयार','Short description':'संक्षिप्त विवरण','Publish':'प्रकाशित करें','Back':'वापस','Back to marketplace':'बाज़ार पर वापस','Back to product':'उत्पाद पर वापस','View listing':'लिस्टिंग देखें','View my listings':'मेरी लिस्टिंग देखें','Manage the crops you have uploaded for buyers.':'खरीदारों के लिए अपलोड की गई फसलों को प्रबंधित करें।','No crops listed yet':'अभी कोई फसल सूचीबद्ध नहीं है','Delete this listing?':'यह लिस्टिंग हटाएँ?','Cancel':'रद्द करें',
  'Add to cart':'कार्ट में जोड़ें','Negotiate':'बातचीत करें','Negotiate price':'कीमत पर बातचीत','Price negotiation':'कीमत पर बातचीत','Chat is only for price negotiation':'चैट केवल कीमत पर बातचीत के लिए है','Offer ₹/kg':'ऑफर ₹/किग्रा','Send offer':'ऑफर भेजें','Continue shopping':'खरीदारी जारी रखें','Your cart is empty':'आपका कार्ट खाली है','Items':'आइटम','Crop total':'फसल कुल','Delivery':'डिलीवरी','Delivery location':'डिलीवरी स्थान','To be quoted':'बाद में बताया जाएगा','Estimated total':'अनुमानित कुल','Review your order':'अपने ऑर्डर की समीक्षा करें','Place order request':'ऑर्डर अनुरोध भेजें',
  'Crop payment is not charged yet. The farmer will review the order and add the delivery charge.':'अभी फसल का भुगतान नहीं लिया जाएगा। किसान ऑर्डर की समीक्षा करके डिलीवरी शुल्क जोड़ेगा।','The seller will arrange transport and quote the delivery charge after reviewing your order.':'विक्रेता परिवहन की व्यवस्था करेगा और ऑर्डर की समीक्षा के बाद डिलीवरी शुल्क बताएगा।','Prototype checkout — no real payment is processed.':'प्रोटोटाइप चेकआउट — कोई वास्तविक भुगतान नहीं किया जाता।',
  'No orders yet':'अभी कोई ऑर्डर नहीं है','Awaiting farmer review':'किसान की समीक्षा की प्रतीक्षा','Accept & add delivery':'स्वीकार करें और डिलीवरी जोड़ें','Arrange delivery':'डिलीवरी की व्यवस्था करें','Delivery charge (₹)':'डिलीवरी शुल्क (₹)','Send to buyer':'खरीदार को भेजें','Waiting for buyer confirmation':'खरीदार की पुष्टि की प्रतीक्षा','Reject':'अस्वीकार करें','Mark dispatched':'भेजा गया चिह्नित करें','Mark received':'प्राप्त चिह्नित करें','AI route suggestion':'AI मार्ग सुझाव','Optimized route':'अनुकूलित मार्ग','Origin':'प्रारंभ स्थान','Vehicle':'वाहन','Current total':'वर्तमान कुल','Crop value':'फसल मूल्य',
  'Demand forecast':'मांग पूर्वानुमान','Demand trend':'मांग रुझान','Indicative range':'संकेतित मूल्य सीमा','Prototype AI insight':'प्रोटोटाइप AI जानकारी','AI Demand':'AI मांग','Buyer demand':'खरीदार मांग','Buyer matching':'खरीदार मिलान','Bulk requirements':'थोक आवश्यकताएँ','Post requirement':'आवश्यकता पोस्ट करें','Direct buyer network':'सीधा खरीदार नेटवर्क',
  'Change role':'भूमिका बदलें','Choose another role':'दूसरी भूमिका चुनें','ID type':'ID प्रकार','Upload ID document':'ID दस्तावेज़ अपलोड करें','Aadhaar / Govt ID':'आधार / सरकारी ID','PAN / Business ID':'PAN / व्यवसाय ID','FPO Registration':'FPO पंजीकरण','Submit for verification':'सत्यापन के लिए भेजें','Verification in progress':'सत्यापन जारी है','ID already verified for this number':'इस नंबर के लिए ID पहले से सत्यापित है','Continue as verified user':'सत्यापित उपयोगकर्ता के रूप में जारी रखें','Demo: approve account':'डेमो: खाता स्वीकृत करें','Use verified demo account':'सत्यापित डेमो खाता उपयोग करें','Prototype only — the file is not stored.':'केवल प्रोटोटाइप — फ़ाइल संग्रहीत नहीं की जाती।',
  'What KisanDirect checks':'KisanDirect क्या जाँचता है','How it works':'यह कैसे काम करता है','Simple crop marketplace':'सरल फसल बाज़ार','Farmer workspace':'किसान कार्यक्षेत्र','Farmer dashboard':'किसान डैशबोर्ड','Market intelligence':'बाज़ार जानकारी','Demand forecast':'मांग पूर्वानुमान','Logistics + final realization':'लॉजिस्टिक्स + अंतिम प्राप्ति','Buyer target':'खरीदार लक्ष्य','Supply aggregation':'आपूर्ति एकत्रीकरण','Move the lot efficiently':'खेप को कुशलता से पहुँचाएँ','Collection → buyer route':'संग्रह → खरीदार मार्ग','Estimated saving':'अनुमानित बचत','Est. transport saving':'अनुमानित परिवहन बचत','Consolidated load':'संयुक्त लोड','Consolidated lot':'संयुक्त खेप','Traditional chain':'पारंपरिक श्रृंखला','Decision engine':'निर्णय इंजन','RECOMMENDED':'अनुशंसित','Live':'लाइव','Open':'खुला','Buy':'खरीदें'
}

function translateText(text) {
  if (!text) return text
  const lead = text.match(/^\s*/)?.[0] || ''
  const trail = text.match(/\s*$/)?.[0] || ''
  const core = text.trim()
  if (!core) return text
  if (hi[core]) return lead + hi[core] + trail
  let out = core
  const replacements = [
    [/^Verified farmer account$/i,'सत्यापित किसान खाता'],[/^Verified buyer account$/i,'सत्यापित खरीदार खाता'],
    [/^Cart \((\d+)\)$/,'कार्ट ($1)'],[/^Available (.+)$/,'उपलब्ध $1'],[/^Needs (.+)$/,'आवश्यकता: $1'],
    [/^Required by (.+)$/,'आवश्यक तारीख: $1'],[/^Order #(.+)$/,'ऑर्डर #$1']
  ]
  for (const [re, value] of replacements) if (re.test(out)) return lead + out.replace(re,value) + trail
  return text
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = React.useState(() => localStorage.getItem('kisan-language') || 'en')
  const originals = React.useRef(new WeakMap())

  const setLanguage = React.useCallback(lang => {
    setLanguageState(lang)
    localStorage.setItem('kisan-language', lang)
  }, [])

  React.useEffect(() => {
    const originalMap = originals.current
    const process = root => {
      if (!root) return
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
      const nodes = []
      while (walker.nextNode()) nodes.push(walker.currentNode)
      nodes.forEach(node => {
        const parent = node.parentElement
        if (!parent || ['SCRIPT','STYLE','TEXTAREA','OPTION'].includes(parent.tagName)) return
        if (!originalMap.has(node)) originalMap.set(node, node.nodeValue)
        const original = originalMap.get(node)
        const next = language === 'hi' ? translateText(original) : original
        if (node.nodeValue !== next) node.nodeValue = next
      })
      root.querySelectorAll?.('input[placeholder]').forEach(el => {
        if (!el.dataset.originalPlaceholder) el.dataset.originalPlaceholder = el.getAttribute('placeholder') || ''
        el.setAttribute('placeholder', language === 'hi' ? translateText(el.dataset.originalPlaceholder) : el.dataset.originalPlaceholder)
      })
    }
    process(document.body)
    const observer = new MutationObserver(mutations => {
      mutations.forEach(m => m.addedNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const parent = node.parentElement
          if (parent && !['SCRIPT','STYLE','TEXTAREA','OPTION'].includes(parent.tagName)) {
            if (!originalMap.has(node)) originalMap.set(node, node.nodeValue)
            const original = originalMap.get(node)
            const next = language === 'hi' ? translateText(original) : original
            if (node.nodeValue !== next) node.nodeValue = next
          }
        } else if (node.nodeType === Node.ELEMENT_NODE) process(node)
      }))
    })
    observer.observe(document.body, { childList:true, subtree:true })
    return () => observer.disconnect()
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = React.useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider')
  return value
}

export function LanguageToggle({ floating=false }) {
  const { language, setLanguage } = useLanguage()
  return <div className={floating ? 'fixed right-3 top-3 z-[100]' : ''}>
    <label className="flex items-center gap-1.5 rounded-xl border border-black/10 bg-white px-2 py-1.5 shadow-sm">
      <Languages size={16} className="text-[#2f6f3e]"/>
      <select aria-label="Language" value={language} onChange={e=>setLanguage(e.target.value)} className="bg-transparent text-xs font-bold outline-none sm:text-sm">
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
      </select>
    </label>
  </div>
}
