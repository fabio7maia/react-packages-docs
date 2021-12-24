import React from "react";

interface ProgressProps {
  value: number;
  max?: number;
}

export const Progress: React.FC<ProgressProps> = ({ value, max = 100 }) => {
  return (
    <progress className="progress progress-info" value={value} max={max} />
  );
};
