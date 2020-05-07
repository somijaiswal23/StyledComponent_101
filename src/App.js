import React from 'react';
import DemoWithCss from './components/demoWithCss/index';
import DemowithStyled from './components/demoWithStyled/index';

function App() {
  return (
    <div>
      <h1 className='heading'> Normal Component</h1>
      <DemoWithCss />
<hr></hr>
      <h1 className='heading'> Styled Component</h1>
      <DemowithStyled />
    </div>
  );
}

export default App;

