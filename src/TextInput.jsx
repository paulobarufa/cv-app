import "./styles/TextInput.css"
import { useState } from "react"

function TextInput({id, title, details, setDetails}) {

    const [value, setValue] = useState("");

    const handleOnChange = (e) => {

        setValue(e.target.value)
        setDetails({
            ...details,
            [id]: e.target.value
        })
    };

    return (
        <div className="main-input">
            <label htmlFor={id}>{title}</label>
            <input type="text" id={id} value={value} onChange={handleOnChange} />
        </div>
    )
}

export default TextInput