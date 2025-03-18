import { Outlet } from "react-router"

const About = () => {
  return (
    <div>
      About Page
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default About
