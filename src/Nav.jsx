import { useState } from "react"
import "./styles/Nav.css"


export default function Nav() {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="nav-bar">
            <NavItem 
                title="Personal Details"
                isActive={activeIndex === 0}
                onClick={() => setActiveIndex(0)}
            ></NavItem>
            <NavItem 
                title="Work Experience"
                isActive={activeIndex === 1}
                onClick={() => setActiveIndex(1)}
            ></NavItem>
            <NavItem 
                title="Education"
                isActive={activeIndex === 2}
                onClick={() => setActiveIndex(2)}
            ></NavItem>
            <NavItem 
                title="Skills"
                isActive={activeIndex === 3}
                onClick={() => setActiveIndex(3)}
            ></NavItem>
        </div>
    )
}



function NavItem({title, isActive, onClick}) {

    return (
        <button className={isActive ? "selected" : ""} onClick={onClick}>{title}</button>
    )
}