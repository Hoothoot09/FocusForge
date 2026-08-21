export default function Sidebar() {
  return (
    <aside className="flex bg-secondary w-54 h-full flex-col p-3 gap-4">
      <ul className="h-full flex flex-col gap-3 mt-5 text-white">
        <li className="p-3">Dashboard</li>
        <li className="p-3">Tasks</li>
        <li className="p-3">Trash</li>
        <li className="p-3">History</li>
        <li className="p-3">Progress</li>
        <li className="p-3">Settings</li>
        <li className="p-3">Help</li>
      </ul>
    </aside>
  );
}
