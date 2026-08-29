import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex bg-secondary w-54 h-full flex-col p-3 gap-4">
      <ul className="h-full flex flex-col gap-3 mt-5 text-white">
        <Link
          href="/dashboard"
          className="p-3 relative overflow-hidden rounded-lg before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-primary before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:text-white"
        >
          <span className="relative z-10">Dashboard</span>
        </Link>
        <Link
          href="/tasks"
          className="p-3 p-3 relative overflow-hidden rounded-lg before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-primary before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:text-white"
        >
          <span className="relative z-10">Tasks</span>
        </Link>
        <Link
          href="/trash"
          className="p-3 relative overflow-hidden rounded-lg before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-primary before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:text-white"
        >
          <span className="relative z-10">Trash</span>
        </Link>
        <Link
          href="/history"
          className="p-3 relative overflow-hidden rounded-lg before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-primary before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:text-white"
        >
          <span className="relative z-10">History</span>
        </Link>
        <Link
          href="/progress"
          className="p-3 relative overflow-hidden rounded-lg before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-primary before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:text-white"
        >
          <span className="relative z-10">Progress</span>
        </Link>
        <Link
          href="/settings"
          className="p-3 relative overflow-hidden rounded-lg before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-primary before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:text-white"
        >
          <span className="relative z-10">Settings</span>
        </Link>
        <Link
          href="/help"
          className="p-3 relative overflow-hidden rounded-lg before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-primary before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:text-white"
        >
          <span className="relative z-10">Help</span>
        </Link>
      </ul>
    </aside>
  );
}
