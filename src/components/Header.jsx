import NewBookBtn from './NewBookBtn.jsx'






const Header = ({ setToBeAdded, toBeAdded }) => {

    
    return (
        <div className='headerDiv'>
            <h1 id='title'>Lit<i>Lobby</i></h1>
            <NewBookBtn setToBeAdded={setToBeAdded} toBeAdded={toBeAdded}/>
        </div>
    )
}








export default Header