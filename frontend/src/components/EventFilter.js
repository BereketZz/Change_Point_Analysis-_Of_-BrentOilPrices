import React from 'react';

export default function EventFilter({ events, onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select Event</option>
      {events.map((event, i) => (
        <option key={i} value={event.date}>
          {event.title}
        </option>
      ))}
    </select>
  );
}
