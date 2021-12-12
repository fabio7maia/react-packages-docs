import React from "react";
import { useClassName } from "~/hooks";
import { ClassName } from "~/types";

interface BoxProps {
  className?: string | ClassName;
  row?: boolean;
}

export const Box: React.FC<BoxProps> = ({
  children,
  className,
  row = false,
}) => {
  const { get } = useClassName();

  return (
    <div className={get(`flex ${row ? "flex-row" : "flex-col"}`, className)}>
      {children}
    </div>
  );
};
