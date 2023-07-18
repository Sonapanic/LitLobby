






const DeleteBtn = ({ setToBeDeleted, book }) => {


    const handleClick = (e) => {
        e.preventDefault()
        setToBeDeleted(book)
    }


    return <button className="btn" id="deleteBtn" onClick={handleClick}>Delete</button>


}






export default DeleteBtn