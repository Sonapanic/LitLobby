




const NewBookBtn = () => {


    const handleClick = () => {
        console.log('Clicked!')
        return 
    }


    return (
        <>
            <ul onClick={handleClick}>
                <li>+ New Book</li>
            </ul>
        </>
    )


}



export default NewBookBtn