import React from 'react';
import './style.css';

function DemoWithCss() {
  return (
    <div>
         <button className="btn btn-danger">I am a Button</button>
          <button className="btn btn-success">I am a Button</button>
           <button className="btn btn-warning">I am a Button</button>
           <button className="btn btn-danger font30">I am a Button</button>
           <h1> This is now a link! </h1>
          <h2> This is now a link! </h2>
          <h3> This is now a link! </h3>
    </div>
  );
}

export default DemoWithCss;
