import React from 'react';
import tick from '../assets/tickmark.png';
import not_tick from '../assets/notdone.png';
import delete_icon from '../assets/delete.png';

const Todoitems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 mb-3">
      {/* Left side: tick + text */}
      <div onClick={() => toggle(id)} className="flex items-center gap-3 cursor-pointer">
        <img src={isComplete ? tick : not_tick} alt="tick" className="w-6 h-6" />
        <p className={`text-[15px] font-medium ${
          isComplete ? "line-through text-gray-400" : "text-gray-800"
        }`}>
          {text}
        </p>
      </div>

      {/* Right side: delete */}
      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="delete"
        className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform"
      />
    </div>
  );
};

export default Todoitems;
