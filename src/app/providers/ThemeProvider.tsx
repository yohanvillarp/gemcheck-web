import React, { createContext, useContext, useEffect, useState } from 'react';

type Tema = 'dark' | 'light';

interface ContextoTema {
  tema: Tema;
  alternarTema: () => void;
}

const TemaContext = createContext<ContextoTema | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [tema, setTema] = useState<Tema>('dark');

  useEffect(() => {
    const temaGuardado = localStorage.getItem('gemcheck-theme') as Tema | null;
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const temaInicial = temaGuardado ? temaGuardado : (isDark ? 'dark' : 'light');
    setTema(temaInicial);
    
    if (temaInicial === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const alternarTema = () => {
    setTema((prev) => {
      const nuevo = prev === 'light' ? 'dark' : 'light';
      if (nuevo === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('gemcheck-theme', nuevo);
      return nuevo;
    });
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export const usarTema = () => {
  const contexto = useContext(TemaContext);
  if (!contexto) {
    throw new Error('usarTema debe usarse dentro de un ThemeProvider');
  }
  return contexto;
};
