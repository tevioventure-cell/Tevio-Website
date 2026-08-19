// Switch — toggle
// Props: label, checked, onChange
export default function Switch({ label, checked, onChange }) {
  return (
    <label style={{ display:'inline-flex', alignItems:'center', gap:'var(--space-3)', cursor:'pointer' }}>
      <span style={{ position:'relative', width:40, height:22, display:'inline-block', flexShrink:0 }}>
        <input type="checkbox" checked={checked} onChange={onChange} style={{ opacity:0, width:0, height:0 }} />
        <span style={{ position:'absolute', inset:0, background: checked ? 'var(--accent-primary)' : 'var(--slate-300)', borderRadius:'var(--radius-pill)', transition:'background 120ms' }}></span>
        <span style={{ position:'absolute', top:3, left: checked ? 21 : 3, width:16, height:16, background:'#fff', borderRadius:'50%', transition:'left 120ms', boxShadow:'var(--shadow-sm)' }}></span>
      </span>
      {label && <span style={{ font:'var(--weight-medium) var(--text-sm)/1 var(--font-body)', color:'var(--text-secondary)' }}>{label}</span>}
    </label>
  );
}
