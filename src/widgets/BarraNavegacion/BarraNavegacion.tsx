
import { Logo } from '@/shared/ui/Logo/Logo';
import { usarTema } from '@/app/providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export const BarraNavegacion = () => {
  const { tema, alternarTema } = usarTema();

  return (
    <header className="w-full sticky top-0 bg-white dark:bg-black border-b-4 border-black dark:border-white py-4 px-6 sm:px-8 flex items-center justify-between z-50 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <div className="text-black dark:text-white transition-colors duration-300">
          <Logo size={32} />
        </div>
        <span className="font-bold uppercase tracking-widest text-xl">Gemcheck</span>
      </div>
      
      <nav className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-6 mr-2">
          <a href="#documentacion" className="font-bold uppercase tracking-wider hover:underline underline-offset-8 decoration-4">
            Docs
          </a>
          <a href="https://github.com/yohanvillarp/gemcheck" target="_blank" rel="noreferrer" className="font-bold uppercase tracking-wider hover:underline underline-offset-8 decoration-4">
            GitHub
          </a>
        </div>
        
        <button
          onClick={alternarTema}
          className="p-2 border-4 border-black dark:border-white bg-transparent hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)] transition-all duration-300 flex items-center justify-center text-black dark:text-white"
          aria-label="Alternar modo oscuro"
        >
          {tema === 'dark' ? <Sun size={24} strokeWidth={2.5} /> : <Moon size={24} strokeWidth={2.5} />}
        </button>
      </nav>
    </header>
  );
};
