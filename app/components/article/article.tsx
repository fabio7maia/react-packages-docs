import React from "react";

export const Article: React.FC = ({ children }) => {
  return (
    <article
      style={{ maxWidth: "calc(100vw - 3rem)" }}
      className="prose md:prose-2xl bg-base-content rounded-lg p-6"
    >
      {children}
    </article>
  );
};
