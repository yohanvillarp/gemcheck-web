
import { Activity, Search, Wand2, GitBranch } from 'lucide-react';

const CARACTERISTICAS = [
  {
    titulo: 'Análisis Evolutivo Git',
    descripcion: 'Descubre Hotspots, Bus Factor y Acoplamiento Lógico leyendo tu historial sin configuraciones.',
    icono: GitBranch,
  },
  {
    titulo: 'Análisis Estático y AST',
    descripcion: 'Mide la complejidad ciclomática y cognitiva, y encuentra código duplicado al instante.',
    icono: Search,
  },
  {
    titulo: 'Dashboard Visual',
    descripcion: 'Explora un panel Neo-Brutalista interactivo en localhost para revisar y priorizar reportes.',
    icono: Activity,
  },
  {
    titulo: 'Triaje y Auto-Fix',
    descripcion: 'Clasifica la deuda técnica por riesgo y limpia código automáticamente con jscodeshift.',
    icono: Wand2,
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
