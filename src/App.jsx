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


  // Edit one function
  const handleEditSubmit = async () => {
    if (indicateSubmit !== null) {
      if (indicateSubmit.title && indicateSubmit.author && indicateSubmit.description && indicateSubmit.genre && indicateSubmit.page) {
        try {
          const id = indicateSubmit.id;
          delete indicateSubmit.id;
          console.log(indicateSubmit);
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
        setIndicateSubmit(null);
      } else {
        alert('Please fill in all fields.');
      }
    }
  };
  
  
  

  return <>
    <Header />
    <CardDiv books={books} isSelected={isSelected} selectThisBook={selectThisBook} setIndicateSubmit={setIndicateSubmit} handleEditSubmit={handleEditSubmit}/>
  </>
}


export default App
