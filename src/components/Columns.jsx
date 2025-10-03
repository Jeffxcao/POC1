import React from 'react';

export default function Columns({ children, className = '', space }) {
  const gapClass = typeof space === 'number' ? `columns--gap-${space}` : '';
  return <div className={["ui-columns", gapClass, className].filter(Boolean).join(' ')}>{children}</div>;
}
