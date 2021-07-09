import React from "react";
import { cls } from "utils/cls";
import "./Loader.style.scss";

const Loader = ({
  width = "24px",
  height = "24px",
  color = "#3498db",
  className,
}) => {
  return (
    <div
      className={cls("__simple__loader", className)}
      style={{
        width,
        height,
        borderRight: `2px solid ${color}`,
        borderTop: `2px solid ${color}`,
      }}
    ></div>
  );
};

export default Loader;
