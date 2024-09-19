import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Board from './components/Board';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('viewState', JSON.stringify({ grouping, sorting }));
  }, [grouping, sorting]);

  useEffect(() => {
    const savedViewState = localStorage.getItem('viewState');
    if (savedViewState) {
      const { grouping: savedGrouping, sorting: savedSorting } = JSON.parse(savedViewState);
      setGrouping(savedGrouping);
      setSorting(savedSorting);
    }
  }, []);

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
  };

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
  };

  return (
    <div className="app">
      <Header
        grouping={grouping}
        sorting={sorting}
        onGroupingChange={handleGroupingChange}
        onSortingChange={handleSortingChange}
      />
      <Board
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
      />
      <style jsx>{`
        .app {
          font-family: Arial, sans-serif;
          background-color: #f4f5f8;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default App;