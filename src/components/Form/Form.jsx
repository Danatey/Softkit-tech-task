import ColorDiv from "../ColorDiv/ColorDiv"

const Form = ({ handleSubmit, colorArray, handleChange }) => {
    
    return (
        <form onSubmit={handleSubmit}>
            {colorArray.map(({color,id, checked}) => {
                return (<ColorDiv color={color} key={id} id={id} onChange={handleChange} checked={checked} handleChange={handleChange}/>)
            })}
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form