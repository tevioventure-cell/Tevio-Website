/* @ds-bundle: {"format":4,"namespace":"TevioDesignSystem_809dac","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f52042419eca","components/core/Button.jsx":"151a94acc0f7","components/core/Card.jsx":"7ad158ad5e50","components/core/IconButton.jsx":"b7b931d91d31","components/core/Tag.jsx":"e4680ee4c71d","components/feedback/Dialog.jsx":"091726ce07b7","components/feedback/Toast.jsx":"84a411bea11e","components/feedback/Tooltip.jsx":"afd08cb7cc4b","components/forms/Checkbox.jsx":"cf790a6e3183","components/forms/Input.jsx":"fe7c188d8c99","components/forms/Radio.jsx":"a923df3c3afc","components/forms/Select.jsx":"f642d1e4c051","components/forms/Switch.jsx":"7caa15bb1318","components/navigation/Tabs.jsx":"9d20d2778255","ui_kits/verify-app/Dashboard.jsx":"2d0dac7799dd","ui_kits/verify-app/Login.jsx":"7bf8748f7898","ui_kits/verify-app/RequestDetail.jsx":"559d7dff74f5","ui_kits/verify-app/Requests.jsx":"0ab313651e1d","ui_kits/verify-app/Settings.jsx":"acac45973888","ui_kits/verify-app/Sidebar.jsx":"025da355acba","ui_kits/verify-app/TopBar.jsx":"9874f443ada9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TevioDesignSystem_809dac = window.TevioDesignSystem_809dac || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  children
}) {
  const tones = {
    neutral: {
      background: 'var(--slate-100)',
      color: 'var(--slate-700)'
    },
    success: {
      background: 'var(--success-surface)',
      color: 'var(--success)'
    },
    warning: {
      background: 'var(--warning-surface)',
      color: 'var(--amber-600)'
    },
    danger: {
      background: 'var(--danger-surface)',
      color: 'var(--danger-hover)'
    },
    brand: {
      background: 'var(--navy-100)',
      color: 'var(--navy-900)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  icon,
  children,
  onClick
}) {
  const pad = size === 'sm' ? '8px 14px' : size === 'lg' ? '14px 24px' : '11px 18px';
  const fontSize = size === 'sm' ? 'var(--text-sm)' : size === 'lg' ? 'var(--text-md)' : 'var(--text-sm)';
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize,
    border: '1px solid transparent',
    borderRadius: 'var(--radius-md)',
    padding: pad,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast)',
    opacity: disabled ? 0.5 : 1
  };
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--text-inverse)'
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)'
    },
    danger: {
      background: 'var(--danger)',
      color: 'var(--text-inverse)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    style: {
      ...base,
      ...variants[variant]
    },
    disabled: disabled,
    onClick: onClick,
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = 'scale(.97)'),
    onMouseUp: e => e.currentTarget.style.transform = 'scale(1)'
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  title,
  subtitle,
  children,
  footer,
  elevated = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      boxShadow: elevated ? 'var(--shadow-md)' : 'none',
      padding: 'var(--space-6)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginTop: -8
    }
  }, subtitle), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      paddingTop: 'var(--space-3)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  'aria-label': ariaLabel,
  onClick
}) {
  const dim = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)'
    },
    filled: {
      background: 'var(--navy-100)',
      color: 'var(--navy-900)'
    },
    solid: {
      background: 'var(--accent-primary)',
      color: 'var(--text-inverse)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": ariaLabel,
    onClick: onClick,
    style: {
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-md)',
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...variants[variant]
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 8px 4px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      border: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-primary)'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'var(--slate-100)',
      borderRadius: '50%',
      width: 16,
      height: 16,
      cursor: 'pointer',
      fontSize: 10,
      lineHeight: 1,
      color: 'var(--slate-700)'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(14,41,71,0.45)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-6)',
      width: 380,
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--text-tertiary)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-2)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'success',
  message,
  onDismiss
}) {
  const icons = {
    success: 'check-circle',
    warning: 'alert-triangle',
    danger: 'alert-octagon',
    neutral: 'info'
  };
  const tones = {
    success: 'var(--success)',
    warning: 'var(--warning)',
    danger: 'var(--danger)',
    neutral: 'var(--navy-700)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--navy-900)',
      color: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://unpkg.com/lucide-static@0.462.0/icons/${icons[tone]}.svg`,
    style: {
      width: 18,
      height: 18,
      filter: 'invert(1)'
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--slate-400)',
      cursor: 'pointer',
      fontSize: 16
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '125%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--navy-900)',
      color: 'var(--white)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      border: checked ? 'none' : '1.5px solid var(--border-strong)',
      background: checked ? 'var(--accent-primary)' : 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@0.462.0/icons/check.svg",
    style: {
      width: 13,
      height: 13,
      filter: 'invert(1)'
    },
    alt: ""
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  error,
  helpText,
  icon,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      width: '100%',
      maxWidth: 320
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: `1px solid ${error ? 'var(--danger)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--white)'
    }
  }, icon, /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    disabled: disabled,
    style: {
      border: 'none',
      outline: 'none',
      flex: 1,
      fontSize: 'var(--text-base)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      background: 'transparent'
    }
  })), (error || helpText) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-tertiary)'
    }
  }, error || helpText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(),
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--accent-primary)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      width: '100%',
      maxWidth: 320
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      fontSize: 'var(--text-base)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--white)'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent-primary)' : 'var(--slate-300)',
      position: 'relative',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-normal) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  tabs = [],
  defaultIndex = 0
}) {
  const [active, setActive] = useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.label,
    onClick: () => setActive(i),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '10px 2px',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: active === i ? 'var(--text-primary)' : 'var(--text-tertiary)',
      borderBottom: active === i ? '2px solid var(--accent-primary)' : '2px solid transparent',
      marginBottom: -1,
      transition: 'color var(--duration-fast)'
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) 0'
    }
  }, tabs[active] && tabs[active].content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/verify-app/Dashboard.jsx
try { (() => {
function Dashboard() {
  const stats = [{
    label: 'Pending review',
    value: 12,
    tone: 'warning'
  }, {
    label: 'Verified today',
    value: 48,
    tone: 'success'
  }, {
    label: 'Flagged',
    value: 3,
    tone: 'danger'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      flex: 1,
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-tertiary)',
      fontWeight: 500
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      color: 'var(--text-primary)',
      marginTop: 6
    }
  }, s.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-primary)',
      marginBottom: 14
    }
  }, "Recent activity"), [['Passport · Jamie Chen', 'Verified', 'success'], ['Utility bill · Alex Rowe', 'Pending', 'warning'], ['Driver license · Sam Ito', 'Verified', 'success'], ['Bank statement · Priya N.', 'Rejected', 'danger']].map(([name, status, tone]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: `var(--${tone === 'success' ? 'success-surface' : tone === 'warning' ? 'warning-surface' : 'danger-surface'})`,
      color: `var(--${tone === 'success' ? 'success' : tone === 'warning' ? 'amber-600' : 'danger-hover'})`
    }
  }, status)))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/verify-app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/verify-app/Login.jsx
try { (() => {
function Login({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-sunken)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 40,
      width: 340,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-transparent.png",
    style: {
      height: 32
    },
    alt: "Tevio"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      textAlign: 'center'
    }
  }, "Sign in to verify and manage requests"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Email",
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      fontSize: 14,
      fontFamily: 'var(--font-body)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Password",
    type: "password",
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      fontSize: 14,
      fontFamily: 'var(--font-body)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onLogin,
    style: {
      width: '100%',
      background: 'var(--navy-900)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '12px',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, "Sign in")));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/verify-app/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/verify-app/RequestDetail.jsx
try { (() => {
function RequestDetail({
  request,
  onBack
}) {
  const r = request || ['REQ-1042', 'Jamie Chen', 'Passport', 'Verified', 'success'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onBack,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--text-secondary)',
      fontSize: 13,
      cursor: 'pointer',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@0.462.0/icons/arrow-left.svg",
    style: {
      width: 14,
      height: 14
    },
    alt: ""
  }), " Back to requests"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--text-primary)'
    }
  }, r[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-tertiary)',
      fontFamily: 'var(--font-mono)',
      marginTop: 2
    }
  }, r[0], " \xB7 ", r[2])), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      background: `var(--${r[4] === 'success' ? 'success-surface' : r[4] === 'warning' ? 'warning-surface' : 'danger-surface'})`,
      color: `var(--${r[4] === 'success' ? 'success' : r[4] === 'warning' ? 'amber-600' : 'danger-hover'})`
    }
  }, r[3])), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      height: 200,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-sunken)',
      border: '1px dashed var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-tertiary)',
      fontSize: 13
    }
  }, "Document preview"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'var(--navy-900)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '10px 18px',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "Approve"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: '#fff',
      color: 'var(--danger)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 18px',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "Reject"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)',
      marginBottom: 10
    }
  }, "Timeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, "Submitted \xB7 Jul 16, 9:02am"), /*#__PURE__*/React.createElement("div", null, "Auto-checks passed \xB7 Jul 16, 9:03am"), /*#__PURE__*/React.createElement("div", null, "Assigned to reviewer \xB7 Jul 16, 9:10am")))));
}
window.RequestDetail = RequestDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/verify-app/RequestDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/verify-app/Requests.jsx
try { (() => {
function Requests({
  onOpen
}) {
  const rows = [['REQ-1042', 'Jamie Chen', 'Passport', 'Verified', 'success'], ['REQ-1043', 'Alex Rowe', 'Utility bill', 'Pending', 'warning'], ['REQ-1044', 'Sam Ito', 'Driver license', 'Verified', 'success'], ['REQ-1045', 'Priya N.', 'Bank statement', 'Rejected', 'danger'], ['REQ-1046', 'Morgan Lee', 'Passport', 'Pending', 'warning']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Search requests",
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '9px 12px',
      fontSize: 13,
      width: 240,
      fontFamily: 'var(--font-body)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'var(--navy-900)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '9px 16px',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "New request")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      padding: '10px 20px',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-tertiary)',
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "ID"), /*#__PURE__*/React.createElement("span", null, "Name"), /*#__PURE__*/React.createElement("span", null, "Document"), /*#__PURE__*/React.createElement("span", null, "Status")), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    onClick: () => onOpen && onOpen(r),
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      padding: '14px 20px',
      fontSize: 14,
      borderTop: '1px solid var(--border-subtle)',
      cursor: 'pointer',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)',
      fontSize: 12
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, r[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      width: 'fit-content',
      background: `var(--${r[4] === 'success' ? 'success-surface' : r[4] === 'warning' ? 'warning-surface' : 'danger-surface'})`,
      color: `var(--${r[4] === 'success' ? 'success' : r[4] === 'warning' ? 'amber-600' : 'danger-hover'})`
    }
  }, r[3])))));
}
window.Requests = Requests;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/verify-app/Requests.jsx", error: String((e && e.message) || e) }); }

// ui_kits/verify-app/Settings.jsx
try { (() => {
function Settings() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      fontFamily: 'var(--font-body)',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--text-primary)',
      marginBottom: 20
    }
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, [['Email notifications', true], ['SMS alerts for rejections', false], ['Weekly summary digest', true]].map(([label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: val ? 'var(--navy-900)' : 'var(--slate-300)',
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: val ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff'
    }
  }))))));
}
window.Settings = Settings;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/verify-app/Settings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/verify-app/Sidebar.jsx
try { (() => {
function Sidebar({
  active = 'dashboard',
  onNavigate
}) {
  const items = [{
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'layout-dashboard'
  }, {
    key: 'requests',
    label: 'Requests',
    icon: 'file-check'
  }, {
    key: 'contacts',
    label: 'Contacts',
    icon: 'users'
  }, {
    key: 'settings',
    label: 'Settings',
    icon: 'settings'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      background: 'var(--navy-900)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px',
      gap: 4,
      fontFamily: 'var(--font-body)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-transparent.png",
    style: {
      height: 26,
      filter: 'brightness(0) invert(1)',
      margin: '0 8px 24px'
    },
    alt: "Tevio"
  }), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.key,
    onClick: () => onNavigate && onNavigate(it.key),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: active === it.key ? 'rgba(255,255,255,0.12)' : 'transparent',
      color: active === it.key ? '#fff' : 'var(--navy-300)',
      fontSize: 14,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://unpkg.com/lucide-static@0.462.0/icons/${it.icon}.svg`,
    style: {
      width: 17,
      height: 17,
      filter: 'invert(1)',
      opacity: active === it.key ? 1 : 0.65
    },
    alt: ""
  }), it.label)));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/verify-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/verify-app/TopBar.jsx
try { (() => {
function TopBar({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 28px',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@0.462.0/icons/bell.svg",
    style: {
      width: 19,
      height: 19,
      opacity: 0.7
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--navy-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      color: 'var(--navy-900)',
      fontSize: 13
    }
  }, "JC")));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/verify-app/TopBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
