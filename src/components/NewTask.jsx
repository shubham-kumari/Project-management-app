import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd, onDelete }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef();
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4 ">
          Oops ... look like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4 ">
          Please make sure you provide a valid input for every field.
        </p>
      </Modal>
      <div className="flex items-center gap-4 ">
        <input
          type="text"
          onChange={handleChange}
          value={enteredTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200 focus:outline-none focus:border-b-2 border-stone-900"
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
