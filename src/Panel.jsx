import "./styles/Panel.css"
import { TextInput } from "./Inputs.jsx"
import Button from "./Button.jsx";
import { useState } from "react";


function Panel({details, setDetails, activeIndex, openModal}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [location, setLocation] = useState("");
    const [github, setGithub] = useState("");

    const personalProps = {
        name: name,
        setName: setName,
        email: email,
        setEmail: setEmail,
        contact: contact,
        setContact: setContact,
        location: location,
        setLocation: setLocation,
        github: github,
        setGithub: setGithub
    }

    return (
        <div className="panel">
            {activeIndex === 0 && <DetailsPanel props={personalProps} details={details} setDetails={setDetails}/>}
            {activeIndex === 1 && <WorkExperiencePanel details={details} openModal={openModal} />}
        </div>
    )
}

function DetailsPanel({props, details, setDetails}) {

    return (
        <>
            <h2>Personal Details</h2>
            <TextInput 
                details={details}
                setDetails={setDetails}
                value={props.name}
                setValue={props.setName}
                id="nameinput"
                title="Full Name:"
            />
            <TextInput 
                details={details}
                setDetails={setDetails}
                value={props.email}
                setValue={props.setEmail}
                id="emailinput"
                title="Email:"
            />
            <TextInput 
                details={details}
                setDetails={setDetails}
                value={props.contact}
                setValue={props.setContact}
                id="contactinput"
                title="Contact Number:"
            />
            <TextInput 
                details={details}
                setDetails={setDetails}
                value={props.location}
                setValue={props.setLocation}
                id="locationinput"
                title="Location:"
            />
            <TextInput 
                details={details}
                setDetails={setDetails}
                value={props.github}
                setValue={props.setGithub}
                id="githubinput"
                title="Github link:"
            />
        </>
    )
}

function WorkExperiencePanel({details, openModal}) {
    
    return (
        <>
            <h2>Work Experience</h2>
            <Button name="Add experience" handleClick={openModal}></Button>
        </>
    )
}

export default Panel