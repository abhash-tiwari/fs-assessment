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
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: 'auto',
      }}
    >
      <input
        type="datetime-local"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        required
        style={{
          width: '100%',
          padding: '0.7rem',
          margin: '0.5rem 0',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '1rem',
        }}
      />
      <input
        type="datetime-local"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        required
        style={{
          width: '100%',
          padding: '0.7rem',
          margin: '0.5rem 0',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '1rem',
        }}
      />
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '0.7rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Add Availability
      </button>
    </form>
  );
};

export default AvailabilityForm;
