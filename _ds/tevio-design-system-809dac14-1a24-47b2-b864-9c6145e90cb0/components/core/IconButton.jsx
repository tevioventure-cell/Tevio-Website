// IconButton — compact icon-only button
// Props: variant ('ghost'|'filled'|'solid'), size ('md'|'lg'), onClick, children (icon), title
const variantMap = {
  ghost:  { background: 'transparent', color: 'var(--text-secondary)' },
  filled: { background: 'var(--slate-100)', color: 'var(--text-primary)' },
  solid:  { background: 'var(--accent-primary)', color: 'var(--text-inverse)' },
};
export default function IconButton({ variant = 'ghost', size = 'md', onClick, children, title }) {
  const v = variantMap[variant] || variantMap.ghost;
  const dim = size === 'lg' ? '44px' : '36px';
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, borderRadius: 'var(--radius-md)',
        border: 'none', cursor: 'pointer',
        background: v.background, color: v.color,
        transition: 'background 120ms ease',
      }}
    >
      {children}
    </button>
  );
}
