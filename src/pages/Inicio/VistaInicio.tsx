import React from 'react';
import { BarraNavegacion } from '@/widgets/BarraNavegacion/BarraNavegacion';
import { CabeceraPrincipal } from '@/widgets/CabeceraPrincipal/CabeceraPrincipal';
import { TarjetasCaracteristicas } from '@/widgets/TarjetasCaracteristicas/TarjetasCaracteristicas';
import { DemostracionTerminal } from '@/widgets/DemostracionTerminal/DemostracionTerminal';
import { PiePagina } from '@/widgets/PiePagina/PiePagina';

export const VistaInicio = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <BarraNavegacion />
      <CabeceraPrincipal />
      <TarjetasCaracteristicas />
      <DemostracionTerminal />
      <PiePagina />
    </main>
  );
};
