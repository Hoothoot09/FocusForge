import { useState } from "react";
import { Task } from "../types/task";

type AddTaskModalProps = {
  onClose: () => void;
  onAddTask: (newTask: Task) => void;
};

function formatDate(date: string): string {
  const datePart = date.split("-");
  if (datePart.length !== 3) {
    return date; // Retorna a data original se não estiver no formato esperado
  }
  return `${datePart[2]}/${datePart[1]}/${datePart[0]}`;
}

export default function AddTaskModal({
  onClose,
  onAddTask,
}: AddTaskModalProps) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  function handleSaveTask() {
    if (!title || !startDate || !dueDate) {
      alert("Please fill in all fields.");
      return;
    }

    const newTask: Task = {
      id: Date.now(), // Gera um ID único baseado no timestamp atual
      title,
      startDate: startDate,
      dueDate: dueDate,
      priority,
      status: "in progress", // Status inicial da task
    };
    onAddTask(newTask);
    onClose();
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[750px] bg-[#171717] border border-primary p-2 rounded-xl z-100"
      >
        <div className="flex justify-between items-center border-b border-[#3A3A3A] mr-4 ml-4 p-3">
          <h3 className="text-2xl">Add Task</h3>
          <button
            onClick={onClose}
            className="text-gray-300 bg-[#303030] hover:bg-[#30303090] border border-[#454545] p-2 rounded-lg cursor-pointer"
          >
            Close
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4 pt-4">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-[#242424] text-gray-400 placeholder:text-[#A3A3A3] border border-[#454545] focus:outline-none focus:ring-2 focus:ring-gray-700 p-4 rounded-md"
            placeholder="Enter Task title"
          />

          <div className="flex gap-2 justify-between">
            <div className="flex flex-col gap-1.5">
              <label>Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-[340px] bg-[#242424] text-gray-400 placeholder:text-[#A3A3A3] border border-[#454545] focus:outline-none focus:ring-2 focus:ring-gray-700 p-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label>Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-[340px] bg-[#242424] text-gray-400 placeholder:text-[#A3A3A3] border border-[#454545] focus:outline-none focus:ring-2 focus:ring-gray-700 p-4 rounded-md"
              />
            </div>
          </div>
          <label>Priority</label>
          <select
            className="bg-[#242424] text-gray-400 placeholder:text-[#A3A3A3] border border-[#454545] focus:outline-none focus:ring-2 focus:ring-gray-700 p-4 rounded-md"
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as "low" | "medium" | "high")
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="flex justify-end gap-4 p-4 mt-4">
          <button
            onClick={onClose}
            className="bg-[#171717] hover:bg-[#30303090] border border-[#454545] p-2 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveTask}
            className="bg-primary hover:bg-primary/70 p-2 rounded-lg cursor-pointer"
          >
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
}
