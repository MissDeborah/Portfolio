import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 shadow" style={{ backgroundColor: '#E5D5C0', color: '#3A0D08' }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <p className="text-2xl font-bold hover:underline px-2">Debbie</p>
        <nav className="flex gap-8">
          <Link href="#home" className="hover:underline font-semibold">Home</Link>
          <Link href="#about" className="hover:underline font-semibold">About</Link>
          <Link href="#projects" className="hover:underline font-semibold">Project</Link>
          <Link href="#skills" className="hover:underline font-semibold">Skill</Link>
        </nav>
      </div>
    </header>
  );
}