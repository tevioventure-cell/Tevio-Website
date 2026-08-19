// Button — primary action
// Props: variant ('primary'|'secondary'|'ghost'|'danger'), size ('sm'|'md'|'lg'), disabled, icon, onClick, children
const variantMap = {
  primary:   { background: 'var(--accent-primary)',  color: 'var(--text-inverse)', border: 'none' },
  secondary: { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-default)' },
  ghost:     { background: 'transparent', color: 'var(--text-primary)', border: 'none' },
  danger:    { background: 'var(--danger)', color: 'var(--text-inverse)', border: 'none' },
};
const sizeMap = {
  sm: { padding: '8px 14px', fontSize: 'var(--text-xs)' },
  md: { padding: '12px 20px', fontSize: 'var(--text-sm)' },
  lg: { padding: '16px 28px', fontSize: 'var(--text-md)' },
};
export default function Button({ variant = 'primary', size = 'md', disabled, icon, onClick, children }) {
  const v = variantMap[variant] || variantMap.primary;
  const s = sizeMap[size] || sizeMap.md;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        borderRadius: 'var(--radius-md)', cursor: disabled ? 'default' : 'pointer',
        font: `var(--weight-semibold) ${s.fontSize}/1 var(--font-body)`,
        padding: s.padding, opacity: disabled ? 0.45 : 1,
        background: v.background, color: v.color, border: v.border,
        transition: 'background 120ms ease',
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
