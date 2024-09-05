import React, { useState } from 'react';
import API from '../api';

const AvailabilityForm = ({ onAdd }) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/availability', { start, end });
      onAdd(response.data);
    } catch (error) {
      console.error('Failed to add availability', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="datetime-local"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        required
      />
      <button type="submit">Add Availability</button>
    </form>
  );
};

export default AvailabilityForm;
