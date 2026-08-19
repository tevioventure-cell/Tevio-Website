// Card — surface container
// Props: title, children, footer (node)
export default function Card({ title, children, footer }) {
  return (
    <div style={{
      background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-6)',
    }}>
      {title && <p style={{ font: 'var(--weight-semibold) var(--text-md)/var(--leading-snug) var(--font-body)', margin: '0 0 var(--space-2)', color: 'var(--text-primary)' }}>{title}</p>}
      <div style={{ font: 'var(--weight-regular) var(--text-sm)/var(--leading-relaxed) var(--font-body)', color: 'var(--text-secondary)' }}>{children}</div>
      {footer && <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-4)', marginTop: 'var(--space-5)' }}>{footer}</div>}
    </div>
  );
}
