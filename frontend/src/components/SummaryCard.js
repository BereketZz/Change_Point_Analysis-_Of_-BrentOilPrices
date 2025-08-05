import React from 'react';

export default function SummaryCard({ title, value }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}
