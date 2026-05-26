import React from 'react'
// Props
const Product = ({name,price,color,data = {}}) => {
  return (
    <div>
        <h1>Brand - {name}</h1>
        <h3>Price - {price}</h3>
        <h3>Color - {color}</h3>
        <p>ram = {data.ram}</p>
        <p>rom = {data.rom}</p>
        <p>chip = {data.chip}
        </p>
    </div>
  )
}

export default Product