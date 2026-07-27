import { useState } from 'react';
import { BookOpen, Terminal, Copy, Check } from 'lucide-react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-7a5.2 5.2 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.6s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a4.9 4.9 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.5 9c0 5.5 3 6.7 6 7a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

export const CabeceraPrincipal = () => {
  const [copiado, setCopiado] = useState(false);

  const copiarComando = () => {
    navigator.clipboard.writeText('npm install -g @gemcheck/cli');
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-black dark:border-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="bg-black dark:bg-white text-white dark:text-black p-4 border-4 border-black dark:border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] mb-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
          <Terminal size={48} strokeWidth={2.5} />
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-widest mb-6">
          Tu asistente de terminal
          <br className="hidden sm:block" />
          para cuidar la salud del código
        </h1>
        
        <p className="text-xl sm:text-2xl mb-12 max-w-2xl font-medium">
          Gemcheck es un CLI amigable que te ayuda a medir la deuda técnica, encontrar cuellos de botella y descubrir dependencias ocultas en segundos.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <a
            href="https://github.com/yohanvillarp/gemcheck"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 font-bold uppercase tracking-wider border-4 border-black dark:border-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0_0_rgba(255,255,255,1)] hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-300"
          >
            <GithubIcon size={24} />
            GitHub
          </a>
          <a
            href="#documentacion"
            className="flex items-center justify-center gap-3 bg-white dark:bg-black text-black dark:text-white px-8 py-4 font-bold uppercase tracking-wider border-4 border-black dark:border-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0_0_rgba(255,255,255,1)] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            <BookOpen size={24} />
            Documentación
          </a>
        </div>

        <button 
          onClick={copiarComando}
          className="flex items-center justify-center gap-4 bg-gray-100 dark:bg-gray-900 border-4 border-black dark:border-white px-6 py-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,1)] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 cursor-pointer"
        >
          <span className="text-gray-500 font-mono font-bold">$</span>
          <code className="font-mono text-lg font-bold mr-2">npm install -g @gemcheck/cli</code>
          {copiado ? <Check size={20} /> : <Copy size={20} />}
        </button>
      </div>
    </section>
  );
};
