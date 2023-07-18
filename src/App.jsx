import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import CardDiv from './components/CardDiv.jsx'

const url = 'https://litlobby.onrender.com/books'
// const url = 'http://localhost:10000/books'

function App() {
  
  const [books, setBooks] = useState([])
  const [indicateSubmit, setIndicateSubmit] = useState(null)
  const [isSelected, setIsSelected] = useState({})
  const [toBeDeleted, setToBeDeleted] = useState(null)

  const selectThisBook = (book) => {
    setIsSelected(book)
  }

  // Renders all the current books to the page
  async function populateAllBooks() {
    try {
      const result = await fetch(url)
    if (!result.ok) {
      throw new Error('Not ok')
    }
    const books = await result.json()
    setBooks(books)
    } catch (err) {
      console.error(err)
    }
  }

  // Get all function, initial load
  useEffect(() => {
    populateAllBooks()
  }, [])



 // Edit one functions - useEffect for detecting state change, handleEditSubmit for executing fetch request
  useEffect(() => {
    if (indicateSubmit) {
      handleEditSubmit()
    }
  }, [indicateSubmit])

  
  const handleEditSubmit = async () => {
  
      if (indicateSubmit && indicateSubmit.title && indicateSubmit.author && indicateSubmit.description && indicateSubmit.genre && indicateSubmit.page) {
        try {
          const id = indicateSubmit.id;
          delete indicateSubmit.id;
          const result = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(indicateSubmit)
          });
          const response = await result.json();
          console.log(response);
        } catch (err) {
          console.error(err);
        }
        populateAllBooks();
    } else {
      alert('Fill in all fields')
    }
  };
  
  

  // Delete functions - useEffect for detecting state change, removeBook for executing the fetch request
  useEffect(() => {
    if (toBeDeleted) {
      removeBook()
    }
  }, [toBeDeleted])

  const removeBook = async () => {
    try {
      const { id } = toBeDeleted
      const result = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        }
      })
      const deleted = await result.json()
      console.log(deleted)
    } catch (err) {
      console.error(err)
    }
    populateAllBooks()
  }

  

  return <>
    <Header />
    <CardDiv books={books} isSelected={isSelected} selectThisBook={selectThisBook} setIndicateSubmit={setIndicateSubmit} handleEditSubmit={handleEditSubmit} toBeDeleted={toBeDeleted} setToBeDeleted={setToBeDeleted}/>
  </>
}


export default App
