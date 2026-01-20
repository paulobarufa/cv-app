import "./styles/Modal.css"
import { TextInput, DateInput } from "./Inputs"
import { useState } from "react"
import Button from "./Button"

function Modal({setModalOpen, modalState, details, setDetails}) {

    const [modalDetails, setModalDetails] = useState({})
    
    const closeModal = () => {
        setModalOpen(false)
    }

    const saveDetails = (e) => {
        e.preventDefault()
        switch (modalState) {
            case 1:
                setDetails({
                    ...details,
                    work: [...details.work, modalDetails]
                })
                setModalOpen(false)
                break;
        
            default:
                break;
        }
    }


    return (
        <div className="modal-background">
            <div className="modal-container">
                {modalState === 1 && <WorkForm 
                                        modalDetails={modalDetails} 
                                        setModalDetails={setModalDetails} 
                                        closeModal={closeModal}
                                        saveDetails={saveDetails}
                                    />}

            </div>
        </div>
        
    )
}

function WorkForm({modalDetails, setModalDetails, closeModal, saveDetails}) {

    return (
        <form noValidate>
            <TextInput id="company" title="Company name:" details={modalDetails} setDetails={setModalDetails}/>
            <TextInput id="jobtitle" title="Job Title:" details={modalDetails} setDetails={setModalDetails}/>
            <div className={`main-input date-input-container`}>
                <DateInput id="startdate" title="Start Date:" details={modalDetails} setDetails={setModalDetails} />
                <DateInput id="enddate" title="End Date:" details={modalDetails} setDetails={setModalDetails} />
            </div>
            <TextInput id="joblocation" title="Job Location:" details={modalDetails} setDetails={setModalDetails}/>
            <div className="button-row">
                <Button handleClick={closeModal} className="cancel-btn" name="Cancel"/>
                <Button handleClick={saveDetails} className="save-btn" name="Save"/>
            </div>
        </form>
    )
}

function EducationForm({}) {

}

function SkillsForm({}) {

}

export default Modal