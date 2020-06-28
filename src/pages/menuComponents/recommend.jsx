import React from "react";

export default ({ children, backgroundColor, size, style }) => {
  backgroundColor = backgroundColor || "#31425E";
  size = size || 100;
  return <div>{children}</div>;
};
