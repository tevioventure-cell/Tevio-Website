// Checkbox
// Props: label, checked, onChange
export default function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{ display:'inline-flex', alignItems:'center', gap:'var(--space-3)', cursor:'pointer', font:'var(--weight-regular) var(--text-sm)/1 var(--font-body)', color:'var(--text-primary)' }}>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ width:16, height:16, accentColor:'var(--accent-primary)', cursor:'pointer' }} />
      {label}
    </label>
  );
}
