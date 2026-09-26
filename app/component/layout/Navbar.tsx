import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "AI Assistant", href: "/ai-assistant" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-lg text-white">
            🛍️
          </div>

          <div>
            <h1 className="text-lg font-bold leading-none text-slate-900">
              AI <span className="text-violet-600">Mart</span>
            </h1>
            <p className="mt-0.5 text-[9px] text-slate-400">
              Smart Shopping, Smarter You
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-violet-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          
          {/* Search */}
          <div className="hidden items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 lg:flex">
            <span className="mr-2 text-slate-400">⌕</span>

            <input
              type="text"
              placeholder="Search products..."
              className="w-40 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Cart */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-violet-50 hover:text-violet-600"
          >
            🛒
            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
              2
            </span>
          </button>

          {/* Profile */}
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-violet-300 hover:text-violet-600 sm:flex"
          >
            👤
          </button>

          {/* Mobile menu */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-lg md:hidden"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}