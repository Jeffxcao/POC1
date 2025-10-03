import React from 'react';

export default function Image({ className = '', ...props }) {
  return <img className={className} {...props} />;
}
