# KisanDirect — SIH 2026 Final MVP Prototype

KisanDirect is a simple direct crop marketplace designed around SIH Problem Statement 26033: reducing unnecessary intermediaries between farmers/FPOs and buyers.

## Core MVP flow

1. Choose Farmer/FPO or Buyer.
2. Register and upload an ID (simulated in this prototype).
3. Account remains pending until verification; the demo includes an explicit approval shortcut.
4. Verified farmers can create, edit and delete crop listings.
5. Verified buyers can search crops, view seller details, negotiate price, select quantity and place an order request.
6. Farmer reviews the order, arranges transport and sends a delivery charge.
7. Buyer sees crop + delivery total and confirms or cancels.
8. Farmer marks the order dispatched; buyer marks it received.
9. AI Demand page demonstrates demand forecasting.
10. Confirmed delivery orders show a prototype optimized-route suggestion.

## SIH coverage

- Direct farmer/FPO-to-buyer digital marketplace
- Identity verification concept
- Optional price negotiation
- Order and stock-oriented marketplace workflow
- Logistics support through seller-arranged transport
- AI demand forecasting prototype
- Route-optimization prototype

## Important prototype limitations

This is a frontend MVP. ID documents are not stored, verification is simulated, payments are not processed, and demand/route outputs are mock decision-support data. A production system would require a backend, secure identity verification, database transactions, real logistics/map APIs, model training/validation, payments and legal/privacy review.

## Run locally

```bash
npm install
npm run dev
```
