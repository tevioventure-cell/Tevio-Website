// Toast — transient notification
// Props: tone ('info'|'success'|'warning'|'danger'), children
const dotColor = { info:'var(--navy-500)', success:'var(--success)', warning:'var(--warning)', danger:'var(--danger)' };
const borderColor = { info:'var(--navy-500)', success:'var(--success)', warning:'var(--warning)', danger:'var(--danger)' };
export default function Toast({ tone = 'info', children }) {
  return (
    <div style={{
      display:'inline-flex', alignItems:'center', gap:'var(--space-4)',
      padding:'14px var(--space-4)', borderRadius:'var(--radius-md)',
      boxShadow:'var(--shadow-md)', background:'var(--surface-card)',
      borderLeft:`3px solid ${borderColor[tone]}`,
      font:'var(--weight-medium) var(--text-sm)/1 var(--font-body)',
    }}>
      <span style={{ width:8,height:8,borderRadius:'50%',flexShrink:0,background:dotColor[tone] }}></span>
      {children}
    </div>
  );
}
