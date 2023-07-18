import AddForm from './AddForm.jsx'




const NewBookBtn = ({ setToBeAdded, toBeAdded, selectThisBook }) => {

    const handleClick = () => {
        setToBeAdded(!toBeAdded)
        selectThisBook({})
    }

    if (!toBeAdded) {
        return <button className="btn" id="headerBtn" onClick={handleClick}>+ New Book</button>
    }

    return <button className="btn" id="headerBtn" onClick={handleClick}>Exit</button>

    


}



export default NewBookBtn