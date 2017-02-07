import React from 'react';
import TwoPointFourPointOne from './twoPointFourPointOne';
import TwoPointFourPointTwo from './twoPointFourPointTwo';

const TwoPointFour = () => (
  <div>
    <h3>2.4.1 父组件向子组件通信</h3>
    <TwoPointFourPointOne />
    <h3>2.4.2 子组件向父组件通信</h3>
    <TwoPointFourPointTwo />
  </div>
);

export default TwoPointFour;
