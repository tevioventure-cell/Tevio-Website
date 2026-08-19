// Select — dropdown
// Props: label, options ([{value,label}]), value, onChange, required
export default function Select({ label, options=[], value, onChange, required }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-2)' }}>
      {label && <label style={{ font:'var(--weight-medium) var(--text-sm)/1 var(--font-body)', color:'var(--text-primary)' }}>{label}{required && ' *'}</label>}
      <select value={value} onChange={onChange} required={required}
        style={{ width:'100%', padding:'10px 14px', border:'1px solid var(--border-default)', borderRadius:'var(--radius-md)', font:'var(--weight-regular) var(--text-sm)/1 var(--font-body)', color:'var(--text-primary)', background:'var(--surface-card)', outline:'none' }}>
        {options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}
