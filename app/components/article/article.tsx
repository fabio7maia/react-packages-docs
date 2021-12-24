import React from "react";

export const Article: React.FC = ({ children }) => {
  return (
    <article className="prose lg:prose-2xl bg-slate-200 rounded-lg p-6">
      {children}
    </article>
  );
};
