import React from 'react';
import './style.css';
import RampComponent from './ramp.component';

export default function App() {
  return (
    <div>
      <RampComponent input={undefined}></RampComponent>
      <RampComponent input="Hello Ramp engineers :D"></RampComponent>
      <RampComponent input={[1, 2, 3, 4]}></RampComponent>
    </div>
  );
}
