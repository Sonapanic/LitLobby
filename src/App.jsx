import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import BookCards from './components/BookCards.jsx'

// const url = 'http://localhost:5173/books'

function App() {
  
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function populateAllBooks() {
      const result = await fetch(url)
      const data = await result.json()
      setBooks(data)
      console.log(books)
    }
    populateAllBooks()
  }, [])


  return <>
    <Header />
    <BookCards books={books}/>
  </>
}

export default App
