import { memo } from 'react'
import styles from './BookCard.module.css'

export default memo(function BookCard({ book, isSelected, onSelect }) {
  const isPlanToRead = book.status === 'plan-to-read'

  return (
    <article
      className={`${styles.card} ${isSelected ? styles.selected : ''}`}
      aria-label={`${book.title} by ${book.author}${isPlanToRead ? ' (plan to read)' : ''}`}
    >
      <button
        className={styles.coverWrapper}
        onClick={() => onSelect(book)}
        aria-pressed={isSelected}
      >
        <img
          src={book.coverUrl}
          alt={`Cover of ${book.title}`}
          className={styles.cover}
          loading="lazy"
        />
        {isPlanToRead && <span className={styles.ribbon} aria-hidden="true" />}
      </button>
      <div className={styles.meta}>
        <p className={styles.title}>{book.title}</p>
        <p className={styles.author}>{book.author}</p>
      </div>
    </article>
  )
})
