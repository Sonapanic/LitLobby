import BookCards from './BookCards.jsx'



const CardDiv = ({ books, isSelected, selectThisBook, setIndicateSubmit, handleEditSubmit }) => {

        return (<div className='cardDiv'>
            <BookCards books={books} isSelected={isSelected} selectThisBook={selectThisBook} setIndicateSubmit={setIndicateSubmit} handleEditSubmit={handleEditSubmit}/>
        </div>)

}




export default CardDiv