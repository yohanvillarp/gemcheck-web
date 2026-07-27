import React from 'react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { VistaInicio } from '@/pages/Inicio/VistaInicio';

export const App = (): React.ReactElement => {
  return (
    <ThemeProvider>
      <VistaInicio />
    </ThemeProvider>
  );
};

export default App;
