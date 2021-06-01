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
        width: "60px",
        height: "60px",
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
