
import { Activity, Search, ShieldAlert, GitBranch } from 'lucide-react';

const CARACTERISTICAS = [
  {
    titulo: 'Encuentra Cuellos de Botella',
    descripcion: 'Identifica rápidamente qué archivos sufren más cambios y refactorizaciones (Hotspots).',
    icono: Activity,
  },
  {
    titulo: 'Descubre Dependencias Ocultas',
    descripcion: 'Visualiza el acoplamiento real entre módulos que no tenías mapeados mentalmente.',
    icono: Search,
  },
  {
    titulo: 'Mide el Bus Factor',
    descripcion: '¿Qué pasa si el desarrollador clave se va de vacaciones? Descubre los puntos críticos.',
    icono: ShieldAlert,
  },
  {
    titulo: 'Integración Natural en Git',
    descripcion: 'Funciona directamente leyendo tu historial de git, sin necesidad de configuraciones pesadas.',
    icono: GitBranch,
  }
];

export const TarjetasCaracteristicas = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black border-b-4 border-black dark:border-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-widest text-center mb-16 text-black dark:text-white">
          Lo que puede hacer por ti
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CARACTERISTICAS.map((caracteristica, indice) => (
            <div 
              key={indice} 
              className="group bg-white dark:bg-black border-4 border-black dark:border-white p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] hover:-translate-y-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 bg-black text-white dark:bg-white dark:text-black p-3 w-fit border-2 border-black dark:border-white group-hover:bg-white group-hover:text-black dark:group-hover:bg-black dark:group-hover:text-white transition-colors duration-300">
                <caracteristica.icono size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
                {caracteristica.titulo}
              </h3>
              <p className="font-medium text-lg leading-relaxed opacity-90 group-hover:opacity-100">
                {caracteristica.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
