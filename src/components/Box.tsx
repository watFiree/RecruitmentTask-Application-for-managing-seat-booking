import React from "react";

import { Typography } from "antd";

const { Text } = Typography;

type Colors = "orange" | "darkgray" | "white";

const Box: React.FC<{ backgroundColor?: Colors; id?: string }> = ({
  backgroundColor = "white",
  id,
}) => (
  <div
    style={{
      border: "1px solid",
      width: "60px",
      height: "60px",
      backgroundColor,
    }}
  >
    {id}
  </div>
);

export const BoxWithLabel: React.FC<{
  backgroundColor?: Colors;
  label: string;
}> = ({ backgroundColor = "white", label }) => (
  <div
    style={{
      display: "flex",
      alignContent: "center",
      justifyContent: "center",

      fontSize: 16,
    }}
  >
    <Box backgroundColor={backgroundColor} />
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
