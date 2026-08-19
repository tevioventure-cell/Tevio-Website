// Dialog — modal overlay
// Props: open (bool), title, children, onClose, actions (node)
export default function Dialog({ open, title, children, onClose, actions }) {
  if (!open) return null;
  return (
    <div style={{ position:'fixed',inset:0,background:'rgba(14,41,71,.45)',backdropFilter:'blur(2px)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000 }}
         onClick={onClose}>
      <div style={{ background:'var(--surface-card)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-lg)',padding:'var(--space-6)',width:400,maxWidth:'90vw' }}
           onClick={e=>e.stopPropagation()}>
        {title && <p style={{ font:'var(--weight-semibold) var(--text-md)/var(--leading-snug) var(--font-body)',margin:'0 0 var(--space-2)',color:'var(--text-primary)' }}>{title}</p>}
        <div style={{ font:'var(--weight-regular) var(--text-sm)/var(--leading-relaxed) var(--font-body)',color:'var(--text-secondary)',margin:'0 0 var(--space-5)' }}>{children}</div>
        {actions && <div style={{ display:'flex',gap:'var(--space-3)',justifyContent:'flex-end' }}>{actions}</div>}
      </div>
    </div>
  );
}
