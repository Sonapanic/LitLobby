import { useState } from "react"
import DeleteBtn from './DeleteBtn.jsx'





const EditForm = ({ selectThisBook, setIndicateSubmit, book, handleEditSubmit, setToBeDeleted }) => {

    const [titleValue, setTitleValue] = useState(book.title)
    const changeTitle = (e) => {
        setTitleValue(e.currentTarget.value)
    }

    const [authorValue, setAuthorValue] = useState(book.author)
    const changeAuthor = (e) => {
        setAuthorValue(e.currentTarget.value)
    }

    const [descriptionValue, setDescriptionValue] = useState(book.description)
    const changeDescription = (e) => {
        setDescriptionValue(e.currentTarget.value)
    }

    const [genreValue, setGenreValue] = useState(book.genre)
    const changeGenre = (e) => {
        setGenreValue(e.currentTarget.value)
    }

    const [pageValue, setPageValue] = useState(book.page)
    const changePage = (e) => {
        setPageValue(e.currentTarget.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIndicateSubmit({
            title: titleValue,
            author: authorValue,
            description: descriptionValue,
            genre: genreValue,
            page: pageValue,
            id: book.id
        })
        selectThisBook({})   
    }






    
    return (
        <div className='editContainer'>
            <form id='selectedBookForm' onSubmit={handleSubmit}>

                <input className="formText" type='text' value={titleValue} id="bookTitle" onChange={changeTitle} required></input>
                <label>Title</label>
            
                <input className="formText" type='text' id="author" value={authorValue} onChange={changeAuthor} required></input>
                <label>Author</label>

                <textarea className="formText" id="noResize" value={descriptionValue} onChange={changeDescription} required></textarea>
                <label>Description</label>               
                
                <input className="formText" type='text' value={genreValue} id="genre"onChange={changeGenre} required></input>
                <label>Genre</label>
              
                <input className="formText" type='number' value={pageValue} id="page"onChange={changePage} required></input>
                <label>What page did you leave off on?</label>

                <input className="btn" type='submit' id="editSubmitBtn" required></input>

                <DeleteBtn setToBeDeleted={setToBeDeleted} book={book}/>
            </form>
        </div>
    )
}





export default EditForm