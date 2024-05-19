"use client"

import React from "react"
import { useEffect, useState } from "react"
import type { NextPage } from "next"

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
        {location && <MapComponent location={location} type={"std"} />}
      </section>
    </>
  )
}

export default HomePage
