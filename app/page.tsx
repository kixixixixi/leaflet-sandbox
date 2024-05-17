"use client"

import React from "react"
import { useEffect, useState } from "react"
import type { NextPage } from "next"

// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
// import { LatLng, icon } from "leaflet"
// import "leaflet/dist/leaflet.css"
// import iconImage from "leaflet/dist/images/marker-icon.png"

// const ChangeMapCenter = ({ position }: { position: LatLng }) => {
//   const map = useMap()
//   map.panTo(position)

//   return null
// }

// const HomePage: NextPage = () => {
//   const [position, setPosition] = useState<LatLng>()

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const newPosition = new LatLng(
//         position.coords.latitude,
//         position.coords.longitude
//       )
//       setPosition(newPosition)
//     })
//   }, [])
//   return (
//     <>
//       <section
//         style={{
//           margin: "auto",
//         }}
//       >
//         {position && (
//           <MapContainer
//             center={position}
//             zoom={15}
//             style={{
//               height: "100%",
//             }}
//           >
//             <TileLayer
//               attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>'
//               url="https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"
//             />
//             <Marker
//               position={position}
//               icon={icon({
//                 iconUrl: iconImage.src,
//               })}
//               draggable={true}
//               eventHandlers={{
//                 dragend: (event) => {
//                   const newPosition = event.target.getLatLng()
//                   setPosition(newPosition)
//                 },
//               }}
//             >
//               <Popup>{"設定地"}</Popup>
//               <ChangeMapCenter position={position} />
//             </Marker>
//           </MapContainer>
//         )}
//       </section>
//     </>
//   )
// }

// export default HomePage
import dynamic from "next/dynamic"
const MapComponent = dynamic(() => import("@/components/map"), {
  ssr: false,
})

const HomePage: NextPage = () => {
  const [location, setLocation] = useState<GeolocationPosition>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position)
    })
  }, [])
  return (
    <>
      <section
        style={{
          height: "100%",
          margin: "auto",
        }}
      >
        {location && <MapComponent location={location} />}
      </section>
    </>
  )
}

export default HomePage
