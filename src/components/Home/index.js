import { Link } from "react-router-dom"
import LogoTitle from "../../assets/images/logo-s.png"
import "./index.scss"


const Home = function (){

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm</h1>
                <img src={LogoTitle} alt = "developer"></img>
                    DevAshura
                    <br />
                    <h1>web developer </h1>
                    <h2>Frontend Developer/Backend Dev/ Athlete</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}


export default Home;