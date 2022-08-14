import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexColor = rgbToHex(...rgb);

  const copyToClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexColor);

    setTimeout(() => {
      setAlert(false);
    }, 1500);
  }


  return (
    <article className={`color`}
      style={{backgroundColor: `rgb(${bcg})`}}
      onClick={copyToClipboard}>
        <p className='percent-value'> {weight}% </p>
        <br/>
        <p className='color-value'>{hexColor}</p>
        <br/>
        {alert && <p className={`alert`}> Copied to Clipboard</p>}

    </article>
  )
}

export default SingleColor
