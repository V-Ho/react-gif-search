import React from 'react'
import GifItem from './GifItem'

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />
  })

  return (
    <ul>{gifItems}</ul>
  )
}

export default GifList

/*
- Stateless function component - doesn't modify state
- GifList maps through array of gifs passed down from App state
- We set a unique key property id on each GifItem

*/
