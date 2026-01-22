import { Fragment } from "react"
import "./styles/View.css"
import { format } from "date-fns"

function View({details}) {

    return (
        <div className="view">
            <PersonalDetails details={details} />
        </div>
    )
}

function PersonalDetails({details}) {

    const experienceList = details.work.map(experience => {
        return (
            <div className="view-item" key={experience.uuid}>
                <div className="row">
                    <p className="view-title">{experience.company}</p>
                    <p className="view-dates">{`${format(experience.startdate, "MMM yyyy")} - ${format(experience.enddate, "MMM yyyy")}`}</p>
                </div>
                <div className="row">
                    <p className="view-text">{experience.jobtitle}</p>
                    <p className="view-location">{experience.joblocation}</p>
                </div>
            </div>
        )}
    )

    const educationList = details.education.map(experience => {
        return (
            <div className="view-item" key={experience.uuid}>
                <div className="row">
                    <p className="view-title">{experience.university}</p>
                    <p className="view-dates">{`${format(experience.startdate, "MMM yyyy")} - ${format(experience.enddate, "MMM yyyy")}`}</p>
                </div>
                <div className="row">
                    <p className="view-text">{experience.course}</p>
                </div>
            </div>
        )}
    )



    const skillList = details.skills.map((experience, index) => {
        return (
            <Fragment key={experience.uuid} >
                {index > 0 && <p>|</p>}
                <p>{experience.skill}</p>
            </Fragment>
        )}
    )

    return (
        <div className="personal-details">
            <h3>{details.nameinput}</h3>
            <div className="details-wrapper">
                {details.emailinput && <p>{details.emailinput}</p>}
                {details.contactinput && <><p>|</p><p>{details.contactinput}</p></>}
                {details.locationinput && <><p>|</p><p>{details.locationinput}</p></>}
                {details.githubinput && <><p>|</p><p>{details.githubinput}</p></>}
            </div>
            {experienceList.length > 0 && <h4>WORK EXPERIENCE</h4>}
            {experienceList && <div className="work-wrapper">{experienceList}</div>}

            {educationList.length > 0 && <h4>EDUCATION</h4>}
            {educationList && <div className="work-wrapper">{educationList}</div>}

            {skillList.length > 0 && <h4>SKILLS</h4>}
            {skillList && <div className="skills-wrapper">{skillList}</div>}
            
        </div>
    )
}




export default View