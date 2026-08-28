import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex bg-secondary w-54 h-full flex-col p-3 gap-4">
      <ul className="h-full flex flex-col gap-3 mt-5 text-white">
        <Link href="/dashboard" className="p-3">
          Dashboard
        </Link>
        <Link href="/tasks" className="p-3">
          Tasks
        </Link>
        <Link href="/trash" className="p-3">
          Trash
        </Link>
        <Link href="/history" className="p-3">
          History
        </Link>
        <Link href="/progress" className="p-3">
          Progress
        </Link>
        <Link href="/settings" className="p-3">
          Settings
        </Link>
        <Link href="/help" className="p-3">
          Help
        </Link>
      </ul>
    </aside>
  );
}
