import React from 'react';
import { Heart } from 'lucide-react';

export const PiePagina = () => {
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
          <a
            href="https://www.npmjs.com/package/@gemcheck/cli"
            target="_blank"
            rel="noreferrer"
            className="font-bold uppercase tracking-wider hover:underline underline-offset-8 decoration-4"
          >
            NPM
          </a>
          <a
            href="https://github.com/yohanvillarp/gemcheck"
            target="_blank"
            rel="noreferrer"
            className="font-bold uppercase tracking-wider hover:underline underline-offset-8 decoration-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
