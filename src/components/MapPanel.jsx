import React, { useEffect, useRef } from 'react'
import L from 'leaflet'

export default function MapPanel() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const map = L.map(ref.current, { scrollWheelZoom: false }).setView([29.69, 76.98], 8)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)

    const points = [
      [29.69, 76.98, 'Karnal — farmer cluster'],
      [28.69, 77.15, 'Azadpur — buyer market'],
      [29.39, 76.97, 'Gharaunda — farmer'],
      [29.83, 76.94, 'Nilokheri — farmer']
    ]
    points.forEach(([lat, lng, text]) => L.marker([lat, lng]).addTo(map).bindPopup(text))
    const line = L.polyline(points.slice(0, 2).map(x => [x[0], x[1]]), { weight: 4 }).addTo(map)
    map.fitBounds(line.getBounds(), { padding: [25, 25] })

    return () => map.remove()
  }, [])

  return <div ref={ref} className="h-72 w-full overflow-hidden rounded-2xl border border-black/10" />
}
