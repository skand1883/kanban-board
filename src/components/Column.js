import React from 'react';
import Card from './Card';

const Column = ({ title, tickets, users }) => {
  return (
    <div className="column">
      <h2 className="column-title">{title}</h2>
      <div className="cards">
        {tickets.map(ticket => (
          <Card key={ticket.id} ticket={ticket} user={users.find(u => u.id === ticket.userId)} />
        ))}
      </div>
      <style jsx>{`
        .column {
          min-width: 300px;
          background-color: #f4f5f8;
          border-radius: 8px;
          padding: 1rem;
        }
        .column-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Column;