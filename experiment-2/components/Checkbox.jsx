import React, { useState } from 'react';

export default function Checkbox({ label = '' }) {
  const [checked, setChecked] = useState(false);

  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}