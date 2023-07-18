import EditForm from './EditForm.jsx'






const Book = ({ book, isSelected, selectThisBook, setIndicateSubmit, handleEditSubmit, setToBeDeleted }) => {

    const handleClick = () => {
        selectThisBook(book)
    }
    

    if (isSelected === book) {
        return <EditForm selectThisBook={selectThisBook} setIndicateSubmit={setIndicateSubmit} book={book} handleEditSubmit={handleEditSubmit} setToBeDeleted={setToBeDeleted}/>
    }

    return (
        <div className="bookCard" onClick={handleClick}>
            <h1 className='bookTitle'><i className='bookItalic'>{book.title}</i></h1>
            <h2>{book.author}</h2>
            <div id='pDiv'>
                <p id='desc'>{book.description}</p>
            </div>
            <h3>{book.genre}</h3>
            <p className='pages'>Current Page: {book.page}</p>
        </div>
    )
}




export default Book