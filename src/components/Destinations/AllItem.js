import React, { useState } from "react"
import Cards from './Dcard'
import "../gallery/Gallery.css"
import Sdata from "./Sdata"
import "./Destination.css"
const AllItem = () => {
  const [items] = useState(Sdata)
  return (
    <>
      <section className='gallery destinations'>
        <div className='g-container'>
            {items.map((item) => {
              return <Cards key={item.id} item={item} />
            })}
          
        </div>
      </section>
    </>
  )
}

export default AllItem