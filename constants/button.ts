export const BASE_STYLES = `
    inline-flex items-center justify-center gap-2 rounded-lg
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-[var(--brand-indigo)] focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed    
  ` as const;

export const VARIANT_STYLES = {
  primary: `
      bg-gradient-to-r from-[var(--accent-cyber-start)] to-[var(--accent-cyber-end)]
      text-white shadow-[var(--shadow-soft)]
      hover:shadow-[var(--shadow-medium)]
      active:scale-[0.97]
    `,
  secondary: `
      border-2 border-[var(--brand-indigo)] text-[var(--brand-indigo)]
      bg-transparent
      hover:bg-[var(--brand-indigo)] hover:bg-opacity-5
      active:scale-[0.97]
    `,
  ghost: `
      bg-transparent text-[var(--brand-indigo)]
      hover:bg-[var(--neutral-gray-100)]
      active:scale-[0.97]
    `,
} as const;

export const SIZE_STYLES = {
  sm: "px-3 py-2",
  default: "px-4 py-3",
  lg: "px-6 py-4",
} as const;
