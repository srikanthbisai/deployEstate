import { useContext } from "react";
import Searchbar from "../../components/searchbar/Searchbar";
import "./homepage.scss";
import { AuthContext } from "../../context/AuthContext";
function Homepage() {

  const {currentUser} = useContext(AuthContext);
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Welcome to your one-stop shop for everything real estate! Whether you're a seasoned investor or a first-time homebuyer, our comprehensive website empowers you to navigate the exciting world of property ownership. Dive deep into each property with high-quality photos, and interactive floor plans.
          </p>
          <Searchbar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>

            <div className="box">
              <h1>2000+</h1>
              <h2>Properties Ready</h2>
            </div>

          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="bg.png" alt="bg" />
      </div>
    </div>
  );
}

export default Homepage;
