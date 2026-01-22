import "./styles/Modal.css"
import { TextInput, DateInput } from "./Inputs"
import { useState } from "react"
import Button from "./Button"

function Modal({setModalOpen, modalState, details, setDetails}) {

    const [modalDetails, setModalDetails] = useState({
        uuid: crypto.randomUUID()
    })
    
    const closeModal = () => {
        setModalOpen(false)
    }

    const saveDetails = (e) => {
        e.preventDefault()
        switch (modalState) {
            case 1:
                setDetails({
                    ...details,
                    work: [...details.work, modalDetails].sort((a, b) => b.startdate - a.startdate)
                })
                setModalOpen(false)
                break;

            case 2:
                setDetails({
                    ...details,
                    education: [...details.education, modalDetails].sort((a, b) => b.startdate - a.startdate)
                })
                setModalOpen(false)
                break;

            case 3:
                setDetails({
                    ...details,
                    skills: [...details.skills, modalDetails]
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
                {modalState === 2 && <EducationForm 
                                        modalDetails={modalDetails} 
                                        setModalDetails={setModalDetails} 
                                        closeModal={closeModal}
                                        saveDetails={saveDetails}
                                    />}
                {modalState === 3 && <SkillsForm 
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

function EducationForm({modalDetails, setModalDetails, closeModal, saveDetails}) {
    return (
        <form noValidate>
            <TextInput id="university" title="University:" details={modalDetails} setDetails={setModalDetails}/>
            <TextInput id="course" title="Course:" details={modalDetails} setDetails={setModalDetails}/>
            <div className={`main-input date-input-container`}>
                <DateInput id="startdate" title="Start Date:" details={modalDetails} setDetails={setModalDetails} />
                <DateInput id="enddate" title="End Date:" details={modalDetails} setDetails={setModalDetails} />
            </div>
            <div className="button-row">
                <Button handleClick={closeModal} className="cancel-btn" name="Cancel"/>
                <Button handleClick={saveDetails} className="save-btn" name="Save"/>
            </div>
        </form>
    )
}

function SkillsForm({modalDetails, setModalDetails, closeModal, saveDetails}) {
    return (
        <form noValidate>
            <TextInput id="skill" title="Skill:" details={modalDetails} setDetails={setModalDetails}/>
            <div className="button-row">
                <Button handleClick={closeModal} className="cancel-btn" name="Cancel"/>
                <Button handleClick={saveDetails} className="save-btn" name="Save"/>
            </div>
        </form>
    )
}

export default Modal