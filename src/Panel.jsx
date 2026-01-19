import "./styles/Panel.css"
import TextInput from "./TextInput.jsx"

function Panel({details, setDetails}) {

    return (
        <div className="panel">
            <h2>Personal Details</h2>
            <TextInput 
                details={details}
                setDetails={setDetails}
                id="nameinput"
                title="Full Name:"
            />
            <TextInput 
                details={details}
                setDetails={setDetails}
                id="emailinput"
                title="Email:"
            />
            <TextInput 
                details={details}
                setDetails={setDetails}
                id="contactinput"
                title="Contact Number:"
            />
            <TextInput 
                details={details}
                setDetails={setDetails}
                id="locationinput"
                title="Location:"
            />
            <TextInput 
                details={details}
                setDetails={setDetails}
                id="githubinput"
                title="Github link:"
            />
        </div>
    )
}

export default Panel