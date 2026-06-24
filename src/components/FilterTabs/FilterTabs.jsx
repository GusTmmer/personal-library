import { memo, useLayoutEffect, useRef, useState } from 'react'
import styles from './FilterTabs.module.css'

const TABS = [
  { value: 'all', label: 'All' },
  { value: 'read', label: 'Read' },
  { value: 'plan-to-read', label: 'Plan to Read' },
]

export default memo(function FilterTabs({ active, onChange }) {
  const tabRefs = useRef([])
  const [pillStyle, setPillStyle] = useState({})

  useLayoutEffect(() => {
    const activeIndex = TABS.findIndex((t) => t.value === active)
    const el = tabRefs.current[activeIndex]
    if (el) {
      setPillStyle({ left: el.offsetLeft, width: el.offsetWidth })
    }
  }, [active])

  return (
    <div role="tablist" aria-label="Filter books" className={styles.tabs}>
      <div className={styles.pill} style={pillStyle} aria-hidden="true" />
      {TABS.map((tab, i) => (
        <button
          key={tab.value}
          role="tab"
          ref={(el) => (tabRefs.current[i] = el)}
          className={`${styles.tab} ${active === tab.value ? styles.active : ''}`}
          onClick={() => onChange(tab.value)}
          aria-selected={active === tab.value}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
})
