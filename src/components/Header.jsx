import NewBookBtn from './NewBookBtn.jsx'






const Header = ({ setToBeAdded, toBeAdded, selectThisBook }) => {

    
    return (
        <div className='headerDiv'>
            <h1 id='title'>Lit<i id='titleItalic'>Lobby</i></h1>
            <NewBookBtn setToBeAdded={setToBeAdded} toBeAdded={toBeAdded} selectThisBook={selectThisBook}/>
        </div>
    )
}








export default Header