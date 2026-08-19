// Radio
// Props: label, name, value, checked, onChange
export default function Radio({ label, name, value, checked, onChange }) {
  return (
    <label style={{ display:'inline-flex', alignItems:'center', gap:'var(--space-3)', cursor:'pointer', font:'var(--weight-regular) var(--text-sm)/1 var(--font-body)', color:'var(--text-primary)' }}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} style={{ width:16, height:16, accentColor:'var(--accent-primary)', cursor:'pointer' }} />
      {label}
    </label>
  );
}
