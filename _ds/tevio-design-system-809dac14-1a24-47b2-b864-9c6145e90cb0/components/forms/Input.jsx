// Input — text field
// Props: label, placeholder, value, onChange, type, required, error
export default function Input({ label, placeholder, value, onChange, type='text', required, error }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-2)' }}>
      {label && <label style={{ font:'var(--weight-medium) var(--text-sm)/1 var(--font-body)', color:'var(--text-primary)' }}>{label}{required && ' *'}</label>}
      <input
        type={type} placeholder={placeholder} value={value} onChange={onChange} required={required}
        style={{
          width:'100%', padding:'10px 14px',
          border:`1px solid ${error ? 'var(--danger)' : 'var(--border-default)'}`,
          borderRadius:'var(--radius-md)',
          font:'var(--weight-regular) var(--text-sm)/1 var(--font-body)',
          color:'var(--text-primary)', background:'var(--surface-card)', outline:'none',
        }}
      />
      {error && <span style={{ font:'var(--weight-regular) var(--text-xs)/1 var(--font-body)', color:'var(--danger)' }}>{error}</span>}
    </div>
  );
}
