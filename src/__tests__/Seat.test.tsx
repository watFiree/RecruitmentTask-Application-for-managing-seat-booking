import React from 'react';
import ReactDOM from 'react-dom';
import { SeatProps } from '../types';

import Seat from '../components/Seat';

test('renders seat with correct background color', () => {
  const data: SeatProps = { id: 's01', x: 0, y: 1, reserved: true, backgroundColor: 'darkgray', handleClick: () => {} };

  const div = document.createElement('div');

  ReactDOM.render(<Seat {...data} />, div);
  expect(div.querySelector('div')).toHaveStyle(`background-color: darkgray`);

  data.reserved = false;
  data.backgroundColor = 'white';
  ReactDOM.render(<Seat {...data} />, div);
  expect(div.querySelector('div')).toHaveStyle(`background-color: white`);

  data.id = undefined;
  ReactDOM.render(<Seat {...data} />, div);
  expect(div.querySelector('div')).toHaveStyle(`opacity: 0`);
});
