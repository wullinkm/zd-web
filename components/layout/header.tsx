import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-blue-600">
          ZD Jobs
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/vacancies"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            Browse Jobs
          </Link>
        </nav>
      </div>
    </header>
  );
}
