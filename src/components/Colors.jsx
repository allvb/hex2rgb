import React from 'react'
import { useState } from 'react'

function Colors() {
  const [colorHex, setHex] = useState('#');
  const [colorRGB, setRGB] = useState('');
  const [colorBG, setBG] = useState('#ffffff');

  function isHexadecimal(colorHex) { // проверка на 16-ричное число
    const arr = [...colorHex];
    for (let char of arr) {
      if ((char < '0' || char > '9')
      && (char < 'a' || char > 'f')) {
        return false;
      }
    }
    return true;
  }

  function colorToRGB(colorHex) {
    const r = parseInt(colorHex.substring(1, 3), 16);
    const g = parseInt(colorHex.substring(3, 5), 16);
    const b = parseInt(colorHex.substring(5), 16);

    return 'rgb( ' + r + ', ' + g + ', ' + b + ' )';
  }

  const ChangedColor = (e) => {
    if (e.target.value.length >= 1 && e.target.value.length < 8) {
      setHex((prev) => (prev = e.target.value));
    }
    if (e.target.value.length === 7) {
      if (isHexadecimal(e.target.value.substring(1))) {
        setRGB((prev) => prev = colorToRGB(e.target.value));
        setBG((prev) => prev = e.target.value);
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