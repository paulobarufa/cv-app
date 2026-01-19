import "./styles/View.css"

function View({details}) {

    return (
        <div className="view">
            <PersonalDetails details={details} />
        </div>
    )
}

function PersonalDetails({details}) {

    return (
        <div className="personal-details">
            <h3>{details.nameinput}</h3>
            <div className="details-wrapper">
                {details.emailinput && <p>{details.emailinput}</p>}
                {details.contactinput && <><p>|</p><p>{details.contactinput}</p></>}
                {details.locationinput && <><p>|</p><p>{details.locationinput}</p></>}
                {details.githubinput && <><p>|</p><p>{details.githubinput}</p></>}
            </div>
        </div>
    )
}


export default View