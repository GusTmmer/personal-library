import { useState, useCallback } from 'react'
import { books } from './data/books'
import FilterTabs from './components/FilterTabs/FilterTabs'
import BookCard from './components/BookCard/BookCard'
import EssayModal from './components/EssayModal/EssayModal'
import styles from './App.module.css'

const BOOKS_PER_ROW = 8

function chunkArray(arr, size) {
  const rows = []
  for (let i = 0; i < arr.length; i += size) rows.push(arr.slice(i, i + size))
  return rows
}

export default function App() {
  const [filter, setFilter] = useState('all')
  const [selectedBook, setSelectedBook] = useState(null)

  const sortedBooks = [...books].sort((a, b) =>
    a.status === 'plan-to-read' && b.status !== 'plan-to-read' ? 1 : b.status === 'plan-to-read' && a.status !== 'plan-to-read' ? -1 : 0
  )

  const filteredBooks = filter === 'all'
    ? sortedBooks
    : books.filter((b) => b.status === filter)

  const shelfRows = chunkArray(filteredBooks, BOOKS_PER_ROW)

  const handleSelectBook = useCallback((book) => {
    setSelectedBook((prev) => (prev?.id === book.id ? null : book))
  }, [])

  const handleFilterChange = useCallback((value) => {
    setFilter(value)
    setSelectedBook(null)
  }, [])

  const handleClose = useCallback(() => setSelectedBook(null), [])

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.titleBlock}>
            <h1 className={styles.heading}>My Bookshelf</h1>
            <p className={styles.subheading}>Software engineering, craft, and ideas</p>
          </div>
          <FilterTabs active={filter} onChange={handleFilterChange} />
        </div>
      </header>

      <main className={styles.shelves}>
        {shelfRows.length === 0 ? (
          <div className={styles.shelfRow}>
            <div className={styles.books}>
              <p className={styles.empty}>No books in this category yet.</p>
            </div>
            <div className={styles.shelfEdge} />
          </div>
        ) : (
          shelfRows.map((row) => (
            <div key={row[0].id} className={styles.shelfRow}>
              <div className={styles.books}>
                {row.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    isSelected={selectedBook?.id === book.id}
                    onSelect={handleSelectBook}
                  />
                ))}
              </div>
              <div className={styles.shelfEdge} />
            </div>
          ))
        )}
      </main>

      <EssayModal book={selectedBook} onClose={handleClose} />
    </div>
  )
}
