import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexColor = rgbToHex(...rgb);
  const lightColor = index > 10 && 'color-light';

  const copyToClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexColor);

    setTimeout(() => {
      setAlert(false);
    }, 1500);
  }


  return (
    <article className={`color ${lightColor}`}
      style={{backgroundColor: `rgb(${bcg})`}}
      onClick={copyToClipboard}>
        <p className='percent-value'> {weight}% </p>
        <p className='color-value'>{hexColor}</p>

        {alert && <p className={`alert ${lightColor}`}> Copied to Clipboard</p>}

    </article>
  )
}

export default SingleColor
