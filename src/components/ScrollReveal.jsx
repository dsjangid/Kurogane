import React from 'react';

export default function ScrollReveal({ children, className = '', ...props }) {
  return (
    <div className={`transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
