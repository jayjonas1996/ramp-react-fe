import React from 'react';
import './style.css';
import RampComponent from './ramp.component';

export default function App() {
  return (
    <div>
      Ramp Component for frontend internship application: <br />
      <br />
      1: (Falsy)
      <RampComponent input={undefined}></RampComponent>
      <RampComponent input={null}></RampComponent>
      <RampComponent input=""></RampComponent>
      <RampComponent input={0}></RampComponent>
      <br />
      2: (Array)
      <RampComponent
        input={['popsicle', 'banana', 'chocolate', 'cherry']}
      ></RampComponent>
      <RampComponent input={[99, 43, 33, 4]}></RampComponent>
      <RampComponent input={['tom', 2, 'apple', 4]}></RampComponent>
      <br />
      3:
      <RampComponent input="Hello Ramp engineers :D"></RampComponent>
      <RampComponent input="Hope to see you soon"></RampComponent>
    </div>
  );
}
