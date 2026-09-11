import wheatImg from '../assets/crops/wheat.jpg'
import tomatoImg from '../assets/crops/tomato.jpg'
import mustardImg from '../assets/crops/mustard.jpg'
import riceImg from '../assets/crops/rice.jpg'
import potatoImg from '../assets/crops/potato.jpg'
import onionImg from '../assets/crops/onion.jpg'



export const cropListings = [
  {
    id: 'c1',
    crop: 'Wheat',
    grade: 'Grade A',
    price: 27,
    quantity: '12,000 kg',
    quantityKg: 12000,
    location: 'Hisar, Haryana',
    seller: 'Shiv Agro Farm',
    verified: true,
    emoji: '🌾',
    image: wheatImg,
    description: 'Clean Grade A wheat from the latest harvest, packed and ready for bulk dispatch.'
  },

  {
    id: 'c2',
    crop: 'Tomato',
    grade: 'Fresh Lot',
    price: 31,
    quantity: '2,500 kg',
    quantityKg: 2500,
    location: 'Karnal, Haryana',
    seller: 'Ramesh Kumar',
    verified: true,
    emoji: '🍅',
    image: tomatoImg,
    description: 'Fresh red tomatoes harvested for wholesale supply. Suitable for retailers and food processors.'
  },

  {
    id: 'c3',
    crop: 'Mustard',
    grade: 'Standard',
    price: 61,
    quantity: '8,000 kg',
    quantityKg: 8000,
    location: 'Rohtak, Haryana',
    seller: 'Dharti FPO',
    verified: true,
    emoji: '🌼',
    image: mustardImg,
    description: 'Bulk mustard seed lot from verified FPO members.'
  },

  {
    id: 'c4',
    crop: 'Basmati Rice',
    grade: 'Premium',
    price: 72,
    quantity: '15,000 kg',
    quantityKg: 15000,
    location: 'Kaithal, Haryana',
    seller: 'Green Field FPO',
    verified: true,
    emoji: '🍚',
    image: riceImg,
    description: 'Premium basmati rice available in bulk for wholesalers and food businesses.'
  },

  {
    id: 'c5',
    crop: 'Potato',
    grade: 'Grade A',
    price: 19,
    quantity: '6,500 kg',
    quantityKg: 6500,
    location: 'Kurukshetra, Haryana',
    seller: 'Saini Farms',
    verified: true,
    emoji: '🥔',
    image: potatoImg,
    description: 'Fresh sorted potatoes in bulk quantity, ready for pickup.'
  },

  {
    id: 'c6',
    crop: 'Onion',
    grade: 'Fresh Lot',
    price: 24,
    quantity: '5,200 kg',
    quantityKg: 5200,
    location: 'Sonipat, Haryana',
    seller: 'Kisan Growers Group',
    verified: true,
    emoji: '🧅',
    image: onionImg,
    description: 'Fresh onion lot for restaurants, retailers and wholesalers.'
  }
]

export const demoOrders = [
  {orderId:'KD582104',id:'user-demo',crop:'Wheat',orderQty:500,seller:'My Farm',buyer:'Sharma Foods',price:28,status:'Awaiting farmer review',placedOn:'10 Sep 2026',emoji:'🌾',location:'Hisar, Haryana',deliveryAddress:'Delhi NCR',demoForFarmer:true}
]
