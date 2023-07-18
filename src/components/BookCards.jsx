import Book from './Book.jsx'




const BookCards = ({ books, isSelected, selectThisBook, setIndicateSubmit, handleEditSubmit }) => {


    


    return (
            books.map((book) => {
            return <Book book={book} key={book.id} isSelected={isSelected} selectThisBook={selectThisBook} setIndicateSubmit={setIndicateSubmit} handleEditSubmit={handleEditSubmit}/>
        })
    )
}









export default BookCards