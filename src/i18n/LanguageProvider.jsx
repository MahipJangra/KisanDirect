import React from 'react'
import { Languages } from 'lucide-react'

const LanguageContext = React.createContext(null)

// Centralized Hindi copy for all fixed UI text used across the KisanDirect MVP.
// User-entered names/messages are intentionally not auto-translated.
const hi = {
  // Global / navigation
  'Home':'होम','Marketplace':'बाज़ार','Shop':'खरीदें','Sell Crop':'फसल बेचें','My Listings':'मेरी फसलें','Orders':'ऑर्डर','My Orders':'मेरे ऑर्डर','My orders':'मेरे ऑर्डर','AI Demand':'AI मांग',
  'Farmer':'किसान','Buyer':'खरीदार','Farmer / FPO':'किसान / FPO','Farmer view':'किसान दृश्य','Buyer view':'खरीदार दृश्य','Logout':'लॉगआउट','Cart':'कार्ट','Back':'वापस','Cancel':'रद्द करें','Edit':'संपादित करें','Delete':'हटाएँ','Remove':'हटाएँ','Open':'खोलें','Live':'सक्रिय','Buy':'खरीदें','Search':'खोजें','All':'सभी',
  'KisanDirect':'KisanDirect','KisanDirect — Sell where the value is':'KisanDirect — जहाँ सही मूल्य मिले','Direct crop marketplace':'सीधा फसल बाज़ार','Direct crop marketplace • Logistics support • AI demand & route insights':'सीधा फसल बाज़ार • लॉजिस्टिक्स सहायता • AI मांग और मार्ग सुझाव','SIH 2026 MVP • Prototype data and simulated verification':'SIH 2026 MVP • प्रोटोटाइप डेटा और सिम्युलेटेड सत्यापन',
  'Farm to buyer, without the unnecessary layers.':'खेत से खरीदार तक, बिना अनावश्यक बिचौलियों के।',

  // Role gate / registration
  'Welcome to KisanDirect':'KisanDirect में आपका स्वागत है','How do you want to continue?':'आप कैसे आगे बढ़ना चाहते हैं?','Choose your role. Registration and verification comes next.':'अपनी भूमिका चुनें। इसके बाद पंजीकरण और सत्यापन होगा।',
  'Verified farmers list crops, buyers order directly, and both sides can negotiate the price when needed.':'सत्यापित किसान फसल सूचीबद्ध करते हैं, खरीदार सीधे ऑर्डर करते हैं और जरूरत होने पर दोनों पक्ष कीमत पर बातचीत कर सकते हैं।',
  'List crops, receive orders, manage prices and arrange delivery.':'फसल सूचीबद्ध करें, ऑर्डर प्राप्त करें, कीमत संभालें और डिलीवरी की व्यवस्था करें।','Search crops, compare verified sellers, negotiate and place orders.':'फसल खोजें, सत्यापित विक्रेताओं की तुलना करें, बातचीत करें और ऑर्डर दें।','Start selling':'बेचना शुरू करें','Start buying':'खरीदना शुरू करें',
  'Change role':'भूमिका बदलें','Choose another role':'दूसरी भूमिका चुनें','Farmer / FPO name':'किसान / FPO का नाम','Buyer / business name':'खरीदार / व्यवसाय का नाम','Phone number':'फोन नंबर','City / district':'शहर / जिला','ID type':'ID प्रकार','Government ID':'सरकारी पहचान पत्र','Upload ID document':'ID दस्तावेज़ अपलोड करें','Choose a document':'दस्तावेज़ चुनें','Aadhaar / Govt ID':'आधार / सरकारी ID','PAN / Business ID':'PAN / व्यवसाय ID','FPO Registration':'FPO पंजीकरण','Submit for verification':'सत्यापन के लिए भेजें','Verification in progress':'सत्यापन जारी है','ID already verified for this number':'इस नंबर के लिए ID पहले से सत्यापित है','Continue as verified user':'सत्यापित उपयोगकर्ता के रूप में जारी रखें','Demo: approve account':'डेमो: खाता स्वीकृत करें','Use verified demo account':'सत्यापित डेमो खाता उपयोग करें','Prototype only — the file is not stored.':'केवल प्रोटोटाइप — फ़ाइल संग्रहीत नहीं की जाती।','Previously verified':'पहले से सत्यापित','Recognized verified phone':'सत्यापित फोन नंबर पहचाना गया','Government ID uploaded':'सरकारी पहचान पत्र अपलोड किया गया','Demo note:':'डेमो नोट:','or for the demo':'या डेमो के लिए',
  'We verify both sides before they can buy or sell. Verification may take up to 7 days.':'खरीद या बिक्री की अनुमति देने से पहले हम दोनों पक्षों का सत्यापन करते हैं। सत्यापन में 7 दिन तक लग सकते हैं।','Your ID has been submitted. Verification may take up to 7 days. Buying or selling is unlocked after approval.':'आपका ID जमा हो गया है। सत्यापन में 7 दिन तक लग सकते हैं। स्वीकृति के बाद खरीद और बिक्री की सुविधा सक्रिय होगी।','Prototype shortcut only. Once approved, this phone number is remembered as verified.':'यह केवल प्रोटोटाइप शॉर्टकट है। एक बार स्वीकृत होने पर यह फोन नंबर सत्यापित के रूप में याद रखा जाएगा।',

  // Home / marketplace
  'Simple crop marketplace':'सरल फसल बाज़ार','Sell your crop directly to buyers.':'अपनी फसल सीधे खरीदारों को बेचें।','Upload your produce in a few steps, receive orders and chat only when you want to negotiate the price.':'कुछ आसान चरणों में अपनी उपज अपलोड करें, ऑर्डर प्राप्त करें और केवल कीमत पर बातचीत करनी हो तो चैट करें।',
  'Fresh crops. Bulk quantities. Direct from farmers.':'ताज़ी फसलें। थोक मात्रा। सीधे किसानों से।','Search wheat, rice, tomato...':'गेहूं, चावल, टमाटर खोजें...','Search wheat, rice, tomato, Karnal...':'गेहूं, चावल, टमाटर, करनाल खोजें...','Browse crops':'फसलें देखें','Popular crops today':'आज की लोकप्रिय फसलें','View all →':'सभी देखें →',
  'Find the crop':'फसल खोजें','Search and compare available produce.':'उपलब्ध उपज खोजें और तुलना करें।','Place your order':'अपना ऑर्डर दें','Buyer chooses quantity and confirms the order.':'खरीदार मात्रा चुनता है और ऑर्डर की पुष्टि करता है।','Receive an order':'ऑर्डर प्राप्त करें','Negotiate only if needed':'केवल जरूरत होने पर बातचीत करें','Use chat when either side wants to discuss the price.':'जब किसी भी पक्ष को कीमत पर चर्चा करनी हो, तब चैट का उपयोग करें।',
  'What do you want to buy?':'आप क्या खरीदना चाहते हैं?','Search by crop, seller or location.':'फसल, विक्रेता या स्थान से खोजें।','Search what you need, compare sellers and place an order. If the price needs discussion, chat directly with the farmer.':'अपनी जरूरत की फसल खोजें, विक्रेताओं की तुलना करें और ऑर्डर दें। अगर कीमत पर चर्चा करनी हो तो किसान से सीधे चैट करें।','Crop marketplace':'फसल बाज़ार','No crops found':'कोई फसल नहीं मिली','Try another crop or location.':'दूसरी फसल या स्थान खोजें।','listed price':'सूचीबद्ध कीमत','Available':'उपलब्ध','View listing':'लिस्टिंग देखें','Negotiate':'बातचीत करें',

  // Crops / grades / common fields
  'Crop':'फसल','Quality':'गुणवत्ता','Quantity':'मात्रा','Quantity (kg)':'मात्रा (किग्रा)','Quantity kg':'मात्रा किग्रा','Quantity to buy (kg)':'खरीद की मात्रा (किग्रा)','Available quantity':'उपलब्ध मात्रा','Available quantity (kg)':'उपलब्ध मात्रा (किग्रा)','Price per kg':'प्रति किग्रा कीमत','Price (₹/kg)':'कीमत (₹/किग्रा)','Price/kg':'कीमत/किग्रा','per kg':'प्रति किग्रा','Location':'स्थान','Delivery city':'डिलीवरी शहर','Harvest date':'कटाई की तारीख','Short description':'संक्षिप्त विवरण','Product photo':'फसल की फोटो','Crop preview':'फसल का पूर्वावलोकन','Photo ready':'फोटो तैयार','Add photo':'फोटो जोड़ें','Change photo':'फोटो बदलें','Please choose an image file.':'कृपया एक इमेज फ़ाइल चुनें।','Maximum 1 MB per image':'प्रति इमेज अधिकतम 1 MB','Image must be less than 1 MB.':'इमेज 1 MB से कम होनी चाहिए।',
  'Wheat':'गेहूं','Rice':'चावल','Basmati Rice':'बासमती चावल','Tomato':'टमाटर','Potato':'आलू','Onion':'प्याज','Mustard':'सरसों','Other':'अन्य','Grade A':'ग्रेड A','Grade B':'ग्रेड B','Fresh Lot':'ताज़ा खेप','Premium':'प्रीमियम','Organic':'जैविक','Standard':'मानक','Farm Grade':'फार्म ग्रेड',
  'Fresh crop, ready for bulk sale.':'ताज़ी फसल, थोक बिक्री के लिए तैयार।','Clean Grade A wheat from the latest harvest, packed and ready for bulk dispatch.':'नई कटाई का साफ ग्रेड A गेहूं, पैक किया हुआ और थोक भेजने के लिए तैयार।','Fresh red tomatoes harvested for wholesale supply. Suitable for retailers and food processors.':'थोक आपूर्ति के लिए ताज़े लाल टमाटर। खुदरा विक्रेताओं और खाद्य प्रसंस्करण इकाइयों के लिए उपयुक्त।','Bulk mustard seed lot from verified FPO members.':'सत्यापित FPO सदस्यों से सरसों के बीज की थोक खेप।','Premium basmati rice available in bulk for wholesalers and food businesses.':'थोक विक्रेताओं और खाद्य व्यवसायों के लिए प्रीमियम बासमती चावल उपलब्ध।','Fresh sorted potatoes in bulk quantity, ready for pickup.':'छांटे हुए ताज़े आलू थोक मात्रा में, उठान के लिए तैयार।','Fresh onion lot for restaurants, retailers and wholesalers.':'रेस्तरां, खुदरा विक्रेताओं और थोक विक्रेताओं के लिए ताज़े प्याज की खेप।',

  // Sell / listings
  'List your crop':'अपनी फसल सूचीबद्ध करें','Add a crop':'फसल जोड़ें','Add crop':'फसल जोड़ें','+ Add crop':'+ फसल जोड़ें','Add a crop for sale':'बिक्री के लिए फसल जोड़ें','Add another crop':'एक और फसल जोड़ें','Add crop, price, quantity and location.':'फसल, कीमत, मात्रा और स्थान जोड़ें।','Keep it simple. Buyers only need the important details.':'इसे सरल रखें। खरीदारों को केवल जरूरी जानकारी चाहिए।','Publish':'प्रकाशित करें','Publish crop':'फसल प्रकाशित करें','Save changes':'बदलाव सहेजें','Edit crop listing':'फसल लिस्टिंग संपादित करें','Update the details buyers will see in the marketplace.':'बाज़ार में खरीदारों को दिखने वाली जानकारी अपडेट करें।','Your crop is live':'आपकी फसल लाइव है','Listing updated':'लिस्टिंग अपडेट हो गई','Buyers can now find it in the marketplace and place an order.':'खरीदार अब इसे बाज़ार में ढूंढकर ऑर्डर दे सकते हैं।','Your changes are now visible to buyers in the marketplace.':'आपके बदलाव अब बाज़ार में खरीदारों को दिखाई दे रहे हैं।','See what buyers can find':'देखें खरीदार क्या खोज सकते हैं','View my listings':'मेरी लिस्टिंग देखें','Farmer dashboard':'किसान डैशबोर्ड','Manage the crops you have uploaded for buyers.':'खरीदारों के लिए अपलोड की गई फसलों को प्रबंधित करें।','Your crops in the marketplace':'बाज़ार में आपकी फसलें','No crops listed yet':'अभी कोई फसल सूचीबद्ध नहीं है','Add your first crop':'अपनी पहली फसल जोड़ें','Add your first crop and it will appear here as well as in the marketplace.':'अपनी पहली फसल जोड़ें; यह यहाँ और बाज़ार दोनों में दिखाई देगी।','Delete this listing?':'यह लिस्टिंग हटाएँ?','Back to marketplace':'बाज़ार पर वापस','This is how buyers see your crop listing.':'खरीदार आपकी फसल लिस्टिंग को ऐसे देखते हैं।',

  // Product / cart / chat
  'Add to cart':'कार्ट में जोड़ें','Negotiate price':'कीमत पर बातचीत करें','Back to product':'उत्पाद पर वापस','Price negotiation':'कीमत पर बातचीत','Chat is only for price negotiation':'चैट केवल कीमत पर बातचीत के लिए है','Offer ₹/kg':'ऑफर ₹/किग्रा','Send offer':'ऑफर भेजें','Write a message about the price...':'कीमत के बारे में संदेश लिखें...','Choose a crop from the marketplace':'बाज़ार से कोई फसल चुनें','Choose quantity and confirm from the product page.':'उत्पाद पेज से मात्रा चुनें और पुष्टि करें।','Estimated total':'अनुमानित कुल','Continue shopping':'खरीदारी जारी रखें','Your cart is empty':'आपका कार्ट खाली है','Browse crops and add the quantity you need.':'फसलें देखें और अपनी जरूरत की मात्रा जोड़ें।','Review your order':'अपने ऑर्डर की समीक्षा करें','Crop payment is not charged yet. The farmer will review the order and add the delivery charge.':'अभी फसल का भुगतान नहीं लिया जाएगा। किसान ऑर्डर की समीक्षा करके डिलीवरी शुल्क जोड़ेगा।','Delivery location':'डिलीवरी स्थान','City / delivery address':'शहर / डिलीवरी पता','The seller will arrange transport and quote the delivery charge after reviewing your order.':'विक्रेता परिवहन की व्यवस्था करेगा और ऑर्डर की समीक्षा के बाद डिलीवरी शुल्क बताएगा।','Order summary':'ऑर्डर सारांश','Items':'आइटम','Crop total':'फसल का कुल','Delivery':'डिलीवरी','To be quoted':'बाद में बताया जाएगा','Current total':'वर्तमान कुल','Place order request':'ऑर्डर अनुरोध भेजें','Buyer confirms the final amount only after the farmer adds delivery charges.':'किसान द्वारा डिलीवरी शुल्क जोड़ने के बाद ही खरीदार अंतिम राशि की पुष्टि करता है।','Prototype checkout — no real payment is processed.':'प्रोटोटाइप चेकआउट — कोई वास्तविक भुगतान नहीं किया जाता।',

  // Orders / logistics
  'No orders yet':'अभी कोई ऑर्डर नहीं है','Orders received':'प्राप्त ऑर्डर','Orders placed on your crop listings will appear here.':'आपकी फसल लिस्टिंग पर दिए गए ऑर्डर यहाँ दिखाई देंगे।','Your placed orders will appear here.':'आपके दिए गए ऑर्डर यहाँ दिखाई देंगे।','Track farmer confirmation, delivery charges and order status.':'किसान की पुष्टि, डिलीवरी शुल्क और ऑर्डर की स्थिति देखें।','Review orders, arrange transport and send the delivery charge to the buyer.':'ऑर्डर की समीक्षा करें, परिवहन की व्यवस्था करें और खरीदार को डिलीवरी शुल्क भेजें।','Awaiting farmer review':'किसान की समीक्षा की प्रतीक्षा','Accept & add delivery':'स्वीकार करें और डिलीवरी जोड़ें','Arrange delivery':'डिलीवरी की व्यवस्था करें','Delivery charge (₹)':'डिलीवरी शुल्क (₹)','After checking transport availability, enter the delivery amount. The buyer must confirm the final total.':'परिवहन उपलब्धता जांचने के बाद डिलीवरी राशि दर्ज करें। अंतिम कुल की पुष्टि खरीदार करेगा।','Send to buyer':'खरीदार को भेजें','Waiting for buyer confirmation':'खरीदार की पुष्टि की प्रतीक्षा','Reject':'अस्वीकार करें','Rejected':'अस्वीकृत','Rejected by farmer':'किसान द्वारा अस्वीकृत','Confirm':'पुष्टि करें','Confirmed':'पुष्टि हो गई','Cancel order':'ऑर्डर रद्द करें','Cancelled':'रद्द','Cancelled by buyer':'खरीदार द्वारा रद्द','Mark dispatched':'भेजा गया चिह्नित करें','Dispatched':'भेज दिया गया','Mark received':'प्राप्त चिह्नित करें','Delivered':'डिलीवर हो गया','Delivery charge added':'डिलीवरी शुल्क जोड़ा गया','Crop value':'फसल मूल्य',
  'AI route suggestion':'AI मार्ग सुझाव','Optimized route':'अनुकूलित मार्ग','Optimized movement':'अनुकूलित परिवहन','Origin':'प्रारंभ स्थान','Vehicle':'वाहन','A prototype route using a consolidated pickup plan.':'संयुक्त पिकअप योजना पर आधारित एक प्रोटोटाइप मार्ग।','Prototype route estimate. Production version would use live map/traffic data.':'यह प्रोटोटाइप मार्ग अनुमान है। उत्पादन संस्करण में लाइव मानचित्र और ट्रैफिक डेटा का उपयोग होगा।','Move the lot efficiently':'खेप को कुशलता से पहुँचाएँ','Collection → buyer route':'संग्रह → खरीदार मार्ग','Estimated saving':'अनुमानित बचत','Est. transport saving':'अनुमानित परिवहन बचत','Consolidated load':'संयुक्त लोड','Consolidated lot':'संयुक्त खेप','9-ton truck':'9-टन ट्रक','Traditional chain':'पारंपरिक श्रृंखला','estimated transport cost':'अनुमानित परिवहन लागत','estimated net realization':'अनुमानित शुद्ध प्राप्ति','vs estimated traditional chain':'अनुमानित पारंपरिक श्रृंखला की तुलना में',

  // AI / dashboard / old prototype pages
  'Farmer workspace':'किसान कार्यक्षेत्र','Farmer realization':'किसान प्राप्ति','Logistics + final realization':'लॉजिस्टिक्स + अंतिम प्राप्ति','Start shopping':'खरीदारी शुरू करें','+₹16,250 estimated additional realization':'+₹16,250 अनुमानित अतिरिक्त प्राप्ति','e.g. 9000':'जैसे 9000','Good morning, Ramesh.':'सुप्रभात, रमेश।','Let\'s find the best route for your next harvest.':'आइए आपकी अगली फसल के लिए सबसे अच्छा मार्ग खोजें।','Analyze markets':'बाज़ारों का विश्लेषण करें','Current crop':'वर्तमान फसल','Best observed price':'देखी गई सर्वोत्तम कीमत','Demand signal':'मांग संकेत','Potential gain':'संभावित लाभ','Price + demand':'कीमत + मांग','Current market signal and expected demand.':'वर्तमान बाज़ार संकेत और अपेक्षित मांग।','Transport':'परिवहन','Distance and estimated movement cost.':'दूरी और अनुमानित परिवहन लागत।','Realization':'प्राप्ति','Net value after transport and wastage.':'परिवहन और बर्बादी के बाद शुद्ध मूल्य।',
  'Demand forecast':'मांग पूर्वानुमान','Demand trend':'मांग रुझान','Indicative range':'संकेतित मूल्य सीमा','Prototype AI insight':'प्रोटोटाइप AI जानकारी','Buyer demand':'खरीदार मांग','A simple decision-support view that estimates near-term crop demand and indicative price ranges. In production this would use mandi prices, seasonality, order history and regional demand data.':'एक सरल निर्णय-सहायता दृश्य जो निकट अवधि की फसल मांग और संभावित मूल्य सीमा का अनुमान लगाता है। उत्पादन संस्करण में मंडी कीमतें, मौसमी पैटर्न, ऑर्डर इतिहास और क्षेत्रीय मांग डेटा उपयोग होंगे।','this demonstrates the AI demand-forecasting layer without complicating the shopping experience. The production model would be trained and validated using live historical datasets.':'यह खरीदारी अनुभव को जटिल किए बिना AI मांग-पूर्वानुमान परत दिखाता है। उत्पादन मॉडल को वास्तविक ऐतिहासिक डेटा पर प्रशिक्षित और सत्यापित किया जाएगा।',
  'Market intelligence':'बाज़ार जानकारी','Where should the crop go?':'फसल कहाँ भेजनी चाहिए?','Tomato prices and demand signals across nearby markets.':'पास के बाज़ारों में टमाटर की कीमतें और मांग संकेत।','Run recommendation':'सिफारिश चलाएँ','6-day price movement':'6-दिन की कीमत चाल','Prototype data':'प्रोटोटाइप डेटा','Market':'बाज़ार','Demand':'मांग','Distance':'दूरी','Wastage':'बर्बादी','Buyers':'खरीदार','Trend':'रुझान','Best market recommendation':'सर्वश्रेष्ठ बाज़ार सिफारिश','Decision engine':'निर्णय इंजन','Analyze my crop':'मेरी फसल का विश्लेषण करें','Scenario inputs':'परिदृश्य इनपुट','RECOMMENDED':'अनुशंसित','Price':'कीमत','Score':'स्कोर','The MVP scores markets using price, demand, transport, wastage and buyer availability. It does not simply select the highest price.':'MVP कीमत, मांग, परिवहन, बर्बादी और खरीदार उपलब्धता के आधार पर बाज़ारों को स्कोर करता है। यह केवल सबसे ऊँची कीमत नहीं चुनता।','Prototype calculation: gross value − transport − expected wastage − handling. Weights: price 40%, demand 25%, transport 20%, wastage 10%, buyer availability 5%.':'प्रोटोटाइप गणना: सकल मूल्य − परिवहन − अपेक्षित बर्बादी − हैंडलिंग। भार: कीमत 40%, मांग 25%, परिवहन 20%, बर्बादी 10%, खरीदार उपलब्धता 5%।',
  'Supply aggregation':'आपूर्ति एकत्रीकरण','Build one marketable lot':'एक बिक्री योग्य संयुक्त खेप बनाएँ','Combine nearby farmers to meet the buyer\'s bulk requirement and reduce transport cost per kg.':'खरीदार की थोक आवश्यकता पूरी करने और प्रति किग्रा परिवहन लागत घटाने के लिए पास के किसानों की उपज जोड़ें।','Buyer target':'खरीदार लक्ष्य','Shortfall':'कमी','Optimize transport':'परिवहन अनुकूलित करें',
  'Direct buyer network':'सीधा खरीदार नेटवर्क','Buyer matching':'खरीदार मिलान','Potential buyers for your selected tomato lot.':'आपकी चुनी हुई टमाटर खेप के संभावित खरीदार।','Plan transport':'परिवहन योजना','Search buyer':'खरीदार खोजें','Required':'आवश्यक','Offer':'ऑफर','Continue to buyer matching':'खरीदार मिलान पर जाएँ',
  'Bulk requirements':'थोक आवश्यकताएँ','See what buyers need, or post a requirement in seconds.':'देखें खरीदारों को क्या चाहिए, या कुछ सेकंड में आवश्यकता पोस्ट करें।','Post requirement':'आवश्यकता पोस्ट करें','Target price':'लक्ष्य कीमत','Target ₹/kg':'लक्ष्य ₹/किग्रा','View matching sellers':'मिलते-जुलते विक्रेता देखें',
  'How it works':'यह कैसे काम करता है','What KisanDirect checks':'KisanDirect क्या जाँचता है','For SIH:':'SIH के लिए:','Demo scenario':'डेमो परिदृश्य',

  // Demand levels / locations / misc fixed mock values
  'High':'उच्च','Medium':'मध्यम','Low':'कम','Delhi':'दिल्ली','Delhi NCR':'दिल्ली NCR','Hisar, Haryana':'हिसार, हरियाणा','Karnal, Haryana':'करनाल, हरियाणा','Rohtak, Haryana':'रोहतक, हरियाणा','Kaithal, Haryana':'कैथल, हरियाणा','Kurukshetra, Haryana':'कुरुक्षेत्र, हरियाणा','Sonipat, Haryana':'सोनीपत, हरियाणा','Panipat':'पानीपत','Rohtak':'रोहतक','Karnal':'करनाल','Jaipur':'जयपुर','Azadpur':'आजादपुर','Jaipur • prototype data':'जयपुर • प्रोटोटाइप डेटा','Azadpur — buyer market':'आजादपुर — खरीदार बाज़ार','Gharaunda — farmer':'घरौंडा — किसान','Karnal — farmer cluster':'करनाल — किसान समूह','Nilokheri — farmer':'नीलोखेड़ी — किसान','Your tomato lot':'आपकी टमाटर खेप',
  '10 Sep 2026':'10 सितम्बर 2026','15 Sep 2026':'15 सितम्बर 2026','₹/kg':'₹/किग्रा','kg':'किग्रा','kg × ₹':'किग्रा × ₹','5,000 kg':'5,000 किग्रा','87/100 weighted signal':'87/100 भारित संकेत',
  'Your Business':'आपका व्यवसाय','Demo Buyer':'डेमो खरीदार','Demo Farmer':'डेमो किसान','Verified Buyer':'सत्यापित खरीदार',

  // Longer fixed notes
  'route, price and realization values are simulated. Production version can connect government mandi data, weather, live maps, buyer verification and a trained demand model.':'मार्ग, कीमत और प्राप्ति के मान सिम्युलेटेड हैं। उत्पादन संस्करण सरकारी मंडी डेटा, मौसम, लाइव मानचित्र, खरीदार सत्यापन और प्रशिक्षित मांग मॉडल से जुड़ सकता है।'
}

function translateText(text) {
  if (text === null || text === undefined) return text
  const raw = String(text)
  const lead = raw.match(/^\s*/)?.[0] || ''
  const trail = raw.match(/\s*$/)?.[0] || ''
  const core = raw.trim()
  if (!core) return raw
  if (hi[core]) return lead + hi[core] + trail

  const replacements = [
    [/^Verified farmer account$/i,'सत्यापित किसान खाता'],
    [/^Verified buyer account$/i,'सत्यापित खरीदार खाता'],
    [/^Cart \((\d+)\)$/,'कार्ट ($1)'],
    [/^Available (.+)$/,'उपलब्ध $1'],
    [/^Needs (.+)$/,'आवश्यकता: $1'],
    [/^Required by (.+)$/,'आवश्यक तारीख: $1'],
    [/^Order #(.+)$/,'ऑर्डर #$1'],
    [/^(\d+) farmers selected$/,'$1 किसान चुने गए'],
    [/^(\d+(?:,\d+)*) kg$/,'$1 किग्रा'],
    [/^₹([\d,.]+)\/kg$/,'₹$1/किग्रा'],
    [/^(.+) km$/,'$1 किमी'],
    [/^(.+)% match$/,'$1% मिलान'],
    [/^Offer: ₹(.+)\/kg for (.+) kg$/,'ऑफर: ₹$1/किग्रा, $2 किग्रा के लिए'],
    [/^Hello! The listed price for (.+) is ₹(.+)\/kg\. You can send an offer if you want to negotiate\.$/,'नमस्ते! $1 की सूचीबद्ध कीमत ₹$2/किग्रा है। अगर आप कीमत पर बातचीत करना चाहते हैं तो ऑफर भेज सकते हैं।'],
    [/^(.+) will be removed from My Listings and the marketplace\.$/,'$1 को मेरी लिस्टिंग और बाज़ार से हटा दिया जाएगा।'],
    [/^Fresh crop, ready for bulk sale\.$/,'ताज़ी फसल, थोक बिक्री के लिए तैयार।'],
    [/^Maximum (.+) per image$/,'प्रति इमेज अधिकतम $1'],
    [/^Image must be less than (.+)\.$/,'इमेज $1 से कम होनी चाहिए।']
  ]
  for (const [re, value] of replacements) {
    if (re.test(core)) return lead + core.replace(re, value) + trail
  }
  return raw
}

function translateElementAttributes(root, language) {
  root.querySelectorAll?.('input[placeholder], textarea[placeholder]').forEach(el => {
    if (!el.dataset.originalPlaceholder) el.dataset.originalPlaceholder = el.getAttribute('placeholder') || ''
    el.setAttribute('placeholder', language === 'hi' ? translateText(el.dataset.originalPlaceholder) : el.dataset.originalPlaceholder)
  })
  root.querySelectorAll?.('[title]').forEach(el => {
    if (!el.dataset.originalTitle) el.dataset.originalTitle = el.getAttribute('title') || ''
    el.setAttribute('title', language === 'hi' ? translateText(el.dataset.originalTitle) : el.dataset.originalTitle)
  })
  root.querySelectorAll?.('[aria-label]').forEach(el => {
    if (!el.dataset.originalAriaLabel) el.dataset.originalAriaLabel = el.getAttribute('aria-label') || ''
    el.setAttribute('aria-label', language === 'hi' ? translateText(el.dataset.originalAriaLabel) : el.dataset.originalAriaLabel)
  })
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = React.useState(() => localStorage.getItem('kisan-language') || 'en')
  const originals = React.useRef(new WeakMap())

  const setLanguage = React.useCallback(lang => {
    setLanguageState(lang)
    localStorage.setItem('kisan-language', lang)
  }, [])

  React.useEffect(() => {
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en'
    document.title = language === 'hi' ? translateText('KisanDirect — Sell where the value is') : 'KisanDirect — Sell where the value is'
    const originalMap = originals.current

    const process = root => {
      if (!root) return
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
      const nodes = []
      while (walker.nextNode()) nodes.push(walker.currentNode)
      nodes.forEach(node => {
        const parent = node.parentElement
        if (!parent || ['SCRIPT','STYLE'].includes(parent.tagName)) return
        if (!originalMap.has(node)) originalMap.set(node, node.nodeValue)
        const original = originalMap.get(node)
        const next = language === 'hi' ? translateText(original) : original
        if (node.nodeValue !== next) node.nodeValue = next
      })
      translateElementAttributes(root, language)
    }

    process(document.body)

    const observer = new MutationObserver(mutations => {
      mutations.forEach(m => m.addedNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const parent = node.parentElement
          if (parent && !['SCRIPT','STYLE'].includes(parent.tagName)) {
            if (!originalMap.has(node)) originalMap.set(node, node.nodeValue)
            const original = originalMap.get(node)
            const next = language === 'hi' ? translateText(original) : original
            if (node.nodeValue !== next) node.nodeValue = next
          }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          process(node)
        }
      }))
    })
    observer.observe(document.body, { childList:true, subtree:true })

    // Alerts/confirm dialogs are outside the DOM, so translate those too.
    const nativeAlert = window.alert
    const nativeConfirm = window.confirm
    window.alert = message => nativeAlert(language === 'hi' ? translateText(message) : message)
    window.confirm = message => nativeConfirm(language === 'hi' ? translateText(message) : message)

    return () => {
      observer.disconnect()
      window.alert = nativeAlert
      window.confirm = nativeConfirm
    }
  }, [language])

  const t = React.useCallback(text => language === 'hi' ? translateText(text) : text, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
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
