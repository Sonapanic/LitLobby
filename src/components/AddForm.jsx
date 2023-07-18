import { useState } from "react"





const AddForm = ({ setIsNewBook }) => {

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

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsNewBook({
            title: titleValue,
            author: authorValue,
            page: pageValue,
            genre: genreValue,
            description: descriptionValue
        })
    }


    return ( 
        <div className="addDiv">
            <form className="form" id="addForm" onSubmit={handleSubmit}>

                <input className="formText" type='text' value={titleValue} id="bookTitle" onChange={changeTitle} required></input>
                <label className="addLabel">Title</label>

                
                <input className="formText" type='text' id="author" value={authorValue} onChange={changeAuthor} required></input>
                <label className="addLabel">Author</label>
                
                <textarea className="formText" value={descriptionValue} onChange={changeDescription} required></textarea>
                <label className="addLabel">Description</label>
                
                <input className="formText" type='text' value={genreValue} id="genre"onChange={changeGenre} required></input>
                <label className="addLabel">Genre</label>
                
                <input className="formText" type='number' value={pageValue} id="page"onChange={changePage} required></input>
                <label className="addLabel">What page did you leave off on?</label>

                <input className="btn" id="addSubmitBtn" type='submit'></input>
            </form>
        </div>
    )
}








export default AddForm