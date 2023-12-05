import LogoTitle from "../../assets/images/logo-s.png"

const Home = function (){

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm</h1>
                <img src={LogoTitle} alt = "developer"></img>
            </div>
        </div>
    )
}


export default Home;