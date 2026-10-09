export default function AddTaskModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[750px] bg-[#171717] border border-primary p-2 rounded-xl">
        <div className="flex justify-between items-center border-b border-[#3A3A3A] mr-4 ml-4 p-3">
          <h3 className="text-2xl">Add Task</h3>
          <button className="text-gray-300 bg-[#303030] hover:bg-[#30303090] border border-[#454545] p-2 rounded-lg cursor-pointer">
            Close
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4 pt-4">
          <label>Title</label>
          <input
            type="text"
            className="bg-[#242424] text-gray-400 placeholder:text-[#A3A3A3] border border-[#454545] focus:outline-none focus:ring-2 focus:ring-gray-700 p-4 rounded-md"
            placeholder="Task title"
          />

          <div className="flex gap-2 justify-between">
            <div className="flex flex-col gap-1.5">
              <label>Start Date</label>
              <input
                type="date"
                className="w-[340px] bg-[#242424] text-gray-400 placeholder:text-[#A3A3A3] border border-[#454545] focus:outline-none focus:ring-2 focus:ring-gray-700 p-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label>Due Date</label>
              <input
                type="date"
                className="w-[340px] bg-[#242424] text-gray-400 placeholder:text-[#A3A3A3] border border-[#454545] focus:outline-none focus:ring-2 focus:ring-gray-700 p-4 rounded-md"
              />
            </div>
          </div>
          <label>Priority</label>
          <select
            className="bg-[#242424] text-gray-400 placeholder:text-[#A3A3A3] border border-[#454545] focus:outline-none focus:ring-2 focus:ring-gray-700 p-4 rounded-md"
            defaultValue=""
          >
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="flex justify-end gap-4 p-4 mt-4">
          <button className="bg-[#171717] hover:bg-[#30303090] border border-[#454545] p-2 rounded-lg cursor-pointer">
            Cancel
          </button>
          <button className="bg-primary hover:bg-primary/70 p-2 rounded-lg cursor-pointer">
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
}
