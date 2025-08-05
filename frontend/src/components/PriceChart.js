import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceDot } from 'recharts';
import axios from 'axios';

export default function PriceChart() {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [changePoints, setChangePoints] = useState([]);

  useEffect(() => {
    axios.get('/api/prices').then(res => setData(res.data));
    axios.get('/api/events').then(res => setEvents(res.data));
    axios.get('/api/change-points').then(res => setChangePoints(res.data));
  }, []);

  return (
    <LineChart width={1000} height={400} data={data}>
      <XAxis dataKey="Date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="Price" stroke="#8884d8" />
      {events.map((e, i) => (
        <ReferenceDot key={i} x={e.date} y={e.price} r={5} fill="red" />
      ))}
      {changePoints.map((cp, i) => (
        <ReferenceDot key={i} x={cp.date} y={cp.price} r={5} fill="blue" />
      ))}
    </LineChart>
  );
}
