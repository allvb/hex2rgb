import React from 'react'
import { useState } from 'react'

function Colors() {
  const [colorHex, setHex] = useState('#');
  const [colorRGB, setRGB] = useState('');
  const [colorBG, setBG] = useState('#ffffff');

  function colorToRGB(colorHex) {
    const number = parseInt(colorHex.substring(1), 16);
    const r = (number >> 16) & 255;
    const g = (number >> 8) & 255;
    const b = number & 255;
  
    return 'rgb( ' + r + ', ' + g + ', ' + b + ' )';
  }

  const ChangedColor = (e) => {
    if (e.target.value.length >= 1 && e.target.value.length < 8) {
      setHex((prev) => (prev = e.target.value));
    }
    if (e.target.value.length === 7) {
      if (!isNaN(colorHex.substring(1))) {
        setRGB((prev) => prev = colorToRGB(colorHex));
        setBG((prev) => prev = colorHex);
      } else {
        setRGB((prev) => prev = 'Ошибка');
        setBG((prev) => prev = '#a52019');
      }
    }
  };

  console.log(colorBG);
  console.log(colorHex);
  console.log(colorRGB);

  return (
    <div className='container' style={{background: colorBG}}>
      <input
        className='input'
        type='text'
        value={colorHex}
        onChange={(e) => {
          ChangedColor(e);
        }}
      />
      <div className='rgb'>{colorRGB}</div>
    </div>
  )
}

export default Colors