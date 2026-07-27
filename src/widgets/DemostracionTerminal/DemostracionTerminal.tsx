

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
              <span className="text-green-400">~/proyecto</span> $ gemcheck scan --ui
            </p>
            <p className="text-gray-400 mb-1">➤ Iniciando análisis de gemcheck...</p>
            <p className="text-gray-400 mb-2">⠋ Analizando...⚡ [CACHÉ] No se detectaron cambios en el código. Cargando reporte anterior...</p>
            <p className="mb-4 text-green-400 font-bold">✔ [OK] Análisis completado con éxito!</p>
            <p className="mb-1 text-white">Proyecto: <span className="text-gray-300">~/proyecto</span></p>
            <p className="mb-1 text-white">TDR: <span className="text-yellow-400 font-bold">0.78%</span></p>
            <p className="text-gray-400 mb-4">Reportes guardados en ./reports</p>
            <p className="mb-1 text-blue-400 font-bold">[UI] Servidor del Dashboard iniciado en http://localhost:3333</p>
            <p className="text-blue-400">[UI] Abriendo navegador... (Presiona Ctrl+C para detener)</p>
          </div>
        </div>
      </div>
    </section>
  );
};
