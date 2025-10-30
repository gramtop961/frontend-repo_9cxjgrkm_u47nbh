import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 text-white shadow">
            <Rocket className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Minimal Hello
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">A tiny, elegant starter</p>
          </div>
        </div>
      </div>
    </header>
  );
}
