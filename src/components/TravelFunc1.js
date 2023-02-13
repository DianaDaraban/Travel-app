import React, { useState } from 'react'
import Price from './Price'

export default function TravelFunc1(props) {
  const [price, setPrice] = useState(500)
  console.log(props)
  return (
    <div>
      <button
        onClick={() => {
          setPrice(300)
        }}
      >
        Changed price: {price}
      </button>
      <Price />
    </div>
  )
}
