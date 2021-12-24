import React from "react";
import { useClassName } from "~/hooks";
import { ClassName } from "~/types";

interface BoxProps {
  className?: string | ClassName;
  row?: boolean;
  as?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  ref?: any;
}

export const Box: React.FC<BoxProps> = React.forwardRef(
  ({ as = "div", children, className, row = false, onClick, style }, ref) => {
    const { get } = useClassName();

    return React.createElement(
      as,
      {
        className: get(`flex ${row ? "flex-row" : "flex-col"}`, className),
        onClick,
        style,
        ref,
      },
      children
    );
  }
);
