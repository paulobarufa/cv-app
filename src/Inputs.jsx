import "./styles/Inputs.css"

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

function DateInput({id, title, details, setDetails}) {

    const handleOnChange = (e) => {

        setDetails({
            ...details,
            [id]: e.target.value
        })
    };

    return (
        <div>
            <label htmlFor={id}>{title}</label>
            <input type="date" id={id} key={id} onChange={handleOnChange} />
        </div>
    )
}

export { TextInput, DateInput }