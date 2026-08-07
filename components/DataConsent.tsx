
import React from 'react';
import { Link } from 'react-router-dom';

export const POLICY_PATH = '/politica-de-datos';

interface DataConsentProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Mensaje de error mostrado cuando se intenta enviar sin aceptar. */
  error?: string | null;
  /** Activa la validación nativa del navegador (solo en formularios con submit). */
  required?: boolean;
  className?: string;
}

/**
 * Casilla de autorización de tratamiento de datos personales (Ley 1581 de 2012).
 * Debe acompañar a todo formulario que recolecte datos de contacto.
 */
export const DataConsent: React.FC<DataConsentProps> = ({
  id = 'data-consent',
  checked,
  onChange,
  error,
  required,
  className = '',
}) => {
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 interactive">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          required={required}
          onChange={(e) => onChange(e.target.checked)}
          aria-describedby={error ? errorId : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-zinc-400 bg-transparent text-[#1FCDD2] accent-[#1FCDD2] focus:outline-none focus:ring-2 focus:ring-[#1FCDD2]/50 dark:border-zinc-500"
        />
        <span className="text-[13px] leading-relaxed text-zinc-600 dark:text-neutral-400">
          Autorizo a <span className="font-medium text-zinc-900 dark:text-white">MTM Marca Tu Marca Creativos S.A.S.</span>{' '}
          el tratamiento de mis datos personales con las finalidades descritas en su{' '}
          <Link
            to={POLICY_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#1FCDD2] underline underline-offset-4 hover:opacity-80"
          >
            Política de Tratamiento de Datos Personales
          </Link>
          , conforme a la Ley 1581 de 2012.
        </span>
      </label>

      {error && (
        <p id={errorId} role="alert" className="mt-3 pl-8 text-[12px] text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

/** Nota informativa breve para mostrar junto a un formulario. */
export const DataConsentNote: React.FC<{ className?: string }> = ({ className = '' }) => (
  <p className={`text-[12px] leading-relaxed text-zinc-500 dark:text-neutral-500 ${className}`}>
    Tus datos se usarán únicamente para contactarte y gestionar tu solicitud. Puedes conocer, actualizar, rectificar o
    suprimir tus datos en cualquier momento según nuestra{' '}
    <Link
      to={POLICY_PATH}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#1FCDD2] underline underline-offset-4 hover:opacity-80"
    >
      Política de Tratamiento de Datos
    </Link>
    .
  </p>
);
