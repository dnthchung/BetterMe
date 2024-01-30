import React, { useState } from "react";

const ToDoPageTest = () => {
  // State variables to manage todos and input values
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [detailValue, setDetailValue] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [editing, setEditing] = useState(null); // Keeps track of editing status
  const [editText, setEditText] = useState(""); // Holds the text being edited

  // Event handler for todo text input change
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  // Event handler for selected date input change
  function handleDateChange(e) {
    setSelectedDate(e.target.value);
  }

  // Event handler for todo detail input change
  function handleDetailChange(e) {
    setDetailValue(e.target.value);
  }

  // Event handler for selected time input change
  function handleTimeChange(e) {
    setSelectedTime(e.target.value);
  }

  // Format selected date for storage in todos array
  function formatSelectedDate(dateString) {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Format date for display in the todo list
  function formatDateForDisplay(dateString) {
    const dateObject = new Date(dateString);
    const day = String(dateObject.getDate()).padStart(2, "0");
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const year = dateObject.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Format selected time for storage in todos array
  function formatSelectedTime(timeString) {
    return timeString;
  }

  // Handle form submission to add or update todos
  function handleSubmit(e) {
    e.preventDefault();
    if (editing !== null) {
      // Update existing todo
      const updatedTodos = [...todos];
      updatedTodos[editing].text = editText;
      updatedTodos[editing].date = formatSelectedDate(selectedDate);
      updatedTodos[editing].time = formatSelectedTime(selectedTime);
      updatedTodos[editing].detail = detailValue;
      setTodos(updatedTodos);
      setEditing(null);
    } else {
      // Add new todo
      setTodos([
        ...todos,
        {
          text: inputValue,
          done: false,
          date: formatSelectedDate(selectedDate),
          time: formatSelectedTime(selectedTime),
          detail: detailValue,
        },
      ]);
    }
    // Clear input values after submission
    setInputValue("");
    setSelectedDate("");
    setSelectedTime("");
    setDetailValue("");
    setEditText("");
  }

  // Handle deletion of a todo
  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setEditing(null);
  }

  // Handle checking/unchecking of a todo
  function handleCheck(index) {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  // Set editing mode and populate form fields for editing a todo
  function handleEdit(index) {
    setEditing(index);
    const todoToEdit = todos[index];
    setInputValue(todoToEdit.text);
    setSelectedDate(todoToEdit.date);
    setSelectedTime(todoToEdit.time);
    setDetailValue(todoToEdit.detail);
    setEditText(todoToEdit.text);
  }

  // Cancel editing mode
  function handleCancelEdit() {
    setEditing(null);
    // Clear input values
    setInputValue("");
    setSelectedDate("");
    setSelectedTime("");
    setDetailValue("");
    setEditText("");
  }

  // Render the TodoPageTest component
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Todo List</h1>
        <form className="mb-4">
          {/* Input fields for todo text, date, time, and details */}
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="border rounded py-2 px-3 mr-2"
            placeholder="Todo text"
          />
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="border rounded py-2 px-3 mr-2"
          />
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            className="border rounded py-2 px-3 mr-2"
          />
          <input
            type="text"
            value={detailValue}
            onChange={handleDetailChange}
            className="border rounded py-2 px-3 mr-2"
            placeholder="Detail"
          />
          {/* Button for adding or updating todos */}
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {editing !== null ? "Update Todo" : "Add Todo"}
          </button>
          {/* Cancel button during editing mode */}
          {editing !== null && (
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Cancel
            </button>
          )}
        </form>
        {/* Display the list of todos */}
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="mb-2 flex items-center">
              {/* Checkbox for checking/unchecking todos */}
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleCheck(index)}
                className="mr-2"
              />
              {/* Todo text, date, time, details, and buttons for editing and deleting */}
              <span className={todo.done ? "line-through" : ""}>
                {todo.text} - {formatDateForDisplay(todo.date)} - {todo.time} -{" "}
                {todo.detail}
              </span>
              <button
                onClick={() => handleEdit(index)}
                className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoPageTest;
