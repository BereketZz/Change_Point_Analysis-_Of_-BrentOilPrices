import React, { useState } from 'react';
import PriceChart from './components/PriceChart';
import EventFilter from './components/EventFilter';
import SummaryCard from './components/SummaryCard';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Brent Oil Price Dashboard</h1>
      <EventFilter onSelect={setSelectedEvent} />
      <SummaryCard title="Selected Event" value={selectedEvent || "None"} />
      <PriceChart selectedEvent={selectedEvent} />
    </div>
  );
}

export default App;
