import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import CardDiv from './components/CardDiv.jsx'
import AddForm from './components/AddForm.jsx'

const url = 'https://litlobby.onrender.com/books'

function App() {
  
  const [books, setBooks] = useState([])
  const [indicateSubmit, setIndicateSubmit] = useState(null)
  const [isSelected, setIsSelected] = useState({})
  const [toBeDeleted, setToBeDeleted] = useState(null)
  const [toBeAdded, setToBeAdded] = useState(false)
  const [isNewBook, setIsNewBook] = useState(null)

  const selectThisBook = (book) => {
    setIsSelected(book)
  }

  // Functions that render all the current books to the page, useEffect for initial render
  useEffect(() => {
    populateAllBooks()
  }, [])

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



 // Edit one functions
  useEffect(() => {
    if (indicateSubmit) {
      handleEditSubmit()
    }
  }, [indicateSubmit])

  
  const handleEditSubmit = async () => {
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
    } catch (err) {
      console.error(err);
    }
    populateAllBooks();
  };
  
  

  // Delete functions
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
    } catch (err) {
      console.error(err)
    }
    populateAllBooks()
  }



  // Functions for adding a book
  useEffect(() => {
    if (isNewBook) {
      addBook()
    }
  }, [isNewBook])


  const addBook = async () => {
    try {
      const result = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(isNewBook)
      })
      const newBook = await result.json()
    } catch (err) {
      console.error(err)
    }
    populateAllBooks()
    setToBeAdded(!toBeAdded)
  }








  // Returns
  if (toBeAdded) {
    return (<>
      <Header setToBeAdded={setToBeAdded} toBeAdded={toBeAdded}/>
      <AddForm setIsNewBook={setIsNewBook}/>  
    </>
    
    )
  }

  return <>
    <Header setToBeAdded={setToBeAdded} toBeAdded={toBeAdded} selectThisBook={selectThisBook}/>
    <CardDiv books={books} isSelected={isSelected} selectThisBook={selectThisBook} setIndicateSubmit={setIndicateSubmit} handleEditSubmit={handleEditSubmit} toBeDeleted={toBeDeleted} setToBeDeleted={setToBeDeleted}/>
  </>
}


export default App
