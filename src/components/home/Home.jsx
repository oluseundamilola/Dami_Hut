import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className="homeContainer">
            <div className="homeTextContainer">
                <div className="heading">Delicious</div>
                <div className="subHeading">Quench Your Hunger</div>
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing  velit iste labore illo, fugiat fuga harum? Nulla laborum laudantium eos architecto facilis.
                </p>
                <a href='#meal'><button className="homeButton">Quench Now</button></a>
            </div>
            <div className="homepicture">
              <div className="imgdiv">
                <img src="/img/centerimage.png" alt="" className="centerImg" />
                <img src="/img/centerimage (2).png" alt="" className="centerImg2" />
                <img src="/img/centerimage (1).png" alt="" className="centerImg3" />
              </div>
            </div>
            <img src="/img/cover.png" alt="" className="coverImg" />
        </div>
        
    </div>
  )
}

export default Home