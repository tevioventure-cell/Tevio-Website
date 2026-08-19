// Tooltip — hover label
// Props: label (string), children
import { useState } from 'react';
export default function Tooltip({ label, children }) {
  const [vis, setVis] = useState(false);
  return (
    <span style={{ position:'relative', display:'inline-flex' }}
          onMouseEnter={()=>setVis(true)} onMouseLeave={()=>setVis(false)}>
      {children}
      {vis && (
        <span style={{
          position:'absolute', bottom:'calc(100% + 8px)', left:'50%', transform:'translateX(-50%)',
          background:'var(--navy-900)', color:'#fff',
          font:'var(--weight-regular) var(--text-xs)/1.4 var(--font-body)',
          padding:'6px 10px', borderRadius:'var(--radius-sm)', whiteSpace:'nowrap', zIndex:50,
        }}>{label}</span>
      )}
    </span>
  );
}
