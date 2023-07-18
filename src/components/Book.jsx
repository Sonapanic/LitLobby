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
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <p>{book.description}</p>
            <h3>{book.genre}</h3>
            <p>{book.page}</p>
        </div>
    )
}




export default Book