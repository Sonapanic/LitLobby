import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import BookCards from './components/BookCards.jsx'

const url = 'https://litlobby.onrender.com/books'
// const url = 'http://localhost:10000/books'

function App() {
  
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function populateAllBooks() {
      try {
        const result = await fetch(url)
      if (!result.ok) {
        throw new Error('Not ok')
      }
      const books = await result.json()
      setBooks(books)
      console.log(books)
      } catch (err) {
        console.error(err)
      }
    }
    populateAllBooks()
  }, [])


  return <>
    <Header />
    <BookCards books={books}/>
  </>
}


export default App
