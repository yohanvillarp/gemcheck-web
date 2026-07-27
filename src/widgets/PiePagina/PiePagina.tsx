import { MarkGithubIcon } from '@primer/octicons-react';
import { Check, Copy, Heart } from 'lucide-react';
import { useState } from 'react';

const NpmIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
  </svg>
);

export const PiePagina = () => {
  const [copiado, setCopiado] = useState(false);

  const copiarComando = () => {
    navigator.clipboard.writeText('npm install -g @nikelyh/gemcheck');
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <footer className="bg-white dark:bg-black py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-black dark:border-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold uppercase tracking-widest mb-2">Gemcheck</h2>
          <p className="font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
            Hecho con <Heart size={18} className="fill-black dark:fill-white" /> para desarrolladores
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <button
            onClick={copiarComando}
            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-900 px-4 py-2 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 font-mono text-sm font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]"
          >
            $ npm i -g @gemcheck/cli
            {copiado ? <Check size={16} /> : <Copy size={16} />}
          </button>
          <a
            href="https://www.npmjs.com/package/@gemcheck/cli"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-bold uppercase tracking-wider hover:underline underline-offset-8 decoration-4"
          >
            <NpmIcon size={24} />
            NPM
          </a>
          <a
            href="https://github.com/yohanvillarp/gemcheck"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-bold uppercase tracking-wider hover:underline underline-offset-8 decoration-4"
          >
            <MarkGithubIcon size={24}/>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
