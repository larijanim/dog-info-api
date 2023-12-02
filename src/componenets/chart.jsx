import React from 'react'
import './App.css'; // Import your CSS file

const container = {
    height: '200px',
    width: '100px',
    backgroundColor: 'black',
  };
  
  const itemStyle = {
    height: '50px',
    width: '30px',
  };
  
  const greenStyle = { ...itemStyle, backgroundColor: 'green' };
  const yellowStyle = { ...itemStyle, backgroundColor: 'yellow' };
  const blueStyle = { ...itemStyle, backgroundColor: 'blue' };
  
 
  


  
  function Chart() {
    return (
        <div style={container}>
        <div style={greenStyle}></div>
        <div style={yellowStyle}></div>
        <div style={blueStyle}></div>
      </div>
    
    );
  }
  
export default Chart;
