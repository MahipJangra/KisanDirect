export function calculateRecommendation(market, quantity) {
  const gross = quantity * market.price
  const transport = market.distance * 18
  const wastageCost = quantity * (market.wastage / 100) * market.price
  const handling = quantity * 0.7
  const realization = gross - transport - wastageCost - handling

  const score =
    market.price * 0.40 +
    market.demand * 0.25 +
    Math.max(0, 100 - market.distance / 4) * 0.20 +
    Math.max(0, 100 - market.wastage * 8) * 0.10 +
    Math.min(100, market.buyers * 5) * 0.05

  return {
    ...market,
    gross,
    transport,
    wastageCost,
    handling,
    realization,
    score: Math.round(score * 10) / 10
  }
}
