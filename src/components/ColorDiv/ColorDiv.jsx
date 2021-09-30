const ColorDiv = ({ color, id, onChange, checked}) => {

    return (
        <div className="form-field">
            <input type="checkbox" className='checkbox' id={id} onChange={onChange} checked={checked} />
            <label className={color} htmlFor={id}/>
        </div>
    )
}

export default ColorDiv