export default function Header() {
  return (
    <header className="flex justify-between gap-2 p-3 bg-secondary w-full">
      <div>
        <h1 className="text-4xl text-primary">FocusForge</h1>
        <p className="text-white text-sm">Forge Your Progress.</p>
      </div>
      <div className="flex justify-end gap-5">
        <button>Notifications</button>
        <button>Theme</button>
        <button>Users</button>
      </div>
    </header>
  );
}
