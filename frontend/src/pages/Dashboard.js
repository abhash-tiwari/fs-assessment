import React, { useState } from 'react';
import AvailabilityForm from '../components/AvailabilityForm';

const Dashboard = () => {
  const [availability, setAvailability] = useState([]);

  const handleAddAvailability = (newAvailability) => {
    setAvailability([...availability, newAvailability]);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <AvailabilityForm onAdd={handleAddAvailability} />
      <ul>
        {availability.map((slot) => (
          <li key={slot._id}>
            {slot.start} - {slot.end}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
