function Button({name, handleClick, className="", uuid=""}) {

    return (
        <button onClick={handleClick} className={className} uuid={uuid}>{name}</button>
    )
}

export default Button