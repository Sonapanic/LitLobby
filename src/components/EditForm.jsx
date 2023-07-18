import { useState } from "react"
import DeleteBtn from './DeleteBtn.jsx'





const EditForm = ({ selectThisBook, setIndicateSubmit, book, handleEditSubmit, setToBeDeleted }) => {

    const [titleValue, setTitleValue] = useState('')
    const changeTitle = (e) => {
        setTitleValue(e.currentTarget.value)
    }

    const [authorValue, setAuthorValue] = useState('')
    const changeAuthor = (e) => {
        setAuthorValue(e.currentTarget.value)
    }

    const [descriptionValue, setDescriptionValue] = useState('')
    const changeDescription = (e) => {
        setDescriptionValue(e.currentTarget.value)
    }

    const [genreValue, setGenreValue] = useState('')
    const changeGenre = (e) => {
        setGenreValue(e.currentTarget.value)
    }

    const [pageValue, setPageValue] = useState('')
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
            <form id='selectedBookForm'>
                <label>Title</label>
                <input type='text' value={titleValue} id="bookTitle" onChange={changeTitle}></input>

                <label>Author</label>
                <input type='text' id="author" value={authorValue} onChange={changeAuthor} ></input>

                <label>Description</label>
                <input type='text' id="description" value={descriptionValue} onChange={changeDescription}></input>
                
                <label>Genre</label>
                <input type='text' value={genreValue} id="genre"onChange={changeGenre}></input>
              
                <label>What page did you leave off on?</label>
                <input type='text' value={pageValue} id="page"onChange={changePage}></input>

                <input type='submit' onClick={handleSubmit} id="editSubmitBtn"></input>

                <DeleteBtn setToBeDeleted={setToBeDeleted} book={book}/>
            </form>
        </div>
    )
}





export default EditForm