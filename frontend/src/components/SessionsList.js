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
    <div
      style={{
        padding: '2rem',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '1.5rem',
        }}
      >
        Your Sessions
      </h2>
      <ul
        style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {sessions.map((session) => (
          <li
            key={session._id}
            style={{
              backgroundColor: '#fff',
              padding: '1rem',
              margin: '0.5rem 0',
              borderRadius: '4px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p
              style={{
                margin: '0 0 0.5rem 0',
                color: '#555',
              }}
            >
              <strong>Time:</strong> {new Date(session.start).toLocaleString()} -{' '}
              {new Date(session.end).toLocaleString()}
            </p>
            <p
              style={{
                margin: 0,
                color: '#555',
              }}
            >
              <strong>Participants:</strong>{' '}
              {session.participants.map((p) => p.email).join(', ')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionsList;
