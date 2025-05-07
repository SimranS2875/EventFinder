import React from 'react';

const MyEvents = () => {
  // Example event data (replace with actual data from your backend or state)
  const events = {
    attended: [
      { id: 1, name: "Music Concert", date: "April 20, 2025", location: "New York" },
      { id: 2, name: "Art Exhibition", date: "March 15, 2025", location: "Los Angeles" },
    ],
    hosted: [
      { id: 3, name: "Tech Conference", date: "May 1, 2025", location: "San Francisco" },
    ],
    upcoming: [
      { id: 4, name: "Food Festival", date: "May 10, 2025", location: "Chicago" },
      { id: 5, name: "Book Fair", date: "May 15, 2025", location: "Boston" },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Events</h1>

      {/* Events Attended */}
      <section style={{ marginTop: '20px' }}>
        <h2>Events Attended</h2>
        {events.attended.length > 0 ? (
          <ul>
            {events.attended.map(event => (
              <li key={event.id}>
                <strong>{event.name}</strong> - {event.date} ({event.location})
              </li>
            ))}
          </ul>
        ) : (
          <p>No events attended yet.</p>
        )}
      </section>

      {/* Events Hosted */}
      <section style={{ marginTop: '20px' }}>
        <h2>Events Hosted</h2>
        {events.hosted.length > 0 ? (
          <ul>
            {events.hosted.map(event => (
              <li key={event.id}>
                <strong>{event.name}</strong> - {event.date} ({event.location})
              </li>
            ))}
          </ul>
        ) : (
          <p>No events hosted yet.</p>
        )}
      </section>

      {/* Upcoming Events */}
      <section style={{ marginTop: '20px' }}>
        <h2>Upcoming Events</h2>
        {events.upcoming.length > 0 ? (
          <ul>
            {events.upcoming.map(event => (
              <li key={event.id}>
                <strong>{event.name}</strong> - {event.date} ({event.location})
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming events.</p>
        )}
      </section>
    </div>
  );
};

export default MyEvents;