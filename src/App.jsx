import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import BookCards from './components/BookCards'

// const url = 'http://localhost:5173/books'

function App() {
  
  const [books, setBooks] = useState([])

  // useEffect(() => {
  //   async function populateAllBooks() {
  //     const result = await fetch(url)

  //     setBooks(result)
  //     console.log(books)
  //   }
  //   populateAllBooks()
  // }, [])


  return <>
    <Header />
    <BookCards books={books}/>
  </>
}

export default App
