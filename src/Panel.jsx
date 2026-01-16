import "./styles/Panel.css"
import TextInput from "./TextInput.jsx"

function Panel({details, setDetails}) {

    return (
        <div className="panel">
            <h2>Personal Details</h2>
            <TextInput 
                details={details}
                setDetails={setDetails}
                id="name-input"
                title="Full Name:"
            />
            <TextInput 
                details={details}
                setDetails={setDetails}
                id="email-input"
                title="Email:"
            />
            <TextInput 
                details={details}
                setDetails={setDetails}
                id="contact-input"
                title="Contact Number:"
            />
            <TextInput 
                details={details}
                setDetails={setDetails}
                id="location-input"
                title="Location:"
            />
            <TextInput 
                details={details}
                setDetails={setDetails}
                id="github-input"
                title="Github link:"
            />
        </div>
    )
}

export default Panel