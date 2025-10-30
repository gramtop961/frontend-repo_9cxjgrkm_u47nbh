import Header from './components/Header';
import HelloMessage from './components/HelloMessage';
import InfoCards from './components/InfoCards';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-100 text-slate-900 dark:from-rose-950 dark:to-red-900 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-200/40 via-red-200/20 to-orange-200/10 dark:from-rose-900/30 dark:via-red-900/20 dark:to-orange-900/10" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 pb-10">
        <Header />
        <HelloMessage />
        <InfoCards />
        <Footer />
      </div>
    </div>
  );
}
