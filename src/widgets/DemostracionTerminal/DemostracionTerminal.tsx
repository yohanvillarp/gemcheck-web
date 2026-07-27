import React from 'react';

export const DemostracionTerminal = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 border-b-4 border-black dark:border-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-widest text-center mb-16 text-black dark:text-white">
          Simplicidad al extremo
        </h2>

        <div className="w-full bg-black border-4 border-black dark:border-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] dark:shadow-[12px_12px_0_0_rgba(255,255,255,1)] p-1 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-gray-900 px-4 py-3 flex items-center gap-2 border-b-4 border-black dark:border-white">
            <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-black" />
            <div className="w-4 h-4 rounded-full bg-yellow-500 border-2 border-black" />
            <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-black" />
          </div>
          <div className="p-6 font-mono text-white text-sm sm:text-base md:text-lg leading-relaxed overflow-x-auto whitespace-pre">
            <p className="mb-2">
              <span className="text-green-400">~/proyecto</span> $ gemcheck git hotspots
            </p>
            <p className="text-gray-400 mb-4">Analizando el historial de commits...</p>
            <p className="mb-1"><span className="text-yellow-400">[ALERTA]</span> src/App.tsx - 145 cambios (Alto acoplamiento)</p>
            <p className="mb-1"><span className="text-red-400">[CRÍTICO]</span> src/utils/api.ts - 340 cambios (Deuda técnica extrema)</p>
            <p className="mb-4"><span className="text-blue-400">[INFO]</span> src/components/Button.tsx - 12 cambios (Estable)</p>
            <p className="text-green-400 font-bold">Análisis completado en 1.2s</p>
          </div>
        </div>
      </div>
    </section>
  );
};
