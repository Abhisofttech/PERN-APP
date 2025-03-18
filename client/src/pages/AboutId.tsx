import { useParams } from "react-router"


const AboutId = () => {
    const params = useParams()
    const Id = params.Id;
  return (
    <div>
      <h1>This is About Page with Id: {Id}</h1>
    </div>
  )
}

export default AboutId
