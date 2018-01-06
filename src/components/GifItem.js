import React from 'react'

const GifItem = (image) => {
  return (
  <div className="gif-item">
    <img src={image.gif.images.downsized.url} />
  </div>
  )
}

export default GifItem

/*

- GiftItem takes image passed in as props from GifList and passes URL into image element
- Add ClassName gif-item for CSS styling

 */
