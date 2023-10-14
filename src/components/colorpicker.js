import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setShowColorList(false);
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="color-picker">
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div 
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
        
      )}
      <br/>
      <button className='btn' onClick={handleButtonClick}>Pick a color</button>
      
    </div>
  );
};

export default ColorPicker;