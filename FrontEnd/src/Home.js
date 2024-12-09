import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  return ( 
    <>
    <Navbar/>
    <body style={{backgroundColor:'#181f26'}}>
      <div className="container-fluid">
        <div className="row" id="hm">
          <div className="col-sm-1"></div>
          <div className="col-sm-5" id="Intro">
            <h2 id="intro">
                Electricity Consumption Prediction
            </h2>
            <p id="text1">
                PowerPredict enables accurate forecasting of electricity consumption. 
                By analyzing historical data and patterns, it provides precise predictions 
                using advanced time series forecasting techniques. This portal is specifically 
                designed to cater to the needs of industries and households in the United States. 
                The data used for prediction is sourced from reliable government and industry portals 
                to ensure accuracy. While the predictions aim to assist in better decision-making and resource management, 
                they are influenced by external factors like unexpected weather changes and seasonal variations.
                 This initiative strives to help optimize energy usage and reduce uncertainties in energy planning.
            </p>
          </div>
          <div className="col-sm-1" id="img1">
            <img src="Pic1.png" atl="Introduction image" width="680px"/>
          </div>

        </div>
      </div>
      <div className="Concept">
        <div className="heading">
            <h2>Why Electricity Consumption Prediction</h2>
        </div>
        <div className="content">
          <p>
          Electricity consumption prediction is critical for planners and policymakers at national and regional levels to make timely and effective decisions. An accurate prediction model can guide energy providers to optimize supply and demand, ensuring efficiency. Developing nations like India, with rapidly increasing energy demands, must focus on innovative technologies to manage energy resources effectively. Early-stage electricity forecasting is crucial for energy planning, though it is challenging due to the nonlinear nature of consumption patterns. Factors such as weather conditions, industrial activity, and population density are highly dynamic and vary across regions. Data for this study was collected over a 10-year period from multiple sources, including residential, commercial, and industrial sectors across diverse states in the United States.
          </p>
        </div>
      </div>
      <br /><br />
      <div className="buttun">s
        <Link to="/predict"><button id="btn">Get Power Prediction</button></Link>
      </div>
      <br /><br />
      
    </body>
    <Footer/>
    </>
   );
}
 
export default Home;

