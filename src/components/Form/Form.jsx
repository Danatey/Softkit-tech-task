import ColorContainer from "../ColorContainer";

const Form = ({ handleSubmit, colorArray, handleChange }) => {
    
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {colorArray.map(({color,id, checked}) => {
                    return (<ColorContainer color={color} key={id} id={id} onChange={handleChange} checked={checked} handleChange={handleChange}/>)
                })}
            </ul>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;