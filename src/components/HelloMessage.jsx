export default function HelloMessage() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white/60 p-10 shadow-sm backdrop-blur dark:bg-slate-900/60">
        <h2 className="bg-gradient-to-br from-red-600 via-rose-600 to-orange-600 bg-clip-text text-center text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Hello, zorld!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-300">
          You just spun up a minimalistic hello world app with a clean, modern aesthetic.
        </p>
      </div>
    </section>
  );
}
