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

    return (
        <div className="personal-details">
            <h3>{details.nameinput}</h3>
            <div className="details-wrapper">
                {details.emailinput && <p>{details.emailinput}</p>}
                {details.contactinput && <><p>|</p><p>{details.contactinput}</p></>}
                {details.locationinput && <><p>|</p><p>{details.locationinput}</p></>}
                {details.githubinput && <><p>|</p><p>{details.githubinput}</p></>}
            </div>
            {experienceList && <h4>WORK EXPERIENCE</h4>}
            {experienceList && <div className="work-wrapper">{experienceList}</div>}
            
        </div>
    )
}


export default View