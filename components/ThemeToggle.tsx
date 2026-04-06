import React, { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

/**
 * Interruptor claro / oscuro (Material: track + thumb, estado visible).
 * Si no hay ThemeProvider, no renderiza (evita tumbar toda la app).
 */
export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;
  const { theme, toggleTheme } = ctx;
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      onClick={toggleTheme}
      className={`relative inline-flex h-9 w-[52px] shrink-0 items-center rounded-full border transition-colors duration-300 interactive outline-none focus-visible:ring-2 focus-visible:ring-[#1FCDD2]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-[#050505] ${
        isDark
          ? 'border-white/15 bg-white/[0.08]'
          : 'border-zinc-300/80 bg-zinc-200/80 shadow-sm'
      } ${className}`}
    >
      <span
        className={`pointer-events-none absolute left-1 flex h-7 w-7 items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? 'translate-x-[22px] bg-zinc-800 text-[#1FCDD2]' : 'translate-x-0 bg-white text-amber-500'
        }`}
      >
        {isDark ? <Moon size={15} strokeWidth={2} aria-hidden /> : <Sun size={15} strokeWidth={2} aria-hidden />}
      </span>
      <span className="sr-only">{isDark ? 'Modo oscuro' : 'Modo claro'}</span>
    </button>
  );
};
