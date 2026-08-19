// Tabs — underline nav
// Props: tabs ([{id,label}]), active (id), onChange (fn)
export default function Tabs({ tabs=[], active, onChange }) {
  return (
    <div style={{ display:'flex', gap:0, borderBottom:'1px solid var(--border-subtle)' }}>
      {tabs.map(t=>(
        <button key={t.id} onClick={()=>onChange(t.id)}
          style={{
            padding:'10px 18px', background:'transparent',
            font:'var(--weight-medium) var(--text-sm)/1 var(--font-body)',
            color: active===t.id ? 'var(--text-primary)' : 'var(--text-tertiary)',
            borderBottom: active===t.id ? '2px solid var(--navy-900)' : '2px solid transparent',
            border:'none', borderBottom: active===t.id ? '2px solid var(--navy-900)' : '2px solid transparent',
            cursor:'pointer', marginBottom:-1, transition:'color 120ms',
          }}>
          {t.label}
        </button>
      ))}
    </div>
  );
}
