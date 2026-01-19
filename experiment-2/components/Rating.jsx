import React, { useState } from 'react';

export default function Rating({ max = 5 }) {
  const [value, setValue] = useState(0);

  return (
    <div aria-label="rating">
      {[...Array(max)].map((_, i) => {
        const idx = i + 1;
        return (
          <button
            key={idx}
            type="button"
            onClick={() => setValue(idx)}
            aria-pressed={idx <= value}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: 20,
              color: idx <= value ? '#f5b301' : '#999',
            }}
            title={`Rate ${idx}`}
          >
            {idx <= value ? '★' : '☆'}
          </button>
        );
      })}
      <span style={{ marginLeft: 8 }}>{value}/{max}</span>
    </div>
  );
}