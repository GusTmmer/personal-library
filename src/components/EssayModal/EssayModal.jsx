import { memo, useEffect, useRef } from 'react'
import styles from './EssayModal.module.css'

export default memo(function EssayModal({ book, onClose }) {
  const closeButtonRef = useRef(null)
  const isOpen = book !== null

  useEffect(() => {
    if (book) closeButtonRef.current?.focus()
  }, [book])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const paragraphs = book?.essay
    ? book.essay.split(/\n\n+/).filter(Boolean)
    : []

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.visible : ''}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className={`${styles.modal} ${isOpen ? styles.open : ''}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={book ? `Essay: ${book.title}` : 'Essay'}
      >
        {book && (
          <>
            <button className={styles.closeBtn} onClick={onClose} ref={closeButtonRef} aria-label="Close">
              ×
            </button>

            <div className={styles.header}>
              <img src={book.coverUrl} alt={`Cover of ${book.title}`} className={styles.cover} />
              <div className={styles.headerMeta}>
                <h2 className={styles.title}>{book.title}</h2>
                <p className={styles.author}>{book.author}</p>
                {book.status === 'plan-to-read' && (
                  <span className={styles.badge}>Plan to read</span>
                )}
              </div>
            </div>

            <div className={styles.essayBody}>
              {paragraphs.length > 0 ? (
                paragraphs.map((p, i) => <p key={i} className={styles.paragraph}>{p}</p>)
              ) : (
                <p className={styles.empty}>No essay written yet.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
})
