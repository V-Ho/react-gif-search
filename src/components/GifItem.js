import React from 'react'

const GifItem = (image) => {
  return (
    <li>
      <img src={image.gif.url}/>
    </li>

  )
}

export default GifItem

/*

GiftItem takes image passed in as props from GifList and passes URL into image element

 */
