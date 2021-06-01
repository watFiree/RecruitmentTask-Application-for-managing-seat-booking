import React from "react";
import { SimplifiedSeat, SeatsColors } from "../types";

interface Props {
  id: string | undefined;
  x: number;
  y: number;
  reserved: boolean;
  backgroundColor: SeatsColors;
  handleClick: (data: SimplifiedSeat) => void;
}

const Seat: React.FC<Props> = ({
  id,
  x,
  y,
  reserved,
  backgroundColor,
  handleClick,
}) => (
  <div
    id={id}
    style={{
      border: "1px solid",
      margin: 6,
      width: "2.5vw",
      height: "2.5vw",
      opacity: id === undefined ? "0" : "1",
      cursor: reserved || id === undefined ? "auto" : "pointer",
      backgroundColor,
    }}
    onClick={!reserved && id ? () => handleClick({ id, x, y }) : undefined}
  />
);

export default Seat;
