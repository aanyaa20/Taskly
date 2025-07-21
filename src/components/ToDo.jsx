import React, { useRef, useState, useEffect } from 'react';
import todo_icon from '../assets/list.png';
import Todoitems from './Todoitems.jsx';

const ToDo = ({ clearAll }) => {
  const [todoList, setTodoList] = useState(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  });

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    if (clearAll) {
      setTodoList([]);
    }
  }, [clearAll]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white w-full max-w-lg mx-auto mt-10 rounded-3xl shadow-xl p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <img className="w-8" src={todo_icon} alt="Todo Icon" />
        <h1 className="text-3xl font-bold text-gray-800 tracking-wide">To-Do List</h1>
      </div>

      {/* Input */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 mb-6 shadow-sm">
        <input
          ref={inputRef}
          className="bg-transparent flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
          type="text"
          placeholder="Add a new task..."
        />
        <button
          onClick={add}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-full transition-all"
        >
          ADD +
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
        {todoList.length === 0 ? (
          <p className="text-gray-400 text-sm text-center">No tasks yet. Add one!</p>
        ) : (
          todoList.map((item) => (
            <Todoitems
              key={item.id}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ToDo;
