import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import { Offers } from '../Offers/Offers'
import NewCollections from '../NewCollections/NewCollections'

export default function Shop() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
    </div>
  )
}
