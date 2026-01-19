import "./styles/TextInput.css"

function TextInput({id, title, details, setDetails, value, setValue}) {

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
            <input type="text" id={id} key={id} value={value} onChange={handleOnChange} />
        </div>
    )
}

export default TextInput