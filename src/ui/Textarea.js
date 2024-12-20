import React from 'react';

function Textarea({ id, name, value, onChange, required, className }) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${className}`}
    />
  );
}

export default Textarea;