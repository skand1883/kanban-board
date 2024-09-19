import React from 'react';

const Card = ({ ticket, user }) => {
  const getPrioritySymbol = (priority) => {
    switch (priority) {
      case 4: return '!!!';
      case 3: return '!!';
      case 2: return '!';
      case 1: return '·';
      default: return '';
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar">
            {user.name[0]}
          </div>
        )}
      </div>
      <h3 className="card-title">{ticket.title}</h3>
      <div className="card-footer">
        <span className="priority">{getPrioritySymbol(ticket.priority)}</span>
        <span className="tag">{ticket.tag.join(', ')}</span>
      </div>
      <style jsx>{`
        .card {
          background-color: white;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .ticket-id {
          color: #6b7280;
        }
        .user-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        .card-title {
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        .card-footer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .priority {
          color: #ef4444;
          font-weight: bold;
        }
        .tag {
          font-size: 0.875rem;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
};

export default Card;