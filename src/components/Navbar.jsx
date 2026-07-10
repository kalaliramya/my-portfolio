import profilePic from "../assets/Profile.png";
export default function Navbar() {
  return (
    <nav>
      <div className="nav-brand">
        Ramya <span>K</span>
      </div>

      <ul className="nav-links">
        <li><a href="#about"> About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
<img
  src={profilePic} alt="Profile" className="nav-dot" />
      
    </nav>
  )
}