import React, { useEffect, useState } from 'react';
import API from '../api';

const SessionsList = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await API.get('/sessions');
        setSessions(response.data);
      } catch (error) {
        console.error('Failed to fetch sessions', error);
      }
    };
    fetchSessions();
  }, []);

  return (
    <div>
      <h2>Your Sessions</h2>
      <ul>
        {sessions.map((session) => (
          <li key={session._id}>
            {session.start} - {session.end} with{' '}
            {session.participants.map((p) => p.email).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionsList;
