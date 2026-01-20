import "./styles/Modal.css"
import { TextInput, DateInput } from "./Inputs"
import { useState } from "react"

function Modal({setModalOpen, modalState, details, setDetails}) {

    const [modalDetails, setModalDetails] = useState({})

    return (
        <div className="modal-background">
            <div className="modal-container">
                {modalState === 1 && <WorkForm modalDetails={modalDetails} setModalDetails={setModalDetails} />}

            </div>
        </div>
        
    )
}

function WorkForm({modalDetails, setModalDetails}) {

    return (
        <form noValidate>
            <TextInput id="company" title="Company name:" details={modalDetails} setDetails={setModalDetails}/>
            <TextInput id="jobtitle" title="Job Title:" details={modalDetails} setDetails={setModalDetails}/>
            <div className={`main-input date-input-container`}>
                <DateInput id="startdate" title="Start Date:" details={modalDetails} setDetails={setModalDetails} />
                <DateInput id="enddate" title="End Date:" details={modalDetails} setDetails={setModalDetails} />
            </div>
            <TextInput id="joblocation" title="Job Location:" details={modalDetails} setDetails={setModalDetails}/>
        </form>
    )
}

function EducationForm({}) {

}

function SkillsForm({}) {

}

export default Modal