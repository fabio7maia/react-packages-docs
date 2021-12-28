import React from "react";

export const Article: React.FC = ({ children }) => {
  return (
    <article className="prose lg:prose-2xl bg-base-content rounded-lg p-6">
      {children}
    </article>
  );
};
