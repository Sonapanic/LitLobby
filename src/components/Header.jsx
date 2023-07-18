import NewBookBtn from './NewBookBtn.jsx'






const Header = () => {

    const handleClick = () => {
        console.log('Clicked!') 
        return
    }

    return (
        <div className='headerDiv'>
            <h1 id='title'>Lit<i>Lobby</i></h1>
            <NewBookBtn onClick={handleClick}/>
        </div>
    )
}








export default Header