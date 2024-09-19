import React from 'react';
import Column from './Column';

const KanbanBoard = ({ tickets, users, grouping, sorting }) => {
  const getPriorityName = (priority) => {
    switch (priority) {
      case 4: return 'Urgent';
      case 3: return 'High';
      case 2: return 'Medium';
      case 1: return 'Low';
      default: return 'No priority';
    }
  };

  const groupTickets = () => {
    let groups = {};

    if (grouping === 'status') {
      groups = tickets.reduce((acc, ticket) => {
        (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'user') {
      groups = tickets.reduce((acc, ticket) => {
        const user = users.find(u => u.id === ticket.userId);
        (acc[user.name] = acc[user.name] || []).push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'priority') {
      groups = tickets.reduce((acc, ticket) => {
        const priorityName = getPriorityName(ticket.priority);
        (acc[priorityName] = acc[priorityName] || []).push(ticket);
        return acc;
      }, {});
    }

    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return groups;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([groupName, tickets]) => (
        <Column key={groupName} title={groupName} tickets={tickets} users={users} />
      ))}
      <style jsx>{`
        .kanban-board {
          display: flex;
          overflow-x: auto;
          padding: 1rem;
          gap: 1rem;
        }
      `}</style>
    </div>
  );
};

export default KanbanBoard;