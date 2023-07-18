import BookCards from './BookCards.jsx'



const CardDiv = ({ books, isSelected, selectThisBook, setIndicateSubmit, handleEditSubmit, setToBeDeleted }) => {

        return (<div className='cardDiv'>
            <BookCards books={books} isSelected={isSelected} selectThisBook={selectThisBook} setIndicateSubmit={setIndicateSubmit} handleEditSubmit={handleEditSubmit} setToBeDeleted={setToBeDeleted}/>
        </div>)

}




export default CardDiv