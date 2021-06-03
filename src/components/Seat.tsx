import React from 'react';
import { SeatProps } from '../types';

const Seat: React.FC<SeatProps> = ({ id, x, y, reserved, backgroundColor, handleClick }) => (
  <div
    id={id}
    style={{
      border: '1px solid',
      margin: 4,
      maxWidth: '48px',
      maxHeight: '48px',
      height: '5vw',
      width: '5vw',
      opacity: id === undefined ? '0' : '1',
      cursor: reserved || id === undefined ? 'auto' : 'pointer',
      backgroundColor,
    }}
    onClick={!reserved && id ? () => handleClick({ id, x, y }) : undefined}
  />
);

export default Seat;
