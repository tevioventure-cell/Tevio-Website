// Badge — status pill
// Props: tone ('neutral'|'success'|'warning'|'danger'|'brand'), children
const toneMap = {
  neutral: { background: 'var(--slate-100)',        color: 'var(--text-secondary)' },
  success: { background: 'var(--success-surface)',  color: 'var(--success)' },
  warning: { background: 'var(--warning-surface)',  color: 'var(--amber-600)' },
  danger:  { background: 'var(--danger-surface)',   color: 'var(--danger)' },
  brand:   { background: 'var(--navy-100)',         color: 'var(--navy-900)' },
};
export default function Badge({ tone = 'neutral', children }) {
  const s = toneMap[tone] || toneMap.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '3px 10px', borderRadius: 'var(--radius-pill)',
      font: 'var(--weight-medium) var(--text-xs)/1 var(--font-body)',
      letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
      background: s.background, color: s.color,
    }}>
      {children}
    </span>
  );
}
