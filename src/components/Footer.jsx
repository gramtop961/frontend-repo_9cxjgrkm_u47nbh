export default function Footer() {
  return (
    <footer className="w-full px-6 py-10">
      <div className="mx-auto max-w-5xl text-center text-sm text-slate-500 dark:text-slate-400">
        Built with love • {new Date().getFullYear()}
      </div>
    </footer>
  );
}
