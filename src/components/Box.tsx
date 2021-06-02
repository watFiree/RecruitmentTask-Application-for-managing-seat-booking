import React from "react";
import { SeatsColors } from "../types";

import { Typography } from "antd";
const { Text } = Typography;

const Box: React.FC<{ backgroundColor: SeatsColors; label: string }> = ({
  backgroundColor,
  label,
}) => (
  <div
    style={{
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      fontSize: 16,
    }}
  >
    <div
      style={{
        border: "1px solid",
        maxWidth: "60px",
        maxHeight: "60px",
        width: "6vw",
        height: "6vw",
        backgroundColor,
      }}
    />
    <Text
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: 8,
      }}
    >
      {label}
    </Text>
  </div>
);

export default Box;
