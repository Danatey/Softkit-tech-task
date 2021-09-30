import './ColorContainer.scss';

const ColorContainer = ({ color, id, onChange, checked }) => {

    return (
        <li className="checkbox-container">
            <input type="checkbox" className='checkbox' id={id} onChange={onChange} checked={checked} />
            <label className={color} htmlFor={id}/>
        </li>
    )
}

export default ColorContainer;