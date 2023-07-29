import React from 'react';

function SectionTitle({children, id}) {
  return (
    <h1 id={id && id}
      className="text-3xl font-bold text-slate-900 dark:text-white">
        {children}
      </h1>
  );
}

export default SectionTitle;
