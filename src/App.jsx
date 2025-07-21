import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
import ToDo from './components/ToDo.jsx';

const App = () => {
  const [clearTrigger, setClearTrigger] = useState(false);

  const handleClearAll = () => {
    localStorage.removeItem('todos');
    setClearTrigger((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar onClearAll={handleClearAll} />
      <main className="flex justify-center items-start pt-10 px-4">
        <ToDo clearTrigger={clearTrigger} />
      </main>
    </div>
  );
};

export default App;
