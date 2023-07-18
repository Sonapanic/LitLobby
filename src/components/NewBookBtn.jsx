import AddForm from './AddForm.jsx'




const NewBookBtn = ({ setToBeAdded, toBeAdded }) => {

    const handleClick = () => {
        setToBeAdded(!toBeAdded)
    }

    if (!toBeAdded) {
        return <button className="btn" id="headerBtn" onClick={handleClick}>+ New Book</button>
    }

    return <button className="btn" id="headerBtn" onClick={handleClick}>Exit</button>

    


}



export default NewBookBtn