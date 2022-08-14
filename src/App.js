import React, { useState } from 'react'
import SingleColor from './SingleColor'
import { ChromePicker } from 'react-color';
import Values from 'values.js'

function App() {

  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#22194D').all(10));

  const handleColorChange = (color) => {

    const hexColor = color.hex;

    console.log(hexColor);

    try {
      let colors = new Values(hexColor).all(10);
      setList(colors);

    } catch (error) {
      console.log(error);
    }

    setColor({ background: color.hex });

  };

  return <>

    <br />

    <div className='colorpicker'>
      <ChromePicker color={color.background}
        disableAlpha={true}
        onChange={handleColorChange} />
    </div>

    <br />

    <section className="colors">
      {list.map((color, index) => {
        return <SingleColor key={index}
          {...color}
          index={index}>

        </SingleColor>
      })}
    </section>
  </>
}

export default App
