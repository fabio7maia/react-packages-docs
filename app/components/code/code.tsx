import React from "react";
import RHighlight from "react-highlight";

interface CodeProps {
  language?: "javascript" | "html" | "css" | "json";
}

export const Code: React.FC<CodeProps> = ({ language, children }) => {
  return (
    <div className="p-6">
      <RHighlight className={language}>{children}</RHighlight>
    </div>
  );
};
