import { Rocket, Star, Zap } from 'lucide-react';

function Card({ icon: Icon, title, children }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-sky-500 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{children}</p>
    </div>
  );
}

export default function InfoCards() {
  return (
    <section className="px-6">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
        <Card icon={Rocket} title="Fast">
          Vite + React gives near-instant reloads for a smooth dev experience.
        </Card>
        <Card icon={Star} title="Minimal">
          Clean structure and tiny components keep things focused.
        </Card>
        <Card icon={Zap} title="Stylish">
          Tailwind utilities make it simple to look great with little code.
        </Card>
      </div>
    </section>
  );
}
