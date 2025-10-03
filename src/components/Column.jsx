import React from 'react';

export default function Column({ children, className = '' }) {
  return <div className={["ui-column", className].filter(Boolean).join(' ')}>{children}</div>;
}
