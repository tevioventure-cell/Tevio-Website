// Tag — removable chip
// Props: onRemove (fn), children
export default function Tag({ onRemove, children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
      padding: '5px 12px', borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-default)', background: 'var(--surface-card)',
      font: 'var(--weight-medium) var(--text-sm)/1 var(--font-body)', color: 'var(--text-secondary)',
    }}>
      {children}
      {onRemove && <span onClick={onRemove} style={{ cursor: 'pointer', opacity: 0.5, lineHeight: 1 }}>✕</span>}
    </span>
  );
}
